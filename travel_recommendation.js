var searchButton = document.getElementById("search");
var clear = document.getElementById("clear");
var searchText = document.getElementById("input-search");
var listResult = document.getElementById("list-result");
var buttonMenu = document.getElementById("buttonMenu");
var menuPhone = document.getElementById("menuPhone");

buttonMenu.addEventListener("click",() => {
    if(menuPhone.style.display == "none" || menuPhone.style.display == ""){
        menuPhone.style.display = "flex";
    }
    else{
        menuPhone.style.display = "none";
    }
})

searchButton.addEventListener("click", () =>{
    let text = searchText.value

    getData(text.toLowerCase());
    
});
clear.addEventListener("click", () =>{
    searchText.value = "";
});

const getData = (param) => {
    fetch("/travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => { 
            let array = data[param];
            listResult.innerHTML = "<li class='top-bar'></li>";
            array.forEach(element => {
                console.log(element)
                if(param === "countries"){
                    element["cities"].forEach(country => {
                        createListOfRecommendation(country)
                    })
                }
                else{
                   createListOfRecommendation(element)
                }   
                })   
            });
}

const createListOfRecommendation = (element) => {
    let li = document.createElement("li");
    li.innerHTML = `<div class="background-city" style="background-image:url(${element.imageUrl})"></div><h4>${element.name}</h4><p>${element.description}</p><button>Visit</button>`
    listResult.appendChild(li)
}