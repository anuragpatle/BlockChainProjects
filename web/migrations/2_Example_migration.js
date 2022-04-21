const Demo = artifacts.require("Example");

module.exports = function (deployer) {
  deployer.deploy(Demo);
};
