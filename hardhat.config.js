require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const ALCHEMY_API_KEY = "P5YD9rk5JJcTImuZ720gIa7lBDtWOeij";
const SEPOLIA_PRIVATE_KEY = "c72e8da7a7bc33a0fcb4daf99f8af47296b76bffd9e65fe2a1d4173027ad7e9b";

module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: "G85S4B4DDEURR2NR9WJS76WS9BTSZ514VC",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
  },
};
