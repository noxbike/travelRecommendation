var searchButton = document.getElementById("search");
var searchButtonPhone = document.getElementById("searchPhone");
var clear = document.getElementById("clear");
var clearPhone = document.getElementById("clearPhone");
var searchText = document.getElementById("input-search");
var searchTextPhone = document.getElementById("input-searchPhone");
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

searchButtonPhone.addEventListener("click", () =>{
    let text = searchTextPhone.value

    getData(text.toLowerCase());
    
});

searchButton.addEventListener("click", () =>{
    let text = searchText.value

    getData(text.toLowerCase());
    
});

clearPhone.addEventListener("click", () =>{
    searchTextPhone.value = "";
    listResult.innerHTML = "";
});

clear.addEventListener("click", () =>{
    searchText.value = "";
    listResult.innerHTML = "";
});

const getData = (param) => {
    fetch("api/travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => { 
            let array = data[param];
            listResult.innerHTML = "<li class='top-bar'></li>";
            for(let i = 0; i < 2; i++){
                if(param === "countries"){
                    createListOfRecommendation(array[i]['cities'][i]);
                }
                else{
                   createListOfRecommendation(array[i])
                }   
            }
            menuPhone.style.display = "none";
        })
};


const createListOfRecommendation = (element) => {
    let li = document.createElement("li");
    li.innerHTML = `<div class="background-city" style="background-image:url(${element.imageUrl})"></div><h4>${element.name}</h4><p>${element.description}</p><button>Visit</button>`
    listResult.appendChild(li)
}