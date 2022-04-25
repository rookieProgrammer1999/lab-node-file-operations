const fs = require('fs')
const crypto = require('crypto')
const value = require('./data')
var userdata = value.data("Prograd", 2020, "BE")
userdata.Username = 'prasanth';
const password = crypto.createHmac('sha256', `${userdata.Username}`).update('Prograd').digest('hex');
userdata.Password = password;
fs.writeFileSync('message.txt', '')
fs.appendFileSync('message.txt', `Name          ->   ${userdata.Name}\n`)
fs.appendFileSync('message.txt', `Year          ->   ${userdata.Year}\n`)
fs.appendFileSync('message.txt', `Qualification ->   ${userdata.Qualification}\n`)
fs.appendFileSync('message.txt', `Username      ->   ${userdata.Username}\n`)
fs.appendFileSync('message.txt', `Password      ->   ${userdata.Password}\n`)

// console.log(userdata)
// console.log(password)