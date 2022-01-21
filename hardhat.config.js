require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const fs = require("fs")
const privateKeys = fs.readFileSync(".secret", 'utf-8');

module.exports = {
  networks:{
    hardhat:{
      chainId : 1337
    },
    mumbai:{
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.PROJECT_ID}`,
      accounts: [privateKeys]
    },
    mainnet:{
      url:`https://polygon-mainnet.g.alchemy.com/v2/${process.env.PROJECT_ID}`,
      accounts: [privateKeys]
    }
  },
  solidity: "0.8.4",
};
