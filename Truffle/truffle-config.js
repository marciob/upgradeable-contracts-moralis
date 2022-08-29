const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.existsSync(".secret")
  ? fs.readFileSync(".secret").toString().trim()
  : "";
require("dotenv").config();

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  contracts_build_directory: "../src/contracts",
  networks: {
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://eth-rinkeby.alchemyapi.io/v2/${process.env.MORALIS_SPEEDY_NODES_KEY}`
        ),
      network_id: 4,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
