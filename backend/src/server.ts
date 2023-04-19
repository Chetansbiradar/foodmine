import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { sampleFoods, sampleTags, sampleUsers } from "./data";

const app = express();

app.use(express.json());
app.use(cors(
    {
        credentials: true,
        origin: ["http://localhost:4200"]
    }
));

app.get("/api/foods", (req, res) => {
    res.send(sampleFoods)
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const { searchTerm } = req.params;
    const foods = sampleFoods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

app.get("/api/foods/tags", (req, res) => {
    res.send(sampleTags);
});

app.get("/api/foods/tags/:tagName", (req, res) => {
    const { tagName } = req.params;
    const foods = sampleFoods.filter(food => food.tags?.includes(tagName));
    res.send(foods);
});

app.get("/api/foods/:foodId", (req, res) => {
    const { foodId } = req.params;
    const food = sampleFoods.find(food => food.id === foodId);
    res.send(food);
});


app.post("/api/foods/users/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "" || password === "") {
        res.status(400).send({ message: "Email and password are required" });
    } else {
        const user = sampleUsers.find(user => user.email === email && user.password === password);
        if(user){
            res.send({success:true,user:generateTokenResponse(user)});
        }else{
            res.status(400).send({ success:false,message: "Email or password is incorrect" });
        }
    }
});

const generateTokenResponse = (user:any) => {
    const token  = jwt.sign({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    },"VERYSTRONGSECRETKEYHEHE",{
        expiresIn: "30d"
    })

    user.token = token;
    return user;
}
const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server is running on port http://localhost:"+ PORT);
    
})