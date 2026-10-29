let container = document.getElementById("ProductContainer");

fetch("http://localhost:3003/demoproducts")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data.forEach(function(product){
            container.innerHTML += `
            <div class = "card">
            <img src="${product.image}">
            <h3>${product.Title}</h3>
            <p>Price: ${product.Price}</p>
            <button>Buy Now</button>
            </div>
            `;
        });
    })
    .catch(function(error){
        console.log("Error:", error);        
    });