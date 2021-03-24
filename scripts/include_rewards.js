const KojiToken = artifacts.require("Kojitoken");

module.exports = async function(callback) {
  let deploykoji = await KojiToken.deployed();
  let result = await deploykoji.includeInRewards(
    "0x40d6b6b70981662a62fd3F61B9BEdd4DD18b9645" //burn address
  );

  console.log(result);
  callback();
};
