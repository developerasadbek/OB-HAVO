var findElement = (selector, element = document) => {
    return element.querySelector(selector);
};



let textcha = findElement(".text");
let textcha2 = findElement(".text-2") 


textcha.textContent = "Osmon : " + window.localStorage.getItem("Malumot",);
textcha2.textContent ="Havo : " +  window.localStorage.getItem("Description",);