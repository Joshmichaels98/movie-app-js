const displayDiv = document.querySelector(".display-div")
    console.log(displayDiv)
    const msgg = document.querySelector(".msg")
    console.log(msgg)
    const thirdInput= document.querySelector(".third-input")
    thirdInput.addEventListener("input", ()=> {
        thirdInput.value.trim().toLowerCase().length < 1 ? msgg.style.display="block" : msgg.style.display= "none";
    })
const thirdButton= document.querySelector(".third-btn")
thirdButton.addEventListener("click", ()=>{
    
    
    console.log(thirdInput.value.toLowerCase())
    movieFunction(thirdInput.value.toLowerCase())
    thirdInput.value= "";
})

    const movieFunction= (title) => {
        fetch (`http://www.omdbapi.com/?apikey=d57aca5b&t=${title}`)

        .then(Response => {
            
            if (!Response.ok) {
            throw new Error("can't fetch movie")
        }
        return Response.json()
    })
        .then(data=> displayMovieDetails(data))
        .catch(error=> console.error(error))

    }
    
    
    const displayMovieDetails= info =>{
        const display= info.Poster;
        
        displayDiv.innerHTML += `<div class="mirage">
        <img src="${display}" alt="${info.Title}" class="item mage">
        </div>
        
        <div class="bonet">
        <h3 class="item hfor">${info.Title}</h3>
        <div class="justify">
        <img src="./svg-star.jpg" height="20px" width= "20px">
        <p>${info.imdbRating}</p>
        </div>
        
        <div>
        <span>${info.Rated}</span>
        <span>${info.Year}</span>
        <span>${info.Runtime}</span>
        </div>
        
        <div class="genre">
        <div>${info.Genre.split(",").join("</div><div>")}</div>
        </div>

        </div>

        <div class="page">
        <h3>Plot:</h3>
        <p>${info.Plot}</p>
        <h3>Cast:</h3>
        <p>${info.Actors}</p>
        </div>
        `
        

        console.log(info)
    }