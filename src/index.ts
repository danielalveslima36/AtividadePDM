import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({message:'tudo okay'})
})
app.listen('3333', () => {
    console.log("servidor Online")
})

