var http = require("http"); /* Required module to create a server */

/* creates a server */
var server = http.createServer(function (req,res) {
    res.writeHead(200,{
        'content-type':'text/html'
    });

    res.write('<h1>Hello World!!!</h1>');
    res.end('<b>All signals received!</b>');
});

/* server listening at port 2000 */
server.listen(2000);

console.log("Server listening at port: 2000");