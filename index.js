// index.js
// Your code here!

//API intialise
const weatherApi = "https://api.weather.gov/alerts/active?area="

// grab from html
const alertsDisplay = document.querySelector('#alerts-display')
const fetchAlert = document.querySelector('#fetch-alerts')
const errorMessage = document.querySelector('#error-message')
const state = document.querySelector('#state-input')

// fetching
async function fetchWeatherAlerts(stateabbr) {
    try {
        const response = await fetch(weatherApi + encodeURIComponent(stateabbr.trim().toUpperCase()))
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`)
        }
        const data = await response.json()
        displayAlerts(data)
         state.value = ""

         errorMessage.classList.add('hidden')
    errorMessage.textContent =""
    } catch (error) {
        console.log(error)
    }
    
    errorMessage.textContent = error.message
        errorMessage.classList.remove('hidden') 
}

// add event listener
fetchAlert.addEventListener('click', (event) => {
    event.preventDefault()
    fetchWeatherAlerts(state.value)
})

// display Alerts
function displayAlerts(data) {
    // clear display
    alertsDisplay.innerHTML = ""

    if (!data || !Array.isArray(data.features) || data.features.length === 0) {
        const noAlerts = document.createElement('div')
        noAlerts.textContent = 'No alerts found for that state.'
        alertsDisplay.appendChild(noAlerts)
        return
    }

    const header = document.createElement('div')
    header.textContent = `Weather Alerts: ${data.features.length}`

    alertsDisplay.appendChild(header)
    
    data.features.forEach(element => {
        const divTag = document.createElement('div')
        divTag.textContent = element.properties.headline
        alertsDisplay.appendChild(divTag)
    })
}
