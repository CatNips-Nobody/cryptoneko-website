
const ethereumButton = document.getElementById('enableEthereumButton');
const showAccount = document.getElementById('getAccountsResult');

const mintbutton = document.getElementById('btnmintcatneko');
const txtmint = document.getElementById('txtmint');
const txttx = document.getElementById('txttx');
const txtcontractaddress = document.getElementById('txtcontractaddress');
const txthash = document.getElementById('txthash');
const txtokenid = document.getElementById('txtokenid');
const txttokenuri = document.getElementById('txttokenuri');
const txtopensea = document.getElementById('txtopensea');
const tokenImg = document.getElementById('tokenImg');

const showaddress = document.getElementById('showaddress');
const showbalance = document.getElementById('showbalance');
const showtotalsupply = document.getElementById('showtotalsupply');


const arrayImages = document.getElementById('arrayImages');
const inptokenId = document.getElementById('tokenId');
const txtaddress = document.getElementById('txtaddress');

const tokenImg3 = document.getElementById('tokenImg3');
const txtchange = document.getElementById('txtchange');



showAccount.style.display ='none';
ethereumButton.style.display ='block';
// showMinted();


if (typeof window.ethereum !== 'undefined') {
  window.web3 = new Web3(window.ethereum);
  window.ethereum.enable();
 

}else{
  const INFURA_API_KEY = '1b2b5d2a61d940cc95ff28267c558d29';
  web3 = new Web3(`https://mainnet.infura.io/v3/${INFURA_API_KEY}`);
  $("#web3check").attr('style',"display:block");
  $("#btnmintcatneko").click(
    function(){
      $(this).attr('src','images/push-button-med.gif');
      txttx.innerHTML = "please install wallet";
    }
  )
  $("#btnmintcatneko2").click(
    function(){
      $(this).attr('src','images/push-button-med.gif');
      txttx2.innerHTML = "please install wallet";
    }
  )
}

const contractAddress = '0x91c59C0d28eAab5dAa7c78B428a1065f9D0fe9a0';
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_NEKO_CAT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOTAL_NEKO_CAT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"METADATA_PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createCat","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"createRewardCat","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_setBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"catowner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}]

const cryptoneko = new web3.eth.Contract(contractABI, contractAddress);
//cryptoneko.options.gasPrice = '200000000000'; // default gas price in wei
cryptoneko.options.gas = 125748; // provide as fallback always 5M gas  

//cryptoneko.methods.totalSupply().call().then(function(result){
//  $('#numremaining').text(64-result);
//});


let accounts = [];
let currentAccount  = null ;
let chainId = null;
let totalsupplyneko = null;
let price = 0;
let price_gwei = 0;
let network = "0x1";

//---------------------------------------------------------------


function showMinted(){
  const ArrayOfImages = [];

  axios.get('./minted_nft').then(resp => {
    let data = resp.data;
    let imageid = 1;
    for(const key in data ){
      const tokenmetadata = data[key]["external_url"] ;
      ArrayOfImages.push(tokenmetadata);
    }
    //for(let i = 1; i <= 64 ;i++){
    //  const tokenmetadata = data["tokenId" + i]["image"] ;
    //  ArrayOfImages.push(tokenmetadata);
    //}
      ArrayOfImages.forEach(
        function(image) { 
         // for each link l in ArrayOfImages
      const divn = document.createElement('div'); 
      divn.className  = "card-nft";
      const diva = document.createElement('div'); 
      diva.className  = "card";
      diva.style= "width: 24rem;";
      let img = document.createElement('img');
      img.className ="card-img-top "; // create an img element
      img.setAttribute('src',image);
      img.alt="Responsive image";
      img.setAttribute('onclick' , 'imglink('+ imageid +')');
      diva.appendChild(img);
      divn.appendChild(diva);
      arrayImages.appendChild(divn);    
      imageid++;
    });
  });
}

function imglink(imageid) {
  var websitelink = "https://opensea.io/assets/0x91c59c0d28eaab5daa7c78b428a1065f9d0fe9a0/"+ imageid;
  window.open(websitelink,'_blank');
}
//-----------------------------------------------------------------
$("#imgmetamask").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko metamask hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#imgmetamask").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko metamask button.png');
    $(this).attr('style','cursor: pointer;');
  }
)

$("#btninstagram").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon IG hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btninstagram").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon IG.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#btndiscord").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon discord hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btndiscord").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon discord.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#btnopensea").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon opensea hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btnopensea").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon opensea.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#btntwitter").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon twitter hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btntwitter").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon twitter.png');
    $(this).attr('style','cursor: pointer;');
  }
)




$("#btninstagram-b").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon IG hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btninstagram-b").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon IG.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#btndiscord-b").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon discord hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btndiscord-b").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon discord.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#btnopensea-b").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon opensea hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btnopensea-b").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon opensea.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#btntwitter-b").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko icon twitter hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btntwitter-b").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko icon twitter.png');
    $(this).attr('style','cursor: pointer;');
  }
)

