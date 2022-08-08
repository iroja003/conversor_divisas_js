// Definicion de Variables
let adivisas    = [];
let url_grafica ="https://mindicador.cl/api/dolar";
//let moneys      = document.getElementById("moneys").value;
//let valclp      = document.getElementById("idvalorCLP").value;
//let idresult  = document.getElementById("idresult");  
//

async function getDatos () { 
   try {
    //https://api.gael.cloud/general/public/monedas
    //https://mindicador.cl/api/
    const res  = await fetch ("https://mindicador.cl/api/");
    adivisas   = await res.json();
    console.log(adivisas);
    const e = document.getElementById("moneys");
    e.innerHTML +=  
    `<option value="${adivisas.uf.valor }">${adivisas.uf.nombre}</option>,
     <option value="${adivisas.ivp.valor}">${adivisas.ivp.nombre}</option>,
     <option value="${adivisas.dolar.valor}">${adivisas.dolar.nombre}</option>,
     <option value="${adivisas.dolar_intercambio.valor}">${adivisas.dolar_intercambio.nombre}</option>,
     <option value="${adivisas.euro.valor}">${adivisas.euro.nombre}</option>,
     <option value="${adivisas.ipc.valor}">${adivisas.ipc.nombre}</option>,
     <option value="${adivisas.utm.valor}">${adivisas.utm.nombre}</option>,
     <option value="${adivisas.libra_cobre.valor}">${adivisas.libra_cobre.nombre}</option>,
     <option value="${adivisas.bitcoin.valor}">${adivisas.bitcoin.nombre}</option>
     `;
   }catch (error) {
      alert(error.message);
   }
 }

 getDatos();

 let clean = () => (idresult.innerHTML=""); 

 function Convertir(){

   const valclp    = document.getElementById("idvalorCLP").value;
     const moneys    = document.getElementById("moneys").value; 
     const idresult  = document.getElementById("idresult");  
   clean();
   alert('valclp: ' + valclp+'/ moneys: '+moneys);
   idresult.innerHTML = (valclp * moneys).toFixed(2);
 }

 
 function switchType(){
    tipoChart = document.getElementById("typeSelect").value;
}

// getAndCreateDataToChart() : Funcion que permite Obtener data, para crear grafica.
async function getAndCreateDataToChart() {
    const res       = await fetch(url_grafica);
    const ardivisas = await res.json();
    const labels   = ardivisas.serie.map((ardivisa) => {return ardivisa.fecha;});
    const data     = ardivisas.serie.map((ardivisa) => {const valor = ardivisa.valor;});
    const datasets = [{label: "Variacion del USD", borderColor: "rgb(255, 99, 132)",data}];return { labels, datasets };
    }
 //


// renderGrafica() : Funcion que permite renderizar la Grafica
 async function renderGrafica() {
    const data      = await getAndCreateDataToChart();
    const config  = { type: "line", data };
    const myChart = document.getElementById("myChart");
    myChart.style.backgroundColor = "white"; /*= "dark";*/
    new Chart(myChart, config);
    }
//
renderGrafica(); 
 
