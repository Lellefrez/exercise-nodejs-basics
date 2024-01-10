import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.VITE_API_KEY;


fetch(`https://api.themoviedb.org/3/movie/popular?api_key${apiKey}`)
    .then(response => response.json())
    .then(obj => {
        console.log(obj);
    })
    .catch(err => console.error(err))