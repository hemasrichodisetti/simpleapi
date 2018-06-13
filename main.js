const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());
const studentList=[
    {
        id:1 ,
        name: 'abc',
        age: 21,
        dept:'ece',

    },
    {
        id: 2,
        name: 'abcd',
        age: 22,
        dept:'cse',

    },
    {
        id: 3 ,
        name: 'pqr',
        age: 23,
        dept:'eee',

    },
    {
        id:4 ,
        name: 'xyz',
        age: 24,
        dept:'IT',

    },
]
app.get('/api/index',(req,resp)=>{
    resp.json(studentList);
});
app.post('/api/create',(req,resp)=>{
    const newStudent={
        name: req.body.name,
        id: studentList.length+1,
        dept: req.body.dept
    }
    studentList.push(newStudent);
    resp.json(newStudent.id);
});
app.delete('/api/student/:id', (req, resp) => {
    console.log(req);
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentList.findIndex(student => student.id === idToBeDeleted);
    studentList.splice(studentToBeDeleted, 1);
    resp.json(idToBeDeleted);
});

app.get('/api/student/:id', (req, resp) => {
    //console.log(req);
    const idToBeFetched = parseInt(req.params.id);
    const studentToBeFetched = studentsList.find(student => student.id === idToBeFetched);
    resp.json(studentToBeFetched);
});

app.listen(5000);
