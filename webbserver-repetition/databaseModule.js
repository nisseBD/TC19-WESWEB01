const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected")
});

const namnListaSchema = new mongoose.Schema({
    names: Array,
});

const NamnLista = mongoose.model('NamnLista', namnListaSchema);

exports.saveNameList = (names) => {
    var nameList = NamnLista({
        names: names,
    });
    nameList.save();
};

exports.getAllNameLists = async function () {
    return await NamnLista.find({});
};