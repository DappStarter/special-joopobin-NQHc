require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth predict unknown idea kitchen olympic syrup'; 
let testAccounts = [
"0xd6694faa29fd46757763f35d18f841a88fe609d606261451f4d15db35a1c899f",
"0x13fcccabafcac302a06da86a4dd8c02feadb8fb9960a7599beeeee40e47a364e",
"0xc9bcf22a7f53e8d6d02c00cdfa1179177122c3783abd5614fd0cc6e1396380f7",
"0xaeeb494ce319c9456b6c5bee8032b2c725b6b9aeebc795347d184306f64d6f69",
"0x663c94417864bb1a58d2b6e69139a22fb3576745bc887fa532558ff3c61bac21",
"0x1dc995af7a43e58d818a28662e1a40d9e929440d2a17e33516e50fcef6504eff",
"0x041113279616c0b68332390ee61907aa7685ea3a5168f371ecd5e6f47791666e",
"0xcd52aea70009c3505ac2acd37ff65a0e2b03c2626c094062ea3884fe7535d316",
"0x9b16ed99faa9886833ee882b0ddf1cd62c30c877bcab3f19e2d6505a7fc2c86b",
"0x9d21ad215b67c0aae69f57fca07ffd4b4884bb5f87a4e5594b4d82a764839c35"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

