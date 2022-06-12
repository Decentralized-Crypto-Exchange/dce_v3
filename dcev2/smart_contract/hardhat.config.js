require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Pkc-CWCbUMlivLYwvoTkuhIJAq6TLz7R',
      accounts: [
        'cf91e6945ec9ff2a4b911773bb347358ceb6144512f9f62d5fb395e394f872ea',
      ],
    },
  },
}