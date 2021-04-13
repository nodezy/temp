var MyCrowdSale = artifacts.require("./MyCrowdSale.sol");

module.exports = async function(deployer, network, accounts)  {

  if (network.startsWith("ropsten") || network.startsWith("live")) {

  const myfunc = (event) => {
    console.log(('Deployement Successful'))
     

 }

 var deploymycrowdsale = await deployer.deploy(MyCrowdSale, "3000000000", "0x0CE636E0B5989EC758C7eC36EA03335fD4A5a5F7", "0x8bb52c2792e852aF8855c7cA617EDCB0FEdA3d85", "0x0CE636E0B5989EC758C7eC36EA03335fD4A5a5F7","1618293300", "1618390000", "1000000000000000000", "2000000000000000000").then(myfunc); //variables set here
                      //rate, payable wallet, token contract, address holding tokens, start time, end time, indiv cap, total cap
  } else {            
    console.log(('Failed to deploy contract, wrong network'))
  }

}
