var express = require('express');
var router = express.Router();
var fs = require("fs");
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index');
  //res.render('index', { title: 'Express' });
  console.log( __dirname );
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/api/:id', function (req, res) {
  fs.readFile("./nft_json.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      var tokenId = data["tokenId" + req.params.id] 
      //console.log(tokenId );
      res.end( JSON.stringify(tokenId)); 
  });
})

router.get('/mintneko/:id', function (req, res) {
  
  data = fs.readFileSync("./nft_json_total.json", 'utf8')
  data = JSON.parse( data );
  var tokenId = data["tokenId" + req.params.id] 
  //console.log(tokenId );
  org_data = fs.readFileSync("./nft_json.json", 'utf8')
  org_data = JSON.parse( org_data );
  org_data["tokenId" + req.params.id] = tokenId
  //console.log(org_data);
 
fs.writeFileSync("./nft_json.json", JSON.stringify(org_data), function (err) {
  res.end( "DONE"); 
});

})

router.get('/tokenevo/:id', function (req, res) {
  
  data = fs.readFileSync("./nft_json_evo.json", 'utf8')
  data = JSON.parse( data );
  var tokenId = data["tokenId" + req.params.id] 
  //console.log(tokenId );
  if (tokenId != null){
  org_data = fs.readFileSync("./nft_json.json", 'utf8')
  org_data = JSON.parse( org_data );
  org_data["tokenId" + req.params.id] = tokenId
  //console.log(org_data);
 
  fs.writeFileSync("./nft_json.json", JSON.stringify(org_data), function (err) {
    res.end( "DONE"); 
  });
  }

})

router.get('/tokenflip/:id', function (req, res) {
  
  data = fs.readFileSync("./nft_json.json", 'utf8')
  data = JSON.parse( data );
  var tokenId = data["tokenId" + req.params.id] 
  //console.log(tokenId );
  if (tokenId != null){

    const imglink = tokenId['image'];
    const flipimglink = tokenId['flip_url'];

    if (flipimglink != null){
      tokenId['image'] = flipimglink;
      tokenId['flip_url'] = imglink;
      tokenId['external_url'] = flipimglink;
    }

  org_data = fs.readFileSync("./nft_json.json", 'utf8')
  org_data = JSON.parse( org_data );
  org_data["tokenId" + req.params.id] = tokenId
  //console.log(org_data);
 
  fs.writeFileSync("./nft_json.json", JSON.stringify(org_data), function (err) {
    res.end( "DONE"); 
  });
  }

})

router.get('/minted_nft', function (req, res) {
  fs.readFile("./nft_json.json", 'utf8', function (err, data) {
      res.end(data); 
  });
})



module.exports = router;
