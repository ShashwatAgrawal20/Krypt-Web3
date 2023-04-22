// const main = async () => {
//     const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//     const unlockTime = currentTimestampInSeconds + 60;
//
//     const lockedAmount = hre.ethers.utils.parseEther("0.001");
//
//     const Transactions = await hre.ethers.getContractFactory("Transactions");
//     const transactions = await Transactions.deploy(unlockTime, { value: lockedAmount });
//
//     await transactions.deployed();
//
//     console.log(
//         `Transactions with ${ethers.utils.formatEther(
//             lockedAmount
//         )}ETH and unlock timestamp ${unlockTime} deployed to ${transactions.address}`
//     );
// }
//
// const runMain = async() => {
//     try {
//         await main();
//         process.exit(0);
//     } catch (error) {
//         console.log(error);
//         process.exit(1)
//     }
// }
//
// runMain();

const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
