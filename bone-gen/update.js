const fetch = require('node-fetch');

// Update Contract Address Here
const OPENSEA_URI = 'https://testnets-api.opensea.io/asset/0x101Bb7ac613771a6d59258b6461Ca3dF7017eFb6'; 

// Maximum Tokens Belonging to Contract
const MAX_TOKENS = 6000;

function refreshData(tokenId) {
    const URI = `${OPENSEA_URI}/${tokenId}/?force_update=true`;
    const OPTIONS = {method: 'GET'};

    fetch(URI, OPTIONS)
    .then(res => res.json())
    .then(json =>  {
        if(json.detail) {
            console.log(`failed: ${tokenId}`);
        } else if(json.token_id) {
            console.log(`success: ${tokenId}`);
        }
    })
    .catch(err => console.error(`failed: ${tokenId}`));
};


const refreshTokens = (start, end) => {
    Array.from({length: end - start + 1}, (x, i) => start + i).forEach((tokenId) => {    
        refreshData(tokenId);
    });   
}

let start = 0;
let end = 1;

const id = setInterval(() => { 
    refreshTokens(start, end);
    if(end > MAX_TOKENS) clearInterval(id);
    start = end + 1;
    end = start + 1;
},2000);
