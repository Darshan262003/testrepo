const express=require('express')
const app=express()
const PORT=5000
app.get('/',(req,res)=>{
res.send("I am from GIT to JENKINS to DOCKER to Kubernetes")
})
app.listen(PORT,()=>{
console.log(`the app is running in port${PORT}`)
})
