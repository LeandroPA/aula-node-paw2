const express = require('express');
const app = express();

app.use(express.json());

app.listen(80, () => {
    console.log("Servidor startado!");
});

app.get('/test', (req, res) => {
    console.log("Bateu");
    res.status(200).json({message:"AAAAAAAA"});
});

app.get('/nome/:meuNome', (req, res) => {
    let {meuNome} = req.params;
    res.status(200).json({message:`Olá ${meuNome}`});
});

app.post('/teste', (req, res) => {
    const {body} = req;
    console.log(body);
    if (body.json) {
        res.status(200).json({message:"Tudo ok com o body"});
    } else {
        res.status(400).json({message:"body malformatado"});
    }
});