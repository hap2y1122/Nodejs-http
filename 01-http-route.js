/* routing refers to the mechanism of serving the client the content it asked using url */

var http = require("http");

var server = http.createServer(function (req,res) {

    /* Reg Exp */
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();

    /* find what is user searching for */
    switch (path) {

        /* just localhost:2000 */
        case "":
            res.writeHead(200,{
                'content-type':'text/html'
            });
            res.write('<h1>Home Page</h1>');
        break;

        /* localhost:2000/about */
        case '/about':
            res.writeHead(200,{
                'content-type':'text/html'
            });
            res.write('<h1>About Us</h1>');
        break;
    
        /* localhost:2000/... */
        default:
            res.writeHead(404,{
                'content-type':'text/plain'
            });
            res.end('Not Found');
        break;
    }
});

server.listen(2000);
console.log("Server listening at port 2000");