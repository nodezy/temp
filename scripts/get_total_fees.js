const KojiToken = artifacts.require("Kojitoken");

module.exports = async function(callback) {
  let deploykoji = await KojiToken.deployed();
  let result = await deploykoji.totalFees();

  console.log(result.toString());
  callback();
};
