const UniswapV2Router02 = artifacts.require("UniswapV2Router02"); 

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Router02,
        '0x738B815eaDD06E0041b52B0C9d4F0d0D277B24bA', // 工厂合约地址
        '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // WBNB 地址
        // '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F' // WHT 地址
    );
};