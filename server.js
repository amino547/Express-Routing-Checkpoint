const express=require("express")
const Datee=require("./mid/Date")
const app=express()
const port=4000
app.use(Datee)
app.use(express.static(__dirname + "/public"))

app.get("/service",(req,res)=>{
    res.sendFile(`${__dirname}/public/service.html`)
})

app.get("/home",(req,res)=>{
    res.sendFile(`${__dirname}/public/home.html`)
})

app.get("/contact",(req,res)=>{
    res.sendFile(`${__dirname}/public/home.html`)
})


app.listen(port,(error)=>{
    error?console.log(error):console.log(`server is running on port ${port}` )


})