const movieImg = document.getElementById("movie-img");
const movieTitle = document.getElementById("movie-title");
const ticketNo = document.getElementById("ticket-no");
const seat = document.getElementById("seat");
const ticketP = document.getElementById("price");

window.addEventListener("load", displayData)

const videoData = JSON.parse(localStorage.getItem("videoData"));
const seatNumber = JSON.parse(localStorage.getItem("seatNo"));
let resfresh = JSON.parse(localStorage.getItem("refreshment"));
let userInfo = JSON.parse(localStorage.getItem("user_info"));
let ticketPrice = localStorage.getItem('ticketPrice');
let refTotal = localStorage.getItem('refTotal');
const Rcontainer = document.querySelector(".p-container");


function displayData() {
    videoData.map((data) => {
        movieImg.src = data.Image;
        movieTitle.innerText = data.title
    }),
        seatNumber.map((item) => {
            seat.innerHTML += `<small>Seat </small>${item}, `;
            ticketNo.innerText = seatNumber.length;
        })
    ticketP.innerText = `₦  ${ticketPrice}`

};
// function testm() {
//     location.href = "./receipt.html"
// }

let amountFinal = document.querySelector(".amount");
let emailFinal = document.querySelector(".email-address");
const grandTotal = document.getElementById("grand-total");
function displayRef() {
    resfresh.map((product) => {
        Rcontainer.innerHTML += `
        <div class="product-cont">
        <div class="item2">
            <strong id="">${product.name}</strong>
        </div>
        <div class="item2">
            <strong id="product-price">₦ ${product.amount}</strong>
        </div>

    </div>
        `

    })
    let everyTotal = Number(ticketPrice) + Number(refTotal)
    grandTotal.innerText = ` ₦ ${everyTotal}`
    console.log(Number(ticketPrice) + Number(refTotal))

    amountFinal.value = everyTotal
    emailFinal.value = userInfo[0].user_email;
}
displayRef()
// const paystack_API = "pk_test_63450edff7c9728f9dfeee917786e54690c6c89e"




// paystack

const paymentForm = document.getElementById('paymentForm');
let fullname = document.querySelector('#fname');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(event) {
    event.preventDefault();
    // fillprice()
    let handler = PaystackPop.setup({
        key: 'pk_test_63450edff7c9728f9dfeee917786e54690c6c89e', // Replace with your public key
        email: emailFinal.value,
        amount: amountFinal.value * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"

        onClose: function () {
            alert('Window closed.');
            // swal("Window closed!", "Payment unsuccessful", "error");
            // window.location.href = 'prodetails.html'
        },
        callback: function (response) {
            localStorage.setItem('Fullname', JSON.stringify(fullname.value))
            //   console.log(fullname.value)
            // console.log(reference);
            let message = 'Payment complete! proceed to receipt page ';
            alert(message);
            // swal("Payment complete!", "proceed to receipt page", "success");
            window.location.replace("./receipt.html")
        }
    });

    handler.openIframe();
}
