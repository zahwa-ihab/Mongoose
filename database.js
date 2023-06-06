const mongoose = require("mongoose");
const server = "localhost:27017";
const database = "myDB";
var allUsers = [];
//////connecting to the database
mongoose
  .connect(`mongodb://${server}/${database}`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

///acquiring the person model
//const Person = require("./Person");
const Person = require("./Person");
//adduser();
//addManyUsers();
//getAllUsers();
//getUserByName("Karen");
findEditSave("647f98f7b83160c4145dee2e");
async function adduser() {
  try {
    ////we can use here the create() instead of the following 2 funcs
    ///creating new user
    ///then we have to add it to the db cuz this is just a local copy in the js
    const newPerson = new Person({
      name: "Sarah",
      age: 18,
      favoriteFood: ["Noodles", "Icecream"],
    });
    await newPerson.save();
    console.log(newPerson);
  } catch (e) {
    console.log(e.message);
  }
}

async function addManyUsers() {
  try {
    Person.create([
      { name: "Salim", age: 18, favoriteFood: ["Noodles", "Icecream"] },
      { name: "Karen", age: 21, favoriteFood: ["Popcorn", "Club Sandwich"] },
      { name: "Keif", age: 30, favoriteFood: ["Fried Rice", "Cheese"] },
      { name: "Magida", age: 45, favoriteFood: ["Ramyon", "Wings"] },
    ]);
  } catch (e) {
    console.log(e.message);
  }
}

async function getAllUsers() {
  try {
    allUsers = await Person.find();
    /*  console.log("all users");
    allUsers.forEach((obj) => {
      console.log(obj);
    }); */
  } catch (e) {
    console.log(e.message);
  }
}

async function getUserByName(name) {
  try {
    const user = await Person.findOne({ name: name });
    const oneUser = await Person.find({ name: name });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

async function findEditSave(id) {
  try {
    const person = await Person.find({ _id: id });
    console.log(person);
    person.age = "7";
    person.save().then(() => {
      console.log("updated");
      console.log(person);
    });
  } catch (e) {
    console.log(e.message);
  }
}
