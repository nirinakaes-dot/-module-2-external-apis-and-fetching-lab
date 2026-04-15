// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area={STATE ABBR}"
// Your code here!


///grab from html

 const alertsDisplay = document.querySelector('#alerts-display')
 const fetchAlert = document.querySelector('#fetch-alerts')
 const errorMessage = document.querySelector('#error-message')
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
 //add event listener

 fetchAlert.addEventListener('click', (event)=> {
    event.preventdefault()

 })

//display Alerts
function displayAlerts(data){
    
    //clear display
    alertsDisplay.innerHTML = ""

    data.features.forEach(element => {
        
        const divTag= document.createElement('div')

        divTag.textContent = element.properties.headline

        alertsDisplay.appendChild(divTag)
    
    });
    
}
