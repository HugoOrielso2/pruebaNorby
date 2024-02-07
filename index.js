import express from 'express'


const app = express()
app.use("/", express.static('dist', {redirect:false}))
app.get("/pruebaTres", (req,res)=>{
    return res.status(200).json({
        status: "Bien",
        message: "Deploy"
    })
})
app.get("*", (req,res,next)=>{
    res.sendFile(process.cwd() + '/dist/index.html')
})



const PORT = process.env.PORT ?? 4321

app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);
})