const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/organization';

// create operation(insert data)
const main = async() => {
    await mongoose.connect(url);

    //impliment schemas
    const EmployeeSchema = new mongoose.Schema({
        fname:String,
        lname:String,
        email:String,
        mobno:Number,
    });

    // impliment module
    const EmployeeModel = mongoose.model('employees', EmployeeSchema);

    // create/insert data
    let data = new EmployeeModel({
        fname:'Tejas', 
        lname: 'Dabholkar',
        mobno:848484844, 
        email:'tejas@email.com' });
    let result = await data.save(); // save the data into database.

    console.log(result)

}   

// main();


