// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=ohio"
// Your code here!

const state= document.querySelector('#state-input')

async function fetchWeatherAlerts (state){ try
    {
    const response = await fetch(weatherApi)

    const data = await response.json()
    

    catch(error){
        console.log (error)
    }
}
}

displayAlerts(data)

 const alertsDisplay = document.querySelector('#alerts-display')
 const fetchAlert = document.querySelector('#fetch-alerts')
 const errorMessage = document.querySelector('#error-message')

 fetchAlert.addEventListener('click', (displayAlerts)=> {
    displayAlerts.preventdefault()
 })

function displayAlerts(data){
    data.features.forEach(element => {
        
        const li = document.createElement('li')

        li.textContent = element.properties.headline

        alertsDisplay.appendChild(li)
         
        
    });
    
}
