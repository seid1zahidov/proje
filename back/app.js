const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Home = require('./routes/constrocture_house')
const Hom2 = require('./routes/Constrocture_House-Secont')
const Customhome = require('./routes/Custom_home_route')
const Marka = require('./routes/Markalart_routes.js')
const img = require('./routes/images_routess.js')
const about = require('./routes/About_routes.js')
const Cart = require('./routes/Cart_routes')

const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/Main_top' , Home)
app.use('/Main_top_secont' , Hom2)
app.use('/Custom' , Customhome)
app.use('/Marka' , Marka)
app.use('/Images' , img)
app.use('/About' , about)
app.use('/Cart' , Cart)


mongoose.connect('mongodb+srv://seid:UmY5y2uQSRhvz6XX@cluster0.sywdtca.mongodb.net/Figma?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3003)
})
.catch((err) => console.log(err))

//sagl












