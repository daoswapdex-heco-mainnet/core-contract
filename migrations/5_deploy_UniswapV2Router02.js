const UniswapV2Router02 = artifacts.require("UniswapV2Router02"); 

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Router02,
        '0x2216574F455CCc9E5FF9384Bbbd24e47c569CF67', // 工厂合约地址
        '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F' // WHT 地址
    );
};