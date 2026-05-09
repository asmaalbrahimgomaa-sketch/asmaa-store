const scriptURL = "https://script.google.com/macros/s/AKfycby8cJUmiKqiAtEiGNDvTEIGCmyys4j1h_yYEOCO2vMIszjt8jk6FChPVsedSdnf7LQx/exec";

const form = document.getElementById('form_contact');

const itemsInput = document.getElementById('items');
const totalPriceInput = document.getElementById('total_Price');
const countItemsInput = document.getElementById('count_Items');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const priceDisplay = document.querySelector(".price_cart_total");
    totalPriceInput.value = priceDisplay ? priceDisplay.innerText.trim() : "0";

    const countDisplay = document.querySelector(".Count_item_cart");
    countItemsInput.value = countDisplay ? countDisplay.innerText.trim() : "0";

    let productNames = [];

    document.querySelectorAll("#checkout_items h4").forEach(item => {
        productNames.push(item.innerText.trim());
    });

    itemsInput.value = productNames.length > 0
        ? productNames.join(", ")
        : "No Items";

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors"
    })
    .then(() => {

        alert("Success!");

        document.getElementById("checkout_items").innerHTML = "";
        document.getElementById("cart_items").innerHTML = "";

        document.querySelector(".price_cart_total").innerText = "$0";
        document.querySelector(".subtotal_checkout").innerText = "$0";
        document.querySelector(".total_checkout").innerText = "$0";

        document.querySelector(".Count_item_cart").innerText = "0";
        document.querySelector(".count_item_header").innerText = "0";

        form.reset();

        itemsInput.value = "";
        totalPriceInput.value = "";
        countItemsInput.value = "";

    })
    .catch((error) => console.error("Error!", error.message));
});
function renderOrderSummary() {
    // 1. سحب المنتجات من localStorage
    let cartItemsAsmaa = JSON.parse(localStorage.getItem("cart_items_asmaa")) || [];
    
    // 2. تحديد مكان العرض (تأكدي من وجود div بهذا الاسم في HTML صفحة الـ Checkout)
    const summaryContainer = document.getElementById("order_items_summary"); 
    const subtotalEl = document.querySelector(".subtotal_price"); // العنصر اللي بيعرض 325.00 في الصورة

    if (summaryContainer) {
        let html = "";
        let total = 0;

        cartItemsAsmaa.forEach(item => {
            total += item.price * item.quantity;
            html += `
                <div class="order_item" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
        });

        summaryContainer.innerHTML = html;
        
        // تحديث المجموع (Subtotal)
        if (subtotalEl) {
            subtotalEl.textContent = `$${total.toFixed(2)}`;
        }
    }
}

// تشغيل الدالة فور تحميل الصفحة
document.addEventListener("DOMContentLoaded", renderOrderSummary);