require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.18",
  networks: {
      sepolia: {
          url:'https://eth-sepolia.g.alchemy.com/v2/cD6aHRS55xSLvrv5C5eYaNd3ksiMDIFk',
          accounts: [ '7451d405b030313432771e5cdde15433509cbcb6cdff89b34c32abbbc5445109'  ]
      }
  }
};
