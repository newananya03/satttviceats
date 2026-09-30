/* =====================================================
   SCROLL REVEAL
===================================================== */

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }

    });

}


/* =====================================================
   PARTICLES
===================================================== */

if (document.getElementById("particles-js") && typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 80
            },

            size: {
                value: 3
            },

            color: {
                value: "#d4af37"
            },

            line_linked: {
                enable: true,
                color: "#d4af37",
                opacity: 0.2
            },

            move: {
                speed: 1
            }

        }

    });

}


/* =====================================================
   EMAIL JS
===================================================== */

if (typeof emailjs !== "undefined") {

    emailjs.init("YOUR_PUBLIC_KEY");

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: document.getElementById("name").value,
                    reply_to: document.getElementById("email").value,
                    message: document.getElementById("message").value
                }
            )

            .then(() => {

                const status = document.getElementById("status");

                if (status) {
                    status.innerHTML = "✅ Message sent successfully!";
                }

                contactForm.reset();

            })

            .catch(error => {

                const status = document.getElementById("status");

                if (status) {
                    status.innerHTML = "❌ Failed to send message.";
                }

                console.error(error);

            });

        });

    }

}


/* =====================================================
   SHOPPING CART
===================================================== */

function addToCart(name, price, image, quantity) {

    quantity = quantity || 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            name,
            price,
            image,
            quantity: quantity
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");

}


/* =====================================================
   BUY NOW — add to cart, then jump straight to checkout
===================================================== */

function buyNow(name, price, image, quantity) {

    quantity = quantity || 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ name, price, image, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";

}


/* =====================================================
   SHARE — native share sheet, with copy-link fallback
===================================================== */

function shareProduct(name) {

    const shareData = {
        title: name + " | Sattvic Eats",
        text: "Check out " + name + " on Sattvic Eats — Pure Food. Calm Living.",
        url: window.location.href
    };

    if (navigator.share) {

        navigator.share(shareData).catch(() => {});

    } else if (navigator.clipboard) {

        navigator.clipboard.writeText(shareData.url).then(() => {
            alert("Product link copied to clipboard!");
        });

    } else {

        alert(shareData.url);

    }

}


function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {

        cartCount.innerText = count;

    }

}

window.addEventListener("load", updateCartCount);




/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

/* ---------- Whole product card clickable ---------- */

const clickableCards = document.querySelectorAll(".product-card[data-href]");

clickableCards.forEach(card => {

    card.addEventListener("click", (e) => {

        if (e.target.closest("button")) return;

        window.location.href = card.dataset.href;

    });

});

/* =====================================================
   SITE SEARCH
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("nav-search");
    const searchInput = document.getElementById("nav-search-input");
    const searchForm = document.getElementById("nav-search-form");
    const searchToggle = document.getElementById("nav-search-toggle");
    const searchClose = document.getElementById("nav-search-close");
    const resultsBox = document.getElementById("nav-search-results");

    if (!searchInput) return;

    const products = (typeof PRODUCTS !== "undefined") ? PRODUCTS : [];

    /* Open / close the search panel on mobile -------------- */

    function closeSearch() {
        if (searchBox) searchBox.classList.remove("active");
        if (resultsBox) resultsBox.classList.remove("show");
    }

    if (searchToggle && searchBox) {

        searchToggle.addEventListener("click", () => {
            searchBox.classList.toggle("active");
            if (searchBox.classList.contains("active")) {
                searchInput.focus();
            }
        });

    }

    if (searchClose) {
        searchClose.addEventListener("click", () => {
            searchInput.value = "";
            closeSearch();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeSearch();
    });

    /* Live suggestion dropdown ----------------------------- */

    function renderSuggestions(query) {

        if (!resultsBox) return;

        resultsBox.innerHTML = "";

        if (!query) {
            resultsBox.classList.remove("show");
            return;
        }

        const q = query.trim().toLowerCase();

        const matches = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.tagline && p.tagline.toLowerCase().includes(q))
        ).slice(0, 6);

        if (matches.length === 0) {
            resultsBox.innerHTML = '<div class="nav-search-empty">No products found</div>';
            resultsBox.classList.add("show");
            return;
        }

        matches.forEach(p => {

            const link = document.createElement("a");
            link.href = "product.html?slug=" + p.slug;
            link.className = "nav-search-item";
            link.innerHTML =
                '<img src="' + p.image + '" alt="' + p.name + '">' +
                '<div><span class="nsi-name">' + p.name + '</span>' +
                '<span class="nsi-category">' + p.category + '</span></div>';

            resultsBox.appendChild(link);

        });

        resultsBox.classList.add("show");

    }

    searchInput.addEventListener("input", () => {
        renderSuggestions(searchInput.value);
    });

    searchInput.addEventListener("focus", () => {
        if (searchInput.value) renderSuggestions(searchInput.value);
    });

    document.addEventListener("click", (e) => {
        if (searchBox && !searchBox.contains(e.target)) {
            resultsBox && resultsBox.classList.remove("show");
            searchBox.classList.remove("active");
        }
    });

    /* Submit -> go to Products page filtered --------------- */

    if (searchForm) {

        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const q = searchInput.value.trim();
            window.location.href = "products.html" + (q ? "?q=" + encodeURIComponent(q) : "");
        });

    }

    /* On products.html: filter the on-page grid ------------ */

    filterProductGrid();

});

function filterProductGrid() {

    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");

    const searchInput = document.getElementById("nav-search-input");
    if (q && searchInput) searchInput.value = q;

    const cards = document.querySelectorAll(".products-grid .product-card");
    if (cards.length === 0) return;

    applyProductFilter(q || "");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            applyProductFilter(searchInput.value);
        });
    }

}

function applyProductFilter(query) {

    const q = query.trim().toLowerCase();
    const sections = document.querySelectorAll(".section .products-grid");
    let totalVisible = 0;

    sections.forEach(grid => {

        const cards = grid.querySelectorAll(".product-card");
        let visibleInGrid = 0;

        cards.forEach(card => {

            const name = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
            const desc = card.querySelector(".product-info p") ? card.querySelector(".product-info p").textContent.toLowerCase() : "";
            const match = !q || name.includes(q) || desc.includes(q);

            card.style.display = match ? "" : "none";
            if (match) visibleInGrid++;

        });

        const section = grid.closest("section");
        if (section) {
            section.style.display = visibleInGrid === 0 ? "none" : "";
        }

        totalVisible += visibleInGrid;

    });

    let noResults = document.getElementById("no-search-results");

    if (totalVisible === 0 && q) {

        if (!noResults) {
            noResults = document.createElement("div");
            noResults.id = "no-search-results";
            noResults.className = "container no-search-results";
            noResults.innerHTML = "<p>No products matched \"" + query.trim() + "\". Try a different search, or browse the full range below.</p>";
            const banner = document.querySelector(".products-banner .container");
            if (banner) banner.appendChild(noResults);
        } else {
            noResults.querySelector("p").textContent = "No products matched \"" + query.trim() + "\". Try a different search, or browse the full range below.";
            noResults.style.display = "";
        }

    } else if (noResults) {
        noResults.style.display = "none";
    }

}

/* ---------- Back to top button ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const backToTopBtn = document.getElementById("back-to-top");

    if (backToTopBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }

        });

        backToTopBtn.addEventListener("click", () => {

            window.scrollTo({ top: 0, behavior: "smooth" });

        });

    }

});
