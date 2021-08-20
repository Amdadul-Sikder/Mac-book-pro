const firstMemory = document.getElementById("first-memory");
const secondMemory = document.getElementById("second-memory");
const firstStorage = document.getElementById("first-storage");
const secondStorage = document.getElementById("second-storage");
const thirdStorage = document.getElementById("third-storage");
const freeDelivery = document.getElementById("free");
const payDelivery = document.getElementById("pay");
const price = document.getElementById("price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalPrice = document.getElementById("total-price");
const promoInput = document.getElementById("promo-input");
const promoBtn = document.getElementById("promo-btn");
const grandTotal = document.getElementById("grand-total");

// event handling

firstMemory.addEventListener("click", function () {
    memoryCost.innerText = 0;
    updateTotalPrice();
})
secondMemory.addEventListener("click", function () {
    memoryCost.innerText = 20;
    updateTotalPrice();
})
firstStorage.addEventListener("click", function () {
    storageCost.innerText = 0;
    updateTotalPrice();
})
secondStorage.addEventListener("click", function () {
    storageCost.innerText = 30;
    updateTotalPrice();
})
thirdStorage.addEventListener("click", function () {
    storageCost.innerText = 40;
    updateTotalPrice();
})
freeDelivery.addEventListener("click", function () {
    deliveryCost.innerText = 0;
    updateTotalPrice();
})
payDelivery.addEventListener("click", function () {
    deliveryCost.innerText = 25;
    updateTotalPrice();
})

// update total price

function updateTotalPrice() {
    const productPrice = Number(price.innerText);
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryFee = Number(deliveryCost.innerText);
    const totalProductPrice = productPrice + memoryPrice + storagePrice + deliveryFee;
    totalPrice.innerText = totalProductPrice;
    grandTotal.innerText = totalProductPrice;
}
