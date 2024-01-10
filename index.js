import path from "path";
import fs from "fs";

fetch(`https://api.themoviedb.org/3/movie/popular`)
    .then(response => response.json())
    .then(obj => {
        console.log(obj);
    })
    .catch(err => console.error(err))