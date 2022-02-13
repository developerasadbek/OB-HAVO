//Select Element From DOM
let elForm = findElement(".searchForm");
let elInput = findElement(".searchInput");
let elLatText = findElement(".lat");
let elLonText = findElement(".lon");
let elViloyat = findElement(".unList");


async function gettingGeo(evt){
    evt.preventDefault();
    var searchText = elInput.value;

    let x = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&appid=9ac1d32f3010f912c50634b2cd77c712`, { method: 'get' })
    .then(response => response.json())
    .then(json =>{
        json.forEach(element => {
           elLatText.value = element.lat;
           elLonText.value = element.lon;
        });  
    })
    
    .then(setTimeout(() => {
        weahterResult()
    }, 800))

    .then(setTimeout(() => {
        window.location.pathname = "/result.html";
    }, 1000))

    .catch(() => {
        alert("Iltimos shaxarning tog`ri nomini kiriting 😩")
    })
};

function weahterResult() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${elLatText.value}&lon=${elLonText.value}&appid=9ac1d32f3010f912c50634b2cd77c712`)
    .then(response => response.json())
    .then(json => {
        json.weather.forEach(element => {
            window.localStorage.setItem("Malumot", element.main)
        });
    })
}
elForm.addEventListener("submit", gettingGeo,);


function renderingNextPage(evt) {
    evt.preventDefault();
    elInput.value = evt.target.textContent;
}

elViloyat.addEventListener("click",renderingNextPage)
