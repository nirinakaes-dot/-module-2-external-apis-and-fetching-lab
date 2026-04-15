// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=ohio"
// Your code here!

const state= document.querySelector('#state-input')

//fetching

async function fetchWeatherAlerts (state){ try
    {
    const response = await fetch(weatherApi)

    const data = await response.json()
    console.log(data)
    

    catch(error){
        console.log (error)
    }
}
}

displayAlerts(data)
//grab 

 const alertsDisplay = document.querySelector('#alerts-display')
 const fetchAlert = document.querySelector('#fetch-alerts')
 const errorMessage = document.querySelector('#error-message')

 //add event listener

 fetchAlert.addEventListener('click', (displayAlerts)=> {
    displayAlerts.preventdefault()
 })
//display 
function displayAlerts(data){
    data.features.forEach(element => {
        
        const divTag= document.createElement('div')

        divTag.textContent = element.properties.headline

        alertsDisplay.appendChild(divTag)
         
        
    });
    
}
