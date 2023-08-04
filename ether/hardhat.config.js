//imports the hardhat-toolbox module for additional functionality for the Hardhat development environment
require("@nomicfoundation/hardhat-toolbox");

//boilerplate config that we have covered earlier
/** @type import(‘hardhat/config’).HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  
  //specifies network configuration options for Hardhat
  networks: {
    
    //defines configuration options for the hardhat networ
    hardhat: {
      chainId: 1337,
    },
    
    //defines configuration options for the ganache network
    ganache: {
      url: "http://10.0.2.15:8545",
      accounts: [
        `0x74478228db7d7141f0df9e4d866d8dda616971ea73e29287125521f5ec8092d8`,
      ],
    }
  }
};