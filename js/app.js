//Tu codigo aqui
let btn = document.querySelector('#btn')
let displayPhoto = document.querySelector('#photo')
let displayFirstName = document.querySelector('#first')
let displayLastName = document.querySelector('#last')
let displayCountry = document.querySelector('#country')
let displayPhone = document.querySelector('#phone')
let displayMail = document.querySelector('#email')

btn.addEventListener('click', updatePerson)

function updatePerson(){
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let persons = JSON.parse(this.responseText)
            displayEverything(persons)
        }
    }
    xhttp.open('GET', 'https://randomuser.me/api/', true)
    xhttp.send()
}

function displayEverything(e){
    displayPhoto.src = e.results[0].picture['large']
    displayFirstName.innerHTML = e.results[0].name['first']
    displayLastName.innerHTML = e.results[0].name['last']
    displayCountry.innerHTML = e.results[0].location['country']
    displayPhone.innerHTML = e.results[0].phone
    displayMail.innerHTML = e.results[0].email
}


