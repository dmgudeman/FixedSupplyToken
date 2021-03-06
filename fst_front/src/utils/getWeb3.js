import Web3 from 'web3';
var HDWalletProvider = require("truffle-hdwallet-provider");

 // let mnemonic = "emerge call strategy naive remove grunt example sport burden ceiling tide loud";
 // let mnemonic = "best mutual diary human quick agree nose humor please toe erosion response"

let getWeb3 = (mnemonic) => {
    console.log("first line getWeb3 mnemonic", mnemonic)
    const provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/WCDTmDbf8qzgqQS9qYdT" );
    console.log("first line getWeb3 provider", provider);
    let y =  new Promise(function (resolve, reject) {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        // window.addEventListener('load', function () {
            var results
            var web3 = window.web3

            // Checking if Web3 has been injected by the browser (Mist/MetaMask)
            // if (typeof web3 !== 'undefined') {
            if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

                // Use Mist/MetaMask's provider.
                web3 = new Web3(web3.currentProvider)

                results = {
                    web3: web3
                }

                console.log('Injected web3 detected.');
                resolve(results)
            } else {
                // Fallback to localhost if no web3 injection. We've configured this to
                // use the development console's port by default.
                // var provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
                console.log("providerrrrr ", provider)
                web3 = new Web3(provider)

                results = {
                    web3: web3
                }

                console.log('No web3 instance injected, using infura web3. results = ', results);

                resolve(results)
            }
        // }
        // )
    })
    console.log("getWeb3 return y ", y);
    return y;
}


export default getWeb3
