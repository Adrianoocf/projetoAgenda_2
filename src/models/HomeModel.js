const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    titulo: { type : String, required: true},
    descricao : String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Model{

}

module.exports = HomeModel;


