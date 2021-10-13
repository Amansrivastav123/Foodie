const express =require('express')
const app = express()
const mysql=require('mysql');
const cors =require('cors')
app.use(express.json());
app.use(cors());
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'foodie'
})


app.post('/register',(req,res)=>{
    const fname= req.body.firstname
    const lname= req.body.lastname
    const foodie_mobile= req.body.mobile
    const foodie_password= req.body.password

    db.query("INSERT INTO foodie(fname, lname,foodie_mobile,foodie_password) VALUES (?,?,?,?)",[fname, lname,foodie_mobile,foodie_password],(err,result)=>{
        console.log(err);
    })
})

app.post('/login/foodie',(req,res)=>{

    
    const foodie_mobile= req.body.username
    const foodie_password= req.body.password

    db.query("SELECT * FROM foodie WHERE foodie_mobile= ? AND foodie_password = ?",[foodie_mobile,foodie_password],(err,result)=>{
       if(err)
       {
            res.send(err);
       }
       if(result.length>0)
        {
            res.send(result);
        }else{
            res.send({message:"Invalid mobile and password combination"})
        }
       
        
    })
})
app.listen(3001,()=>{
    console.log("running on port 3001")
})