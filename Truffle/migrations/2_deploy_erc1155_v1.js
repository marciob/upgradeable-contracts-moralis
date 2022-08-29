// migrations/NN_deploy_upgradeable_box.js
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const ERC1155CustomUpgradeableV1 = artifacts.require(
  "ERC1155CustomUpgradeableV1"
);

module.exports = async function (deployer) {
  const instance = await deployProxy(ERC1155CustomUpgradeableV1, [], {
    deployer,
    kind: "uups",
  });
  console.log("Deployed", instance.address);
};
