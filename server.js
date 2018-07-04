const fs = require('fs');

const express = require('express');

const app = express();

const port = process.env.PORT || 4000; 

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/get',(req,res)=>{
	fs.readFile('data/data.json', function(err, content) {
        if (err) throw err;
        var parseJson = JSON.parse(content);
        res.send(parseJson);
    });
});

app.post('/api/post',(req,res)=>{
	console.log("from server post req:" + req.body.data);
	var newData={"data":req.body.data};
	fs.writeFile('data/data.json', JSON.stringify(newData), function(err) {
            if (err) throw err;
        });
});

app.listen(port,() => console.log(`Server running on ${port}`));


