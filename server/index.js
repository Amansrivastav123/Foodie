const bodyParser = require('body-parser');
const express=require('express')
const app = express();
const mysql=require('mysql');
const cors = require("cors");

const db= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"foodie"
});
app.use(cors);
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))
app.post('/api/foodieRegistration',(req,res)=>{

    const fname= req.body.firstname
    const lname= req.body.lastname
    const foodie_mobile= req.body.mobile
    const foodie_password= req.body.password
        if(fname&&lname&&foodie_mobile&&foodie_password)
        {
            db.query("INSERT INTO foodie(fname, lname,foodie_mobile,foodie_password) VALUES (?,?,?,?)",[fname, lname,foodie_mobile,foodie_password],(err,result)=>{
                console.log(err);
            });
        }
    
})




app.listen(3001,() =>{
    console.log("running on port 3001")
});