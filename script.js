const userName = document.getElementById("user");
const phoneNumber = document.getElementById("userNumber");
const pokemonUrl = "https://pokeapi.co";
const verificationURL = "U8HuWpB9WtIo8YyQElQXNdoiwHCy0gE8";
const verificationButton = document.getElementById('verifyButton');
const PokeImage = document.querySelector('img');

function notFound(){
    const Pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        //if(Pokemon = '(Not Found)'){
        //    Pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * Pokemon.length)}`)
        //}
        Promise
        .all([Pokemon])
        .then((response) => {
            return Promise.all(response.map((res) => res.json()));
        }).then((data) => {
  
            const [poke] = data;
  
              console.log(poke);
              PokeImage.src = poke.sprites.front_default;
              PokeImage.classList.add('pokefound');
    
        });
}

verificationButton.addEventListener('click', function(){
    if(userName.value == ''){
        alert('fill in all categories');
    } else {
        //https://pokeapi.co/api/v2/pokemon/pikachu
        const Pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${userName.value}`)
        //if(Pokemon = '(Not Found)'){
        //    Pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * Pokemon.length)}`)
        //}
        Promise
        .all([Pokemon])
        .then((response) => {
            return Promise.all(response.map((res) => res.json()));
        }).then((data) => {
  
            const [poke] = data;
  
              console.log(poke);
              PokeImage.src = poke.sprites.front_default;
              PokeImage.classList.add('pokefound');
    
        }).catch((error) => notFound());
    }
    if(phoneNumber.value == ''){
        alert('fill in all categories');
    }
    else {
        var myHeaders = new Headers();
            myHeaders.append("apikey", "U8HuWpB9WtIo8YyQElQXNdoiwHCy0gE8");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        const NumberVerify = fetch(`https://api.apilayer.com/number_verification/validate?number=${phoneNumber.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                
            window.location.href = "welcome/welcome.html"  

            })
            .catch(error => console.log('error', error));
    }
})

