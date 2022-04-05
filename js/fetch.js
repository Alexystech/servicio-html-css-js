const url = 'https://pokeapi.co/api/v2/pokemon/1/';
//http://localhost:8085/tareaweb/api/product/get/all
//https://pokeapi.co/api/v2/pokemon/2/

data2 = fetch(url)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById("product-data");
        
        element.innerHTML = `
            ${data.name}
        `;
    }).catch(err=>console.log(err));