//Select Element From DOM
let elForm = findElement(".searchForm");
let elInput = findElement(".searchInput");
let elLatText = findElement(".lat");
let elLonText = findElement(".lon");
let elViloyat = findElement(".unList");


async function Hello(evt){
    evt.preventDefault();
    var searchText = elInput.value;

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&appid=9ac1d32f3010f912c50634b2cd77c712`, { method: 'get' })
    .then(response => response.json())
    .then(json =>{
        json.forEach(element => {
           elLatText.value = element.lat;
           elLonText.value = element.lon;
        });  
    })
    .catch(() => {
        alert("Iltimos shaxarning tog`ri nomini kiriting 😩")
    })

    .then(setTimeout(() => {
        geo()
    }, 1000))

    .then(setTimeout(() => {
        window.location.pathname = "/result.html";
    }, 1600))
};

function geo() {
    // evt.preventDefault()

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${elLatText.value}&lon=${elLonText.value}&appid=9ac1d32f3010f912c50634b2cd77c712`)
    .then(response => response.json())
    .then(json => {
        json.weather.forEach(element => {
            window.localStorage.setItem("Malumot", element.main)
            window.localStorage.setItem("Description", element.description)
            console.log(element);
        });
    })
}
elForm.addEventListener("submit", Hello,);


function viloyatIshla(evt) {
    evt.preventDefault();
    elInput.value = evt.target.textContent;
}


elViloyat.addEventListener("click",viloyatIshla)






















//
// alert("Osmon : " + element.main + "\n" +
// "Description : " + element.description + "\n"+
// "Country ID  : " + element.id);