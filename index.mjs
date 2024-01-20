import express from 'express';
import { Oumla } from '@oumla/sdk';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/", (req, res) => {
    res.send("Please use /status to check the status of the server");
});


app.get("/status", (request, response) => {
  const status = {
     "Status": "Running"
  };
  
  response.send(status);
});


app.get("/create-profile", async (request, response) => {
    const { type, reference } = request.query;

    if (!type || !reference) {
        return response.status(400).json({
          error: "Missing required parameters"
        });
    }
    const client = new Oumla({
        apiKey: process.env.Oumla_API_KEY,
        baseUrl: "https://sandbox.oumla.com" // by default it is https://sandbox.oumla.com
     });

    const profile = await client.createProfile({
        type:type,
        reference:reference
    });
    
    response.json(profile);
  });


app.get("/get-wallets", async (request, response) => {

  const { network , reference } = request.query;

  if (!reference) {
      return response.status(400).json({
        error: "Missing required parameters"
      });
  }
  const client = new Oumla({
      apiKey: process.env.Oumla_API_KEY,
      baseUrl: "https://sandbox.oumla.com" // by default it is https://sandbox.oumla.com
   });

   if (!network) {
    const wallet = await client.getWallets({
      reference: reference
    });
    response.json(wallet);
    }
    else{
      const wallet = await client.getWallets({
        network: network,
        reference: reference
      });
      response.json(wallet);
    }
  });

app.get("/get-transactions", async (request, response) => {
     
    const { reference } = request.query;
  
    if (!reference) {
        return response.status(400).json({
          error: "Missing required parameters"
        });
    }
    const client = new Oumla({
        apiKey: process.env.Oumla_API_KEY,
        baseUrl: "https://sandbox.oumla.com" // by default it is https://sandbox.oumla.com
    });
  
    const transactions = await client.getTransactions({
      reference: reference
    });
  
    response.json(transactions);
    });
    

  
app.get('/createWallet', async (request, response) => {
  const { network, reference } = request.query;

  if (!network || !reference) {
      return response.status(400).json({
        error: "Missing required parameters"
      });
  }
  console.log(network);
  console.log(reference);
  
    const client = new Oumla({
        apiKey: process.env.Oumla_API_KEY,
        baseUrl: "https://sandbox.oumla.com" // by default it is https://sandbox.oumla.com
    });
try{
    const wallet = await client.generateWallet({
        network: network,
        reference: reference
    });
    
  response.json(wallet);
} catch (error) {
  console.log(error);
  response.json(error);
}
});


app.get('/generateAddress', async (request, response) => {
  const { network, reference } = request.query;
  if (!network || !reference) {
      return response.status(400).json({
        error: "Missing required parameters"
      });
  }
  console.log(network);
  console.log(reference);
  const client = new Oumla({
        apiKey: process.env.Oumla_API_KEY,
        baseUrl: "https://sandbox.oumla.com" // by default it is https://sandbox.oumla.com
    });
    try{
        const address = await client.generateAddress({
            network: network,
            reference: reference
        });
        
      response.json(address);
    } catch (error) {
      console.log(error);
      response.status(502).json(error);
    }
}
);

app.get('/getAddress', async (request, response) => {
  const { reference } = request.query;
  const client = new Oumla({
    apiKey: process.env.Oumla_API_KEY,
    baseUrl: "https://sandbox.oumla.com" // by default it is https://sandbox.oumla.com
});

try {
  if (!reference) {
      const address = await client.getAddresses({
      });
      response.json(address);
      }
      else{
        const address = await client.getAddresses({
          reference: reference
        });
        response.json(address);
      }
    }
    catch(error){
      console.log(error);
      response.status(502).json(error);
    }
}
);