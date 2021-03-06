require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// only for test !!!
const ALCHEMY_API_KEY = "1JfL234rSnb0Doq-GjtdjcBgpnY6gTKp";

// only for test !!!
const RANKEBY_PRIVATE_KEY = "2da7ee040d206c0ae3c7ca9db8238c06b1457bbc520bf180a9a81db6a508e491";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rankeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RANKEBY_PRIVATE_KEY}`]
    }
  }
};
