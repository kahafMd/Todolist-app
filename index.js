import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/", (req,res)=> {
    res.render("index.ejs", { listToday : todayList });


} )

app.get("/work", (req,res)=> {
    res.render("work.ejs", { listWork :workList });
})


var todayList = [];

app.post("/", (req,res)=> {
    const newItem = req.body["todayEntry"];
    todayList.push(newItem);
    console.log("Todaylist: " + todayList);
    res.render("index.ejs", { todayItems : todayList,}  )
    // res.send("Submitted")
})

var workList = [];


app.post("/work", (req,res)=> {
    const newEntry = req.body["workEntry"];
    workList.push(newEntry);
    console.log("Worklist: " + workList);
    res.render("work.ejs", { workItems : workList }, )
})

app.listen(port , ()=> {
    console.log(`Server is running on port ${port} `);
})