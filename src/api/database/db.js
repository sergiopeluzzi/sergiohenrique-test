const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://mongodb:27017/Cookmaster')
    .then(() => console.log('Conectado com sucesso!'))
    .catch((err) => console.log(err));

module.exports = mongoose;
