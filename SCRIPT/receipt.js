const movieImg = document.getElementById("movie-img");
const movieTitle = document.getElementById("movie-title");
const ticketNo = document.getElementById("ticket-no");
const seat = document.getElementById("seat");
const ticketP = document.getElementById("price");
let barcode = document.getElementById("barcode")
let codes = document.querySelector('.codeimg')
let container = document.querySelector(".first")



const videoData = JSON.parse(localStorage.getItem("videoData"));
const seatNumber = JSON.parse(localStorage.getItem("seatNo"));
let resfresh = JSON.parse(localStorage.getItem("refreshment"));
let ticketPrice = localStorage.getItem('ticketPrice');
let refTotal = localStorage.getItem('refTotal');
let priceTicket = localStorage.getItem('priceTicket');


let ticketno = Math.floor((Math.random() * 1000000))
const url = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${ticketno}`

// codes.src = url;


let receiptArr = []
receiptArr.push(videoData, seatNumber, resfresh, ticketPrice, refTotal, url)
// console.log(receiptArr[0][0].title)

window.addEventListener("load", displayData)

function displayData() {
    seatNumber.map((data) => {

        container.innerHTML += `

    <div class="first-content">
        <div class="content">
            <img src="${videoData[0].Image}" alt="" width="100%" height="100%" class="img">
        </div>
        <div class="content1">
            <div>
                <h3 style="font-weight: 200;">Film <span style="font-weight: 500;">Arena </span></h3>
                <small>Alex Avenue, Round About </small>
            </div>
            <div style="padding: 2% 0;">
                <h3>${videoData[0].title}</h3>
            </div>
            <div>
                <span style="display: flex; flex-direction: column;"><small>Seat</small><strong>${data}</strong></span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <h3 style="font-weight: 200;">ADMIT ONE</h3> <strong>₦ ${priceTicket}</strong>
            </div>
        </div>
        <div class="content2">
            <img src="${url}" alt="" width="90%" height="90%" class="img">
        </div>
    </div>

    `
    }),
        resfresh.map((data) => {
            document.querySelector(".ref").innerHTML +=
                `
                <span class="conte"> <strong>
                ${data.name}
            </strong>
            <small>
                ₦ ${data.amount}
            </small></span>
        `
        })
};
function printThis() {
    window.print()
}

function goHome() {
    location.replace("./Index.html")
    localStorage.clear()
}
