const express = require('express');

const app = express();

const port = process.env.PORT || 4000; 

app.get('/api/get',(req,res)=>{
	res.send({data:"Hello from Server!"});
});

app.listen(port,() => console.log(`Server running on ${port}`));


