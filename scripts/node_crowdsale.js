const Web3 = require('web3');
const TOKEN_ABI = require('../src/abis/abi.json');

var theToken = "0x8bb52c2792e852aF8855c7cA617EDCB0FEdA3d85"  //token contract
var theCrowdSale = "0x4A4C8E4C0D1B898b8Aae9CCc9A8f69dED627EC6e" //crowdsale address
var theAmount = "10000000000000000000000000000000000000000000000000000000" //1 Trillion
 
var keystore = "ad3d92f8ffc69deb33b25456f2c01ea01ba4b8a6b02c385d30f87e620993913b" //private key of wallet holding tokens

const INFURA_URL = "https://ropsten.infura.io/v3/21d7ff87ab3941cf8cfa4c0cb379a384"  //local eth node rpc
const INFURA_WS_URL = "wss://ropsten.infura.io/ws/v3/21d7ff87ab3941cf8cfa4c0cb379a384" //local eth node websocket

const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));

const myAsyncFunc = (result) => { 

    console.log(result);

};


async function ApproveToken(stoken, scrowdsale, samt){


var activeAccount = web3.eth.accounts.wallet.add(keystore)

//console.log(activeAccount)

const tokenContract = new web3.eth.Contract(TOKEN_ABI, stoken)

//approval code

var tx = await tokenContract.methods.approve(scrowdsale, samt);
var encodedABI = tx.encodeABI();

var txCount = await web3.eth.getTransactionCount(activeAccount.address);
console.log('Tx Count: ' + txCount+'\n');

var tx = {
    nonce: web3.utils.toHex(txCount),
    from: activeAccount.address,
    to: stoken,  // approval must be To token contract
    gasprice: 100000, // 100000 = 10 gwei
    gas: 70000,   // gas limit
    data: encodedABI
    //value: ethAmount
  };

var signedTx = await activeAccount.signTransaction(tx)

web3.eth.sendSignedTransaction(signedTx.rawTransaction)
.on('transactionHash', function(hash){
    console.log(hash+'\n')
})
.on('confirmation', function(confirmationNumber, receipt){
    
     console.log(confirmationNumber)
    //console.log(receipt)
})
.on('receipt', function(receipt){
   //console.log(receipt)
    
    console.log(receipt)
})
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
    console.error("Error:", error, "Receipt:", receipt)
});


}


ApproveToken(theToken, theCrowdSale, theAmount)