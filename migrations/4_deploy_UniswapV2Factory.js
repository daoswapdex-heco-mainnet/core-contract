const UniswapV2Factory = artifacts.require("UniswapV2Factory"); 

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Factory, '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de');
};