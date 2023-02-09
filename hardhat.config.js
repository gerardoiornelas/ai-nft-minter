require("dotenv").config()
require("@nomiclabs/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `${process.env.ALCHEMY_API_URL}`,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`],
    },
  },
}
