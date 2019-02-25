let basePokemon={}; //inicializar BD
const arrayTipoPokemon=[];
const url = './data/pokemon/pokemon.json'; //ruta del archivo .json


const btnPokemon = document.getElementById('btn-Pokemon');
const productWrapper = document.getElementById('list-pokemon');
const viewPokemons = () =>{  //muestra pokemon por tipo
const basePokemon = JSON.parse(localStorage.getItem('data'));
const base = basePokemon.pokemon;
      let viewAllPokem = '';
      for(let i in base) {           
        //console.log('Tipo Poekemon: ',pokemon);
        viewAllPokem = viewAllPokem +`  
        <div class="col-md-3">
         <div class="card bg-dark">
           <img src="${base[i].img}" class="card-img-top" alt="${base[i].name}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${base[i].name}</h5>
           </div>
         </div> 
        </div>             
        `
      arrayTipoPokemon.push(base[i].type[0]); //almacena tipo de pokemon en array
      }
      //arrayDataPokemTipo almacena elementos unicos menu Filtrar, por mecio de filter
      let arrayDataPokemTipo = arrayTipoPokemon.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })
      //console.log(arrayDataPokemTipo);
      dataFilter(arrayDataPokemTipo)

    productWrapper.innerHTML=viewAllPokem;    
    return viewAllPokem;  
}
btnPokemon.addEventListener('click', viewPokemons);


//funcion llenado de menu filtro
menuFiltro = document.getElementById('menu-filtro');
const dataFilter =(arrayDataPokemTipo) =>{
  let llenado = '';
  for(let i=0; i<arrayDataPokemTipo.length; i++){
  llenado = llenado +`
  <a class="dropdown-item" href="#">${arrayDataPokemTipo[i]}</a>
  `
  }  
  menuFiltro.innerHTML = llenado;
}//fin funct llenado






fetch(url)   //lectura del archivo .json
.then(response => response.json())
.then(data => { localStorage.setItem('data',JSON.stringify(data)) }) //procesa datos
 //console.log (data);    
.catch(err => (err)) 

/*function getPokemon () {
  const stringPokemon = localStorage.getItem('data');
  const basePokemon = JSON.parse(stringPokemon);
  viewPokemons(basePokemon)
  //return basePokemon;
}*/
    
  
