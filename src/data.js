// window.worldBank = {

//   filtroPais: (baseDatos, selectPais, indicador) =>{ 
      
//       let enviaIndicador=[];
//       let indicadorFiltro;
      
//       const pais =  baseDatos[selectPais].indicators;
//       //console.log(pais);
//       const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "MEX" que tiene el elmento indicatorName : Poblacion Total de mujeres
//         return element.indicatorName === indicador;
//       })
//       // console.log(nomIndicador); 
//       indicadorFiltro=nomIndicador;
      
//       // console.log(indicadorFiltro); 
//       indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
//        let datosIndicador = element.data;
//       //console.log(datosIndicador); 
//       enviaIndicador= datosIndicador; 
//       })  
//       return enviaIndicador;
//     },
  
//    orderByAsc: (order,arrayOrder) =>{//funcion orden ascendente y descendente
//    let orderByObject=[];
  
//     for (let i in arrayOrder)
//     {
//       orderByObject.push([i, arrayOrder[i]]);
//     }
//     if (order === "asc")
//     {
//       orderByObject.sort(function(a, b) {
//         //  console.log(a[1] - b[1])
//         //console.log(orderByObject)
//         return a[1] - b[1];
        
//       });
//     }else if (order === "desc")
//      {
//        orderByObject.sort(function(a, b) {
//           //console.log(orderByObject)
//        return b[1] - a[1];      
//        });
//     }
//     return orderByObject;
//   },

//   VerGrafica: (arrayYear,arrayValors,ctx)=>{//funcion grafica

//     new window.Chart(ctx, { 
//         type: 'line',
//         data: {
//             labels: arrayYear,
//             datasets: [{
//                 label: 'Indicador Demografico (%)',
//                 data: arrayValors,
//                 backgroundColor: [
//                     'rgba(77, 169, 197, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(11,68,85,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero:true
//                     }
//                 }]
//             }
//         }
//     })
    
//     }
  
//   } //fin de window

const enviar = document.getElementById('enviar')
const prueba = document.getElementById('prueba')




const url = './data/worldbank/worldbank.json'

fetch(url)
.then(resp => resp.json())
.then(result => console.log(result))

// .then(resp =>  resp.json())
// .then(data => data.results)
// .then(results => window.prueba.name(results))
// .then(newArr => window.prueba.order(newArr))
// .then(newOrder => newOrder)
// .then(uno =>  enviar.addEventListener('click', () => {
//   printAll(uno)
// }))


.catch(err => 'error' + err)

// const printAll = (uno) => {
//   let result = `<p>name : ${uno[0].name}</p>
//   <a href="${uno[0].url}" target='_blank'> ${uno[0].url}</a>`
//   prueba.innerHTML = result
// }



