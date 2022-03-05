const {ethers} = require('hardhat');

async function main() {
    const HelloWord = await ethers.getContractFactory('HelloWorld');

    const deploy = await HelloWord.deploy('Hello, World');

    await deploy.deployed();

    console.log('Address ==> ', deploy.address)
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(error); 
        process.exit(1)
    });