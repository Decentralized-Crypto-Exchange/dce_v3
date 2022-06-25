const { ethers } = require('hardhat')

const main = async () => {
    const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
    const dogeContract = await dogeFactory.deploy()
    await dogeContract.deployed()
    console.log('Dogecoin deployed to:', dogeContract.address)
  
    const fileFactory = await hre.ethers.getContractFactory('File')
    const fileContract = await fileFactory.deploy()
    await fileContract.deployed()
    console.log('File deployed to:', fileContract.address)
  
    const bitcoinFactory = await hre.ethers.getContractFactory('Btc')
    const bitcoinContract = await bitcoinFactory.deploy()
    await bitcoinContract.deployed()
    console.log('Bitcoin deployed to:', bitcoinContract.address)
  
    const usdcFactory = await hre.ethers.getContractFactory('Usdc')
    const usdcContract = await usdcFactory.deploy()
    await usdcContract.deployed()
    console.log('UsdcToken deployed to:', usdcContract.address)
  }
  
  ;(async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })()