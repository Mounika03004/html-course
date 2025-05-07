let tbody = document.querySelector('tbody');

let url ='http://localhost:5050/mobiles';

let mobiles =[];

function getMobiles(){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        mobiles= data;
        updateTable()
    })
}
getMobiles();

function updateTable(){
    
}