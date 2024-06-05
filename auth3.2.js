//JWT authorisation ///
/////////////////////////////
const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpassword="1234";
const app=express();
app.use(express.json())
const ALL_users=[
    {
        user:"harkirat",
        password:"12383",
        country:"ind"
    },
    {
        user:"mahesh",
        password:"3864",
        country:"jh"
    },
    {
        user:"ragu",
        password:"283763",
        country:"ima"
    }
];
function userExist(user,password){
    const userExist=false;
    for(let i=0;i<=ALL_users.length;i++){
        if(ALL_users[i].user==user && ALL_users[i].password==password){
            userExist=true
        }
         
    }
    return userExist;
}

app.post("/signin",function(req,res){
if(!(auth)){
    return res.statusCode(403).json({
        msg:"its in valid input "
    });
}
var token=jwt.sign({user:user},"shhhhh")
return res.json({
    token,
});
});

app.get("/signin",function(req,res){

});
app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
      const decoded = jwt.verify(token, jwtPassword);
      const username = decoded.username;
      // return a list of users other than this username
    } catch (err) {
      return res.status(403).json({
        msg: "Invalid token",
      });
    }
  });
  
  app.listen(3000)