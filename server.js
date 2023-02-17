const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// endpoint correspondiente a rama feature/Calculadora-201807307
app.post('/suma', (req, res) => {
    const numUno = req.body.numUno;
    const numDos = req.body.numDos;
    const resultado = numUno + numDos 
    res.json({
        result: true,
        message: `Operacion: ${numUno} + ${numDos} = ${resultado}`
    });
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});