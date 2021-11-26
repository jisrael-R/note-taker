const htmlRoutes = require('./routes/htmlRoutes/index');
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const path = require('path');
const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/',htmlRoutes);
app.use('/',apiRoutes);


app.listen(PORT, ()=>{
    console.log(`API server now on port ${PORT}`);
});
