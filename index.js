/*const fs = require("fs");
fs.writeFile("message.txt", "hello nodejs!", (err) => {
    if(err) throw err;
    console.log("write success");
});
fs.readFile("message.txt", 'utf8',(err, data) => {
    if(err) throw err;
    console.log(data);
})

fs.readFile("current date-time.txt", 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});*/

const fs = require('fs');
var util = require('util');
const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

let server = app.listen(port, function () {
    console.log(`Text File app listening at ${port}`);
});

app.get('/create', (req, res) => {

    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let currentdate = `${date}-${month}-${year}`;
    let currenttime = `${hours}-${minutes}-${seconds}`;
    let filename = `${currentdate} (${currenttime})`;
    fs.writeFile(`${filename}.txt`, `Created at - ${currentdate} ${currenttime}`, "utf-8", (err) => {
        if (err) throw err;
        res.send("TimeStamp created");
        console.log("write success");
    });
});
app.get('/textfile', (req, res) => {
    let txtFiles = [];
    fs.readdir('G:/guvi daily-task/week-9/thursday', (err, data) => {
        if (err) throw err;
        data.forEach((item) => {
            console.log("hello");
            if (String(path.extname(item)) == '.txt') {
                console.log(item);
                txtFiles.push(item);
            }
        })
        res.json(txtFiles);
    })
});