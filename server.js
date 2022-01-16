const express= require(`express`);
const dbconnection = require(`./config/dbConnection`)
const app = express();
dbconnection();

app.use(`/`,(req,res)=>{
    res.end(`jhbsdbfj`)
})




app.listen(`4000`,(err,res)=>{
    console.log(`working`)
})