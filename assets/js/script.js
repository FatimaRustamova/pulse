//--Data--//
let pulse = document.querySelector(".egg");
let search =  document.querySelector("input[type=search]");
let sort = document.querySelector("#sort");
let arr_1 = [];
let arr_2 = [];

function getAllData() {
    fetch("http://localhost:3000/Pulse")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            pulse.innerHTML += `
                <div class="soft">
                    <div class="ham">
                        <h3>${element.name}</h3>
                        <p>${element.desc}</p>
                    </div>
                    <div class="div"></div>
                    <div class="price">
                        <span>${element.price}</span>
                    </div>
                </div>
            `
        })
    })
}

getAllData();