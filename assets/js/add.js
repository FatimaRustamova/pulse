let form = document.querySelector("form");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let price = document.querySelector("#price");
let table = document.querySelector("table");
let error = document.querySelectorAll("#error");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    let nameInp = name.value.trim();
    let descInp = desc.value.trim();
    let priceInp = price.value.trim();

    if(nameInp && descInp && priceInp){
        let obj = {
            name: name.value,
            desc: desc.value,
            price: price.value
        }
        axios.post("http://localhost:3000/Pulse", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
    else{
        error.style.display = "block"
    }
})

fetch("http://localhost:3000/Pulse")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.desc}</td>
                <td>${element.price}</td>
                <td>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </td>
                <td>
                    <button onclick="updateEl(${element.id})">Update</button>
                </td>
            </tr>
        `
    })
})

function deleteEl(id) {
    axios.delete(`http://localhost:3000/Pulse/${id}`);
    window.location.reload();
}

function updateEl(id) {
    window.location = `./update.html?id=${id}`
}