//-----------------------------------------------------------------

$("#btnmintcatneko").mouseenter(
  function(){
    $(this).attr('src','images/push button hover med.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btnmintcatneko").mouseleave(
  function(){
    $(this).attr('src','images/push button med.png');
    $(this).attr('style','cursor: pointer;');
  }
)

$("#btnmintcatneko2").mouseenter(
  function(){
    $(this).attr('src','images/push button hover med.png');
  }
)
$("#btnmintcatneko2").mouseleave(
  function(){
    $(this).attr('src','images/push button med.png');
  }
)

//-----------------------------------------------------------------

$("#cryptorewardimg").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko NFT Rewards hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#cryptorewardimg").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko NFT Rewards.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#cryptorewardimg").click(function(){
  $("#cryptoreward").attr('style',"display:block");
  
  
})
$("#cryptoreward").click(function(){
  $("#cryptoreward").attr('style',"display:none");
})


//-----------------------------------------------------------------

$("#imgcryptoproject").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko project hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#imgcryptoproject").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko project button.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#imgcryptoproject").click(function(){
 

  divcryptoproject = document.getElementById('divcryptoproject');
  if (divcryptoproject.style.display ==="none"){
    divcryptoproject.style.display = "block";
   
}else
{
  divcryptoproject.style.display = "none";
}

})


//-----------------------------------------------------------------

$("#imgcryptogive").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko giveaways hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#imgcryptogive").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko giveaways button.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#imgcryptogive").click(function(){

   divimgcryptogive = document.getElementById('divimgcryptogive');
  if (divimgcryptogive.style.display ==="none"){
    divimgcryptogive.style.display = "block";
   
}else
{
  divimgcryptogive.style.display = "none";
}

})


//-----------------------------------------------------------------

$("#imgcryptoflip").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko token flip hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#imgcryptoflip").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko token flip button.png');
    $(this).attr('style','cursor: pointer;');
  }
)


$("#imgcryptoflip").click(function(){

  divcryptoflip = document.getElementById('divcryptoflip');
  if (divcryptoflip.style.display ==="none"){
    divcryptoflip.style.display = "block";
   
}else
{
  divcryptoflip.style.display = "none";
}
})


//-----------------------------------------------------------------

$("#txtaboutus").click(function(){
  
  aboutus = document.getElementById('aboutus');
  if (aboutus.style.display ==="none"){
    aboutus.style.display = "block";
   
}else
{
  aboutus.style.display = "none";
}

})

//-----------------------------------------------------------------

async function getChainId(){
  chainId = await ethereum.request({ method: 'eth_chainId' });
  //chainresult.innerHTML =chainId;

  if(chainId!=network){ 

    $("#chaincheck").attr('style',"display:block");
    }

   
}

getChainId();

window.ethereum.on('chainChanged', function (chainId) {
  //Time to reload your interface with accounts[0]!
  window.location.reload();
  chainresult.innerHTML =chainId;
})
window.ethereum.on('accountsChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
  getAccount();
})

//-----------------------------------------------------------------
ethereumButton.addEventListener('click', () => {
  getAccount();
  //getBalance();
});

function right(str, num)
{
    return str.substring(str.length-num,str.length)
}

function left(str, num)
{
    return str.substring(0,num)
}

async function getAccount(){


  accounts = await web3.eth.getAccounts();
  const shortacc = left(accounts[0],6) + '...' + right(accounts[0],4)
  showAccount.innerHTML =shortacc;
  showAccount.style.display ='block';
  ethereumButton.style.display ='none';
  currentAccount  = accounts[0];
  showaddress.innerHTML = "your wallet address : " + accounts[0];
  totalsupply();
  getBalance();


  if(currentAccount!=null){
    txtmint.innerHTML = "";
    txtchange.innerHTML ="";
  }

}




//-----------------------------------------------------------------
async function getBalance(){
  
  const balance = await web3.eth.getBalance(accounts[0]);
  showbalance.innerHTML = "your wallet balance : " + web3.utils.fromWei(balance, "ether") + " Eth";
}

//-----------------------------------------------------------------
 function getPrice(){
  
  
  totalsupplyneko = parseInt(totalsupplyneko);
  
  if(totalsupplyneko<16){
    price = 0.02; 
    price_gwei = 20000000000000000;
  }else if(totalsupplyneko<32){
    price = 0.04;
    price_gwei = 40000000000000000;
  }else if(totalsupplyneko<48){
    price = 0.06;
    price_gwei = 60000000000000000;
  }else if(totalsupplyneko<64){
    price = 0.08;
    price_gwei = 80000000000000000;
  }else{
    price = 0.1;
    price_gwei = 100000000000000000;
  }
  showprice.innerHTML ="current CryptoNeko " +  price + " Eth";

 }
