import hardhat from 'hardhat';
const { ethers } = hardhat;

async function main() { 
  const contractAddress = "0xAA27F90917a92074147d165F2CF5661CB88fEA09"; 
  
  const HelloCore = await ethers.getContractAt("HelloCore", contractAddress); 

  console.log("Message:", await HelloCore.message()); 

  const tx = await HelloCore.setMessage("Core is awesome!");
  await tx.wait();

  console.log("Updated message:", await HelloCore.message()); 
}

main().catch((error) => { 
  console.error(error); 
  process.exitCode = 1; 
});
