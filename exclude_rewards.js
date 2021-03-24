const KojiToken = artifacts.require("Kojitoken");

module.exports = async function(callback) {
  let deploykoji = await KojiToken.deployed();
  let result = await deploykoji.excludeFromRewards(
    "0xFC325852Cd8e13AE7fc7fc1209Bf87E0550f85f5" //burn address
  );

  console.log(result);
  callback();
};


//burn address 0xA8E30B574556e16Ab7073A3F707097105209561c
//admin address 0xFC325852Cd8e13AE7fc7fc1209Bf87E0550f85f5
//charity address 0x0CE636E0B5989EC758C7eC36EA03335fD4A5a5F7