//---------------------------------------------------------------


$("#btnmintcatneko").click(
  function(){
    $(this).attr('src','images/push-button-med.gif');
    if(chainId == network){   
      //mint();
    }
  }
)

function mint(){
  txtmint.innerHTML = "";
  cryptoneko.methods.createCat().send({
    from: accounts[0], 
    value: price_gwei,
  }, function(error, result){
  if(error){ 
    if (error.message.includes("User denied transaction signature")) { 
      txtmint.innerHTML = "";
      }
    else {txtmint.innerHTML = "please connect your wallet";}
    } else {
    
    txttx.innerHTML = "transaction in progress...pls do not refresh or exit =)";
  }
  })
  .on('receipt', function(receipt){
    txtopensea.innerHTML ="";
    txtcontractaddress.innerHTML ="CryptoNeko contract address : "+ contractAddress;
    let mintedtokenId = receipt.events.Transfer.returnValues.tokenId
    axios.get('./mintneko/'+ mintedtokenId).then(resp => {
      let data = resp.data;

    })
    minturl = "https:/cryptoneko.net/mintneko/" + mintedtokenId;
    getapi(minturl);
    txtcontractaddress.innerHTML ="CryptoNeko contract address : "+ contractAddress;
    txthash.innerHTML ="your tx : "+ receipt.transactionHash;
    txtokenid.innerHTML ="your tokenId : " + mintedtokenId;
    txttokenuri.innerHTML ="your tokenURI : https://crpytoneko.net/api/" + mintedtokenId;
    txtopensea.innerHTML = "Success! You officially have a CryptoNeko";
    txttx.innerHTML = "";
    showSingleToken(mintedtokenId);
 })
  ;
}



//---------------------------------------------------------------


function totalsupply(){
   
    cryptoneko.methods.totalSupply().call().then(function(result){
    showtotalsupply.innerHTML = "crypto'd " + result + " of 64 Nekos";
    totalsupplyneko = result;
    //showMinted();
    //getPrice();

  });
}

//---------------------------------------------------------------

function showSingleToken(tokenId){

  axios.get('./api/'+tokenId).then(resp => {
    let data = resp.data;
    const imguri = data["external_url"] ;
    const divn = document.createElement('div'); 
    divn.className  = "card-nft";
    const diva = document.createElement('div'); 
    diva.className  = "card";
    diva.style= "width: 10rem;";
    const img = document.createElement('img');
    img.className ="card-img-top "; 
    img.src = imguri;               
    diva.appendChild(img);
    divn.appendChild(diva);
    tokenImg.appendChild(divn);     
  
  });

}


//-----------------------------------------------------------------

$("#btnchange").mouseenter(
  function(){
    $(this).attr('src','images/cryptoneko tesseract x hover.png');
    $(this).attr('style','cursor: hand;');
  }
)
$("#btnchange").mouseleave(
  function(){
    $(this).attr('src','images/cryptoneko tesseract x.png');
    $(this).attr('style','cursor: pointer;');
  }
)

$("#btnchange").click(
  function(){
    $(this).attr('src','images/cryptoneko-tesseract-x.gif');
    if(chainId ==network){   
      //checkowner();
    }
  }
)

function checkowner(){
  const id = inptokenId.value;
  txtchange.innerHTML = "";
  if (currentAccount == null){
    txtchange.innerHTML ="Please connect metamask wallet";

  }
  else if (id == "" ){
    txtchange.innerHTML ="Input your token ID";
  }else{
  
  let onweraddress = null;
  
  cryptoneko.methods.ownerOf(id).call().then(function(result){
    onweraddress = result ;
    
    if( onweraddress == currentAccount){  
     
      txtaddress.innerHTML = "Your Address:" + onweraddress;
      axios.get('./tokenflip/'+ id).then(function(){
            
    })
    
      showSingleToken3(id);
      txtchange.innerHTML ="Your NFT is set to this page!";
         const api_url = "https://api.opensea.io/api/v1/asset/"+contractAddress+"/"+id+"/?force_update=true";
      // Calling that async function
      //getapi(api_url);
    
  }
  else{
    txtchange.innerHTML ="Token ID and wallet address do not match, please check Token ID";
    //txtchange.innerHTML = onweraddress;
  }
  })
}
}

//--------------------------------------------------------------

function showSingleToken3(tokenId){

  axios.get('./api/'+tokenId).then(resp => {
    let data = resp.data;
    tokenImg3.innerHTML ="";
    const imguri = data["external_url"] ;
    const img = document.createElement('img');
    img.src = imguri;       
    img.style= "width: 300px;";
    tokenImg3.appendChild(img); 
 
  
  });

}

//--------------------------------------------------------------

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}


