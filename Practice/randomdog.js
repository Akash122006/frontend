//<https://dog.ceo/api/breeds/image/random>
URL=dog.ceo/api/breeds/image/random

fetch(URL)
    .then(Response)=>(Response.json()).then(output=>)
    console.log(output)