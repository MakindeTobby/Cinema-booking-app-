const seatPositon = document.querySelector(".seat");
const seatPositon2 = document.querySelector(".seat2");
const ticketNumber = document.querySelector(".tkt-no");
const addS = document.getElementById("add-s");
const seatSelected = document.getElementById("seat-select");
// const seatColor = document.getElementById("n-seat");
const priceTag = document.getElementById("price")
const seatNumber = [];
const priceArray = [];
let price = 1000;
const show = true;

for (let i = 1; i < 51; i++) {
    seatPositon.innerHTML +=
        `<button class="bn-seat text-white" id="n-seat${i}" onclick="chooseSeat(${i})">${i}</button>`
    seatPositon2.innerHTML +=
        `<button class="bn-seat text-white" id="n-seat${i + 50}" onclick="chooseSeat(${i + 50})">${i + 50}</button>`
}


function chooseSeat(ev) {
    if (seatNumber.indexOf(ev) < 0) {
        seatNumber.push(ev)
        document.getElementById(`n-seat${ev}`).style = "background-color: red; color:#fff;"
        priceArray.push(price)
        displayInfo()
    }
    else {
        seatNumber.splice(seatNumber.indexOf(ev), 1)
        document.getElementById(`n-seat${ev}`).style = "background-color: rgba(255, 255, 255, 0.247); color:#fff;"
        priceArray.splice(seatNumber.indexOf(ev), 1)
        displayInfo()
    }
    localStorage.setItem("seatNo", JSON.stringify(seatNumber));
    localStorage.setItem("priceTicket", price)

}
function displayInfo() {
    seatSelected.innerHTML = ""
    seatNumber.map((data) => {
        seatSelected.innerHTML += `<small>Seat  ${data}</small> `
    })

    if (seatNumber.length < 1) {
        ticketNumber.innerText = "No"
    }
    else {
        ticketNumber.innerText = seatNumber.length
    }
    let totalPrice = priceArray.reduce((total, value) => {
        return total + value;
    }, 0)

    priceTag.innerHTML = `₦ ${totalPrice}`
    localStorage.setItem("ticketPrice", totalPrice);

    if (seatNumber.length <= 1) {
        addS.innerText = ""
    } else {
        addS.innerText = "s"
    }
}


//Refreshment page

const refBox = document.querySelector(".ref-box")
const cartBar = document.getElementById("noti-bar")
const cartArr = [];
let amountArr = []

const Refreshments = [
    {
        image: "../Media/refreshment (2).png",
        name: "Popcorn",
        amount: 1200
    },
    {
        image: "../Media/refreshment (4).png",
        name: "Sprite",
        amount: 450,
    },
    {
        image: "../Media/refreshment (5).png",
        name: "Fanta",
        amount: 450,
    },
    {
        image: "../Media/refreshment (3).png",
        name: "Coca-cola",
        amount: 500,
    },
    {
        image: "../Media/refreshment (1).png",
        name: "Fruit drink",
        amount: 500,
    },

];

let refTxt = document.getElementById("ref-btn");
document.getElementById("ref-btn")
let ref = true

function showRefresh() {
    if (refTxt.innerText == "Hide Refreshments") {
        refBox.innerHTML = ""
        refTxt.innerText = "Add Refreshments"
        // ref = false
    }
    else {
        Refreshments.map((product, index) => {
            refBox.innerHTML += `
        <div class="r-box">
        <div class="drnks"><img src="${product.image}" alt="" width="50%" height="80%" style="border-radius: 10px;">
        </div>
        <h4 class="text-dark text-align-center ps-2">${product.name}</h4>
        <h5 class="text-danger ps-2">₦ ${product.amount}</h5>
        <button class="btn btnM-bg rounded-0 " onclick="addToCart(${index})">Add to Cart</button> 
    </div>
    
        `
        })
        refTxt.innerText = "Hide Refreshments"
        // ref = true
    }
}



function addToCart(index) {
    cartArr.push(Refreshments[index]);
    amountArr.push(Refreshments[index].amount);
    let refreshTotal = amountArr.reduce((first, second) => {
        return first + second;
    }, 0);


    cartBar.innerText = cartArr.length;
    localStorage.setItem("refreshment", JSON.stringify(cartArr));
    console.log(refreshTotal);
    localStorage.setItem("refTotal", JSON.stringify(refreshTotal));

}
const videoData = JSON.parse(localStorage.getItem("videoData"))
const userInfo = JSON.parse(localStorage.getItem("user_info"))
// let iframe = document.querySelector('#iframe')
// let params = new URLSearchParams(location.search);
// let id = params.get('k')
// let trailer_id = videoData[Number(id)].trailerID


window.addEventListener("load", displayVideo,)
function displayVideo() {

    videoData.map((item) => {
        document.getElementById('title').innerText = item.title;
        document.getElementById('info').innerText = `Categories: ${item.categories}`
        document.getElementById('studio').innerText = `Studio: ${item.studio}`
        document.getElementById('describe').innerText = `Overview:  ${item.desc}`
        // document.getElementById('poster').src = item.Image;
        // iframe.setAttribute('src', `https://www.youtube.com/embed/${trailer_id}`)
        // console.log(trailer_id);

    })
};
function displayUser() {
    userInfo.map((value) => {
        document.getElementById("user-name").innerText = value.user_username
    })
}
displayUser()
// Time Array

// let dateArr = [
//     "Monday, Aug 15",
//     "Tuesday, Aug 16",
//     "Wednessday, Aug 17",
//     "Thursday, Aug 18",
//     "Friday, Aug 19 ",
//     "Saturday, Aug 20",
//     "Sunday, Aug 21",
// ]
// let timeArr = [
//     "11:30",
//     "2:00",
//     "4:00",
//     "8:00",
// ]

// function displayTime() {
//     dateArr.map((value) => {
//         document.getElementById("date").innerHTML += `<option value = "${value}" >${value}</option>`
//     }),
//         timeArr.map((timeEl) => {
//             document.getElementById("time").innerHTML += `<option value = "${timeEl}" >${timeEl}</option>`
//         })
// }
// displayTime()
function goCart() {
    location.href = "./cart.html"
}
