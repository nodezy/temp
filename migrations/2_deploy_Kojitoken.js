const KojiToken = artifacts.require("./KojiToken.sol");

module.exports = async function(deployer, network, accounts)  {

  if (network.startsWith("ropsten") || network.startsWith("live")) {

  const myfunc = (event) => {

    event.setBurnAddress(                                                   //set burn address
     "0xA8E30B574556e16Ab7073A3F707097105209561c"
   );

     event.excludeFromRewards(                                               //so burn address doesn't get 1% also for being a holder
      "0xA8E30B574556e16Ab7073A3F707097105209561c"                                                              
    ); 

    event.setAdminAddress(                                                   //set admin address
     "0xFC325852Cd8e13AE7fc7fc1209Bf87E0550f85f5"
   );

    event.excludeFromRewards(                                               //so admin address doesn't get 1% also for being a holder
      "0xFC325852Cd8e13AE7fc7fc1209Bf87E0550f85f5"                                                              
    ); 

 }

 var deploykoji = await deployer.deploy(KojiToken, "0x0CE636E0B5989EC758C7eC36EA03335fD4A5a5F7").then(myfunc); //charity address is set here

  } else {
    console.log(('Failed to deploy contract, wrong network'))
  }

}
  
  


     

        
        
        
        
        
     