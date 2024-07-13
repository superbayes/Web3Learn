require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();
//require("@nomiclabs/hardhat-ganache");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "localhost",
  networks: {
    // hardhat: {
    //   forking: {
    //     //url: "https://mainnet.infura.io/v3/" + process.env.INFURA_ID,
    //     url: "https://eth-mainnet.g.alchemy.com/v2/3vZECtYJn_eEkevxesewE53KAX4hvntZ",
    //     //blockNumber: 20291600 // 可选
    //   }
    // },
    sepolia: {
      url:
        "https://sepolia.infura.io/v3/" + process.env.INFURA_ID, accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
};