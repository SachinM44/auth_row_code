// its about global catch and extended midlle ware 
const express = require("express")

const app = express();
app.use(express.json())
function userMiddleware(req,res,next){
    if(!(username==="har" && password==="kirat")){
        res.status(403).json({
            msg:"the worng credentials"
        }); 
    }else{
        next()
    };
};
function kidneyMddleware(req,res,next){
    if(!(kidney===1 && kidney ===2)){
        res.status(403).json({
          msg:"the wrong number of input found"
        });
    }else{
        next();
    }
};

app.get("/user-helth",userMiddleware,kidneyMddleware,function(req,res){
    res.send("ur health is okay");

});

app.get("/user-kidney",userMiddleware,kidneyMddleware,function(req,res){
    res.send("the kideney is ok");
});
app.get("/user-heart",userMiddleware,kidneyMddleware,function(req,res){
    res.send("the heart is okay")
});
app.listen(7100)