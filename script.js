
let cartItems = JSON.parse(localStorage.getItem("cart_items_asmaa")) || []; 
let favoriteItems = JSON.parse(localStorage.getItem("fav_items_asmaa")) || []; // أضفنا مصفوفة الرغبات هنا


function getDiscount(price, oldPrice) {
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function renderSection(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = "";
    list.forEach(p => {
        const discount = getDiscount(p.price, p.old_price);
        const isAdded = cartItems.find(item => item.id === p.id);
        
        const isFavorite = favoriteItems.includes(p.id); 
        const heartClass = isFavorite ? "fa-solid" : "fa-regular";
        const heartActive = isFavorite ? "active" : "";
        // ------------------------------------

        html += `
        <div class="product swiper-slide">
            ${discount > 0 ? `<span class="sale_present">%${discount}</span>` : ''}
            <div class="img_product">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h3 class="name_product"><a href="#">${p.name}</a></h3>
            <div class="price">
                <p><span>$${p.price}</span></p>
                ${p.old_price ? `<span class="old_price">$${p.old_price}</span>` : ''}
            </div>
            <div class="icons">
                <button 
                    class="btn_add_cart ${isAdded ? 'active' : ''}" 
                    data-id="${p.id}" 
                    ${isAdded ? 'disabled' : ''}>
                    <i class="fa-solid fa-cart-shopping"></i> 
                    ${isAdded ? 'Item in cart' : 'Add to cart'}
                </button>
                <div class="icon_product ${heartActive}">
                    <i class="${heartClass} fa-heart"></i>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// ==========================
// 4. تحديث واجهة السلة (الجانبية وصفحة الـ Checkout)
// ==========================
function updateCartUI() {
    localStorage.setItem("cart_items_asmaa", JSON.stringify(cartItems));

    const cartContainer = document.getElementById("cart_items"); 
    const totalEl = document.querySelector(".price_cart_total");
    const countEl = document.querySelector(".Count_item_cart");
    const headerEl = document.querySelector(".count_item_header");

    if (cartContainer) {
        let html = "";
        let total = 0;
        let count = 0;

        cartItems.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;
            html += `
            <div class="item_cart">
                <img src="${item.img}" width="60">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${item.price}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="delete_item" data-id="${item.id}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`;
        });

        cartContainer.innerHTML = html;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
        if (countEl) countEl.textContent = count;
        if (headerEl) headerEl.textContent = count;
    }

    const checkout_items = document.getElementById("checkout_items");
    const subtotal_checkout = document.querySelector(".subtotal_checkout");
    const total_checkout = document.querySelector(".total_checkout");

    if (checkout_items) {
        checkout_items.innerHTML = "";
        let subtotal = 0;
        cartItems.forEach((item) => {
            subtotal += item.price * item.quantity;
            checkout_items.innerHTML += `
            <div class="item_cart">
                <div class="image_name">
                    <img src="${item.img}" alt="">
                    <div class="content">
                        <h4>${item.name}</h4>
                        <p class="price_cart">$${item.price}</p>
                        <div class="quantity_control">
                            <button class="decrease_quantity" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="increase_quantity" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
                <button class="delete_item" data-id="${item.id}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`;
        });

        if (subtotal_checkout) subtotal_checkout.innerHTML = `$${subtotal.toFixed(2)}`;
        if (total_checkout) total_checkout.innerHTML = `$${(subtotal + 20).toFixed(2)}`;
    }

    updateAllSections();
}

// دالة تحديث الرغبات
function updateFavoriteUI() {
    localStorage.setItem("fav_items_asmaa", JSON.stringify(favoriteItems));
    const favCountEl = document.querySelector(".count_favorite");
    if (favCountEl) {
        favCountEl.textContent = favoriteItems.length;
    }
}
function updateAllSections() {
    if (typeof allProducts !== 'undefined') {
        
        // 1. قسم العروض (المنتجات من id 0 إلى 8)
        const saleList = allProducts.filter(p => p.id >= 0 && p.id <= 8).slice(0, 8);
        renderSection(saleList, 'swiper_items_sale');

        // 2. قسم الملابس الشتوية أو الجواكت (المنتجات من id 9 إلى 16)
        const elecList = allProducts.filter(p => p.id >= 9 && p.id <= 16).slice(0, 6);
        renderSection(elecList, 'swiper_elictronics');

        // 3. قسم الأحذية (المنتجات من id 17 إلى 26)
        const shoeList = allProducts.filter(p => p.id >= 17 && p.id <= 26).slice(0, 8);
        renderSection(shoeList, 'swiper_shoes');

        // 4. قسم التوب / السويت شيرت (المنتجات من id 27 إلى 37)
        const tshirtList = allProducts.filter(p => p.id >= 27 && p.id <= 37).slice(0, 8);
        renderSection(tshirtList, "swiper_tshirts");

        // تحديث السوايبير عشان الحركة تشتغل صح
        updateSwipers();
    }
}

// دالة مساعدة لتحديث كل السوايبيرز في الصفحة مرة واحدة
function updateSwipers() {
    if (typeof swiperProducts !== 'undefined') {
        swiperProducts.update();
    }
}
// ==========================
// 5. التحكم في الأحداث (Events)
// ==========================
document.addEventListener("click", (e) => {
    // إضافة للمنتج
    if (e.target.closest(".btn_add_cart")) {
        const btn = e.target.closest(".btn_add_cart");
        const id = Number(btn.dataset.id);
        const product = allProducts.find(p => p.id === id);
        
        if (product) {
            let existing = cartItems.find(item => item.id === id);
            if (!existing) {
                cartItems.push({ ...product, quantity: 1 });
                updateCartUI();
                const cart = document.querySelector('.cart');
                if (cart) cart.classList.add("active");
            }
        }
    }

    // التحكم في ضغطة القلب (تعديل بسيط ليعمل مع الريفريش)
    if (e.target.closest(".icon_product")) {
        const iconContainer = e.target.closest(".icon_product");
        const productId = Number(iconContainer.closest(".product").querySelector(".btn_add_cart").dataset.id);
        
        const index = favoriteItems.indexOf(productId);

        if (index === -1) {
            favoriteItems.push(productId);
        } else {
            favoriteItems.splice(index, 1);
        }
        
        updateFavoriteUI();
        updateAllSections(); // لإعادة رسم القلوب بالألوان الصحيحة فوراً
    }

    // زيادة وتقليل وحذف الكمية... (بقية الكود الخاص بكِ)
    if (e.target.classList.contains("increase_quantity")) {
        const id = Number(e.target.dataset.id);
        const item = cartItems.find(p => p.id === id);
        if (item) { item.quantity++; updateCartUI(); }
    }
    if (e.target.classList.contains("decrease_quantity")) {
        const id = Number(e.target.dataset.id);
        const item = cartItems.find(p => p.id === id);
        if (item && item.quantity > 1) { item.quantity--; updateCartUI(); }
    }
    if (e.target.closest(".delete_item")) {
        const btn = e.target.closest(".delete_item");
        const id = Number(btn.dataset.id);
        cartItems = cartItems.filter(p => p.id !== id);
        updateCartUI();
    }
});

// ==========================
// 6. تشغيل أولي
// ==========================
updateFavoriteUI(); 
updateCartUI(); 

function open_close_cart() {
    const cart = document.querySelector('.cart');
    if (cart) cart.classList.toggle("active");
}

let nav_links = document.querySelector(".nav_links")
function open_Menu(){
    nav_links.classList.toggle("active")
}