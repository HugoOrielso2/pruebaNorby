import express from 'express'


const app = express()
const PORT = process.env.PORT ?? 4321

app.use("/", express.static('dist', {redirect:false}))
app.get("*", (req,res,next)=>{
    res.sendFile(process.cwd() + '/dist/index.html')
})


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);
})