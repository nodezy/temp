const MyCrowdSale = artifacts.require("MyCrowdSale");

module.exports = async function(callback) {
  let deploymycrowdsale = await MyCrowdSale.deployed();
  let result = await deploymycrowdsale.withdrawUnsoldTokens(
    "0x8bb52c2792e852aF8855c7cA617EDCB0FEdA3d85"
          );

  console.log(result);
  callback();
};
