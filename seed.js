// colocar query do MongoDB
const mongoose  = require('mongoose');
const User = require('./src/api/models/user.model');

User.collection.drop();
User.create({
    name: 'admin', 
    email: 'root@email.com', 
    password: 'admin', 
    role: 'admin',
}).then(user => {
    console.log(`${user.name} seeded succesfully`);
}).catch(err => {
    console.log('Error while seeding db');
}).finally(() => {
    mongoose.connection.close();
});