let contenedor = document.getElementById('contenedor');

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((data)=>{
console.log(data)

data.results.map((elemento)=>{
    const contenedorPers = document.createElement("div")
    contenedorPers.classList.add("card")
    contenedorPers.innerHTML= 
   
    `
  <img src="${elemento.image}" alt="${elemento.name}" class="card-img-top">
  <div class="card-body">
    <h4 class="card-title">${elemento.name}</h4>
    <p class="card-text">Especie: ${elemento.species}</p>
  </div>
`;

    contenedor.append(contenedorPers)
})  })
