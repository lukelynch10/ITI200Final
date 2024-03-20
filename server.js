const express = require ("express");

const app = express();

app.use(express.static("html"));


app.get("/", function(req, res){
    const score = 100;
    res.json(score);
    res.sendFile(__dirname + "html/index.html")
});


 
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
