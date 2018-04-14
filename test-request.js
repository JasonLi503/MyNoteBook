var https =require("https")

var fs = require("fs")

var option = {
    hostname: 'www.e2enetworks.com',
    port: 443,
    path: '/help/knowledge-base/how-to-install-node-js-and-npm-on-centos/',
    method: 'GET'
}

var req = https.request(option, function(res){
    var respondbody = ''
    
    console.log('Request from server start')
    console.log(`Server Stute: ${res.statusCode} `)
    console.log("Respons Header : %j",res.headers)
    
    res.setEncoding("UTF-8")

    res.once('data',function(chunk){
        console.log(chunk)
    })

    res.on('data',function(chunk){
        respondbody += chunk
        console.log("Respons Header : %j",chunk.statusCode)
        
        console.log(`--chunk-- ${ chunk.length }`)
    })
    
    res.on('end',function(chunk){
        fs.writeFile('apache service config.html',respondbody,function(err){

            if (err){
                throw err;
            }
            console.log('File is download.')
        })
        

    })
})

req.on('errer',function(err){
    console.log(`problem with request: ${ err.message }`)
})

req.end();