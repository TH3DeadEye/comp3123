/*
Purpose:
Express framework with node.js 
- Try GET, POST, PUT, DELTE methods
- use routes instead of pure pahts - like an API in your own softwar's backend
- Compare and contrast GET query vs params
*/

const express = require("express")
const app = express()

const SERVER_POST = process.env.PORT || 3000;

// Middle ware setup for each of our needs on the web server
// Serving fiels 
//the public folder is not usually accessible by default
//Notice there is no real folder in our filesystem called static 
//But this will be a path we can access in the URL
app.use(express.static("public"))

//serving static JSON
app.use(express.json())
// serving traditional HTML Body
// if we add the object prameter with property extended :true
// we can use the library qs instead of library querystring 
app.use(express.urlencoded({extended:true}))

//----------------------------------------------------

// http:localhost:3000
app.get("/", (request, response) => {
    response.send("<h1>Welcomd to the rooth path of the server </h1>")
})


// http:localhost:3000/hello
app.get("/hello", (request, response) => {
    response.status(200).send("<h1> Welcome to the path of hello</h1>")
})


app.get("/college", (request, response) => {
    const college = {
        method:"GET", // this was not anything built in we created this property
        name: "George Brown College", 
        location:"Toronto",
        established: 1967
    }
    response.json(college) // we treat our backend as an  API
})
app.get("/students/:name/:age/:city", (request, response) => {
    console.log(request.params)
    if (!request.params.name || !request.params.age || !request.params.city){
        return response.status(400).json({error:"Missing path prameters"})
    }

    const name = request.params.name
    const age = request.params.age
    const city = request.params.city 


    response.json({
        student_name : name,
        student_age :age,
        student_city :city
    
    })
})


app.post("/college", (req, res) => {
        const college = {
        method:"POST", // this was not anything built in we created this property
        name: "George Brown College", 
        location:"Toronto",
        established: 1967
    }

    response.json(college)
})

app.put("/college", (req, res) => {
        const college = {
        method:"PUT", // this was not anything built in we created this property
        name: "George Brown College", 
        location:"Toronto",
        established: 1967
    }

    response.json(college)
})


app.delete("/college", (res, req) => {
        const college = {
        method:"DELETE", // this was not anything built in we created this property
        name: "George Brown College", 
        location:"Toronto",
        established: 1967
    }

    response.json(college)
})



// creating the user endpoint

app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh"
    const lastname = req.query.lastname || "Patel"
    res.json({ firstname, lastname })
})

app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params
    res.json({ firstname, lastname })
})

app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : []
    res.json(users)
})

app.listen(SERVER_POST, ()=> {
    console.log(`Server is running on http:localhost : ${SERVER_POST}`)
})

