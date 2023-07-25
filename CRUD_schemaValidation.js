const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/organization'
const { ObjectId } = require('mongodb')
mongoose.connect(url);
let schema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    mobno: Number
})
let model = mongoose.model('employees', schema);

//create querry
const createEntry = async () => {
    // await mongoose.connect(url);
    // let schema = mongoose.Schema({
    //     fname: String,
    //     lname: String,
    //     email: String,
    //     mobno: Number
    // });
    // let model = mongoose.model('employees', schema);

    let data = new model({
        fname: 'Marrie',
        lname: 'Json',
        email: 'marriee@email.com',
        mobno: 696938293
    })

    let result = await data.save();
    console.log(result);
}

// createEntry();

// update querry
const updateData = async () => {
    let data = await model.updateMany({
        fname: 'Marrie'
    }, {
        $set: {
            email: 'jsonmarrie@email.com',
            mobno: 456-12335333
        }
    });

    console.log(data);
}

// updateData()


// delete querry
const deleteData = async () => {
    let data = await model.deleteOne({
       _id: new ObjectId('64bfcd87381922736593789c')    //ObjectId imported from 'mongodb'
    })
    console.log(data);
}

// deleteData()

// read querry
const readData = async()=>{
    let data = await model.find({fname:'Adrian'});
    console.log(data);
}

readData();

