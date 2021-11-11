require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift raise ranch comic hunt drop slot gasp'; 
let testAccounts = [
"0x767b70abe672ff49d045082fab00cd3d44e03c28b471cb31b236910137aaa963",
"0xf6737f9084db22393464ce85bdbaf2a514ac80f75847ed8201bef8d6633715d5",
"0x628e5092c463de694b6d4dc658960f9bf0a28116bc6d5fc4418c44e32dd0d2d6",
"0x47e19e3e9c256cb2f1dec2006fe6424f884b147572130513b0d024b6c13d1b76",
"0x3f532d0e538e6a0534963678fa521dccaef1d48043f4597e5a9fd589bdc1d65f",
"0x2cb2230d07193d9bc3f77ad81d7db886f859cf18a114afa02b713e2d5362482d",
"0x7fc8a041a3cbc16d8b1a68149bf772136d2f262e73a8f5171fd680590e7f9f96",
"0x2d411205cd9805421d86a5aabcb0a33e324bd6b1e2df761daf91c720d0ff5ef7",
"0xda50e519737cf364403c588ba73b9ba3866a17b4f6422b31a5b5d9afb443c6dd",
"0x4ee72a1e33f080cf785b384c2ed947d281fa80633eb311d319fbcd04fb0b52c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

