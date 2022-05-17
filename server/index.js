const http = require('http');

const data = [
  {
    "id": 1,
    "orderNumber": "PPN000001",
    "searchEffectiveDate": "2/21/22",
    "address": "1350 Shores Cir, Rockwall, TX 75087",
    "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "status": "done"
  },
  {
    "id": 2,
    "orderNumber": "PPN000002",
    "searchEffectiveDate": "2/22/22",
    "address": "2250 Belfry Ct, Rockwall, TX 75087",
    "image": "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "status": "todo"
  },
  {
    "id": 3,
    "orderNumber": "PPN000003",
    "searchEffectiveDate": "2/23/22",
    "address": "1923 Greenville Ave, Dallas, TX 75206",
    "image": "https://media.istockphoto.com/photos/single-family-new-construction-homein-suburb-neighborhood-in-the-picture-id1147674294?k=20&m=1147674294&s=612x612",
    "status": "todo"
  }
];

const server = http.createServer(function (req, res) {
  if (req.url === '/properties') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    res.end(JSON.stringify(data));
  }
});

server.listen(8080);

console.log('Node.js web server at port 8080 is running..')