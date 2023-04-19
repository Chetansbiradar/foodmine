// import {Food} from "./app/shared/models/Food";
// import { Tag } from "./app/shared/models/Tag";

export const sampleFoods:any[] = [{
    id: "1",
    name: "Pizza",
    price: 5.99,
    tags: ["Italian", "Pizza"],
    favorite: true,
    stars: 4.5,
    imageUrl: "assets/images/pizza.jpg",
    origins: ["Italy"],
    cookingTime: 30,
},
{
    id: "2",
    name: "Burger",
    price: 4.99,
    tags: ["American", "Burger"],
    favorite: false,
    stars: 4.5,
    imageUrl: "assets/images/burger.jpg",
    origins: ["USA"],
    cookingTime: 30,
},{
    id: "3",
    name: "Pasta",
    price: 6.99,
    tags: ["Italian", "Pasta"],
    favorite: true,
    stars: 4.5,
    imageUrl: "assets/images/pasta.jpeg",
    origins: ["Italy"],
    cookingTime: 30,
},{
    id: "4",
    name: "Salad",
    price: 3.99,
    tags: ["Salad"],
    favorite: false,
    stars: 4.5,
    imageUrl: "assets/images/salad.jpeg",
    origins: ["USA"],
    cookingTime: 30,
},{
    id: "5",
    name: "Sushi",
    price: 7.99,
    tags: ["Japanese", "Sushi"],
    favorite: true,
    stars: 4.5,
    imageUrl: "assets/images/sushi.jpg",
    origins: ["Japan"],
    cookingTime: 30,
},{
    id: "6",
    name: "Ramen",
    price: 8.99,
    tags: ["Japanese", "Ramen"],
    favorite: true,
    stars: 4.5,
    imageUrl: "assets/images/ramen.jpg",
    origins: ["Japan"],
    cookingTime: 30,
}
]

export const sampleTags:any[]= [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 }
]

export const sampleUsers:any[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@food.com",
        password: "123456",
        address: "123 Main St",
        isAdmin: true,
    },
    {
        id: "2",
        name: "Jane Doe",
        email: "jane@food.com",
        password: "123456",
        address: "123 Main St",
        isAdmin: false,
    },
]