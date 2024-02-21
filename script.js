const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");
const apikey = "1hCYbBcX+qTuieT3j+dZrQ==O1OH11QCqRbsuFhC";

const options = {
        method: "GET",
        headers:{
                "X-Api-Key": apikey,
        }
}
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

        try {
                jokeE1.innerText = "Updating..."
                btnE1.innerText = "Loading..."
                const res = await fetch(apiUrl, options);
                const data = await res.json();
                btnE1.ariaDisabled = false;
                btnE1.innerText = "TELL ME A JOKE"
                jokeE1.innerText = data[0].joke;
                btnE1.ariaDisabled = true;
        } catch (error) {
                error.statusCode = 404
                throw error
        }

        
}

btnE1.addEventListener("click", getJoke);