/*require('dotenv').config()
const express = require("express")
const axios = require("axios")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static("public"))

app.post("/api/preguntar", function(req, resp){
    const pregunta = req.body.pregunta
});

app.listen(PORT, function(){
    console.log("servidor iniciado")
})

async function obtenerRespuestaIa(){
    const respuesta = await axios.post("https://api.openai.com/v1/responses",{
        "model": "gpt-4.1",
        "input":[
            {
                "role": "system",
                "content":"actua como un experto en IT y responde en maximo 30 palabras"
            },
            {
                "role":"user",
                "content": "hola"
            }
        ]
    },{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        }
    }
    )

    console.log(respuesta.data.choices[0].message.content)
}

obtenerRespuestaIa()
*/
console.log("servidor iniciado")