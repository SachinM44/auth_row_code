// // its all about ZOD 
// const express= require("express");
// const zod =require("zod");
// const app= express();

// app.use(express.json);
// // const schema = zod.array(zod.number);
// const schema =zod.object({
//         email:zod.string(),
//         password:z.string(),
//         country:z.literal("IN").or(zod.literal("ZE")),
//         kidney:z.array(z.number())
// });
// app.post("/kidney-status", function(req,res){
// const kidney =req.body.kidney;
// const response=schema.safeParse(kidney);
// res.send({
//     response
// });
// if(!(response.success)){
//  res.json({
//     msg:(" the input is not right")
//  })
// }

// });

// app.listen(3001)
////////////////////////
// const zod=require("zod")

// function validation(object){
// const schema = zod.object({
//     email:zod.string().email(),
//     country:zod.literal("IN").or(zod.literal("ZE")),
//     password:zod.array(zod.number())
// });
// };

// const response=schema.safeparse(zod.object);
// console.log(response);
// validation({
//     email:"sachin2872@gmail.com",
//     country:"LA"
// });
////////////////////////////////////////
// assignment
/////////////////////////////////////////
// const express = require("express");
// const app =express();
// app.use(express.json);
// const getcount=0;

// function middleware(req,res,next){
//     if(req.method=="GET"){
//         getcount++
//         console.log("the number of get reques is"+getcount);
//     }else{
//         next();
//     }
// };


// app.get("/checkget",function(req,res){
//     app.send("finding the number of get requests")
// })
// app.listen(3009)


///////////////////////////
// finding the min time taking by the serevr to handle requests
const express = require("express");
const { date } = require("zod");
const app = express();

// Middleware to measure request processing time
app.use(function(req, res, next) {
    var start = Date.now(); // Record the start time
    res.on("finish", function() {
        var end = Date.now(); // Record the end time
        var duration = end - start; // Calculate the duration
        console.log("Request to " + req.path + " took " + duration + "ms");
    });
    next(); // Call the next middleware in the stack
});

app.get("/timing", function(req, res) {
    // Simulate some processing time
    setTimeout(function() {
        res.send("Hello, World!");
    }, 500);
});

app.listen(3003, function() {
    console.log("Server is listening on port 3000");
});







