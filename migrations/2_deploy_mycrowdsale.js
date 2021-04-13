var MyCrowdSale = artifacts.require("./MyCrowdSale.sol");

module.exports = async function(deployer, network, accounts)  {

  if (network.startsWith("ropsten") || network.startsWith("live")) {

  const myfunc = (event) => {
    console.log(('Deployement Successful'))
    //event.excludeFromRewards(                                               //so admin address doesn't get 1% also for being a holder
    //  "0xFC325852Cd8e13AE7fc7fc1209Bf87E0550f85f5"                                                              
    //); 

 }

 var deploymycrowdsale = await deployer.deploy(MyCrowdSale, "3000000000", "0x0CE636E0B5989EC758C7eC36EA03335fD4A5a5F7", "0x8bb52c2792e852aF8855c7cA617EDCB0FEdA3d85", "0x0CE636E0B5989EC758C7eC36EA03335fD4A5a5F7","1618293300", "1618390000", "1000000000000000000", "2000000000000000000").then(myfunc); //variables set here
                      //rate, payable wallet, token contract, address holding tokens, start time, end time, indiv cap, total cap
  } else {            //actual result of rate was .3 token
    console.log(('Failed to deploy contract, wrong network'))
  }

}