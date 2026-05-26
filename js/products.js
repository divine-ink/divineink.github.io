// Products page script
let activeTag = 'all';
let sortOrder = 'default';
let cart = [];

function renderProducts(list) {
  const grid = document.getElementById('products-grid');
  document.getElementById('results-count').textContent = `Showing ${list.length} piece${list.length !== 1 ? 's' : ''}`;
  grid.innerHTML = list.map((p, i) => `
  <div class="product-card" onclick="location.href='product-detail.html?id=${p.id}'">
    <div class="product-thumb">
      <img src="${p.image}" alt="${p.name}" onerror="this.parentElement.classList.add('no-img')">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
    </div>
    <div class="product-body">
      <p class="product-name">${p.name}</p>
      <p class="product-type">${p.type}</p>
      <div class="product-footer">
        <span class="product-price">₹${p.price.toLocaleString()}</span>
        <button class="btn-cart" onclick="event.stopPropagation(); addToCart('${p.id}')">+ Cart</button>
      </div>
    </div>
  </div>
  `).join('');
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (product) {
    cart.push(product);
    showNotification(`${product.name} added to cart!`);
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: var(--lavender-deep);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function getFilteredProducts() {
  let list = [...products];

  // Tag filter
  if (activeTag !== 'all') list = list.filter(p => p.category === activeTag);

  // Checkbox categories
  const catChecks = [...document.querySelectorAll('.cat-check:checked')].map(c => c.value);
  if (catChecks.length) list = list.filter(p => catChecks.includes(p.category));

  // Style checkboxes
  const styleChecks = [...document.querySelectorAll('.style-check:checked')].map(c => c.value);
  if (styleChecks.length) list = list.filter(p => styleChecks.includes(p.style));

  // Price
  const minP = parseFloat(document.getElementById('price-min').value) || 0;
  const maxP = parseFloat(document.getElementById('price-max').value) || Infinity;
  list = list.filter(p => p.price >= minP && p.price <= maxP);

  // Search
  const q = document.getElementById('search-input').value.toLowerCase();
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q));

  // Sort
  if (sortOrder === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (sortOrder === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (sortOrder === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

function filterProducts() {
  renderProducts(getFilteredProducts());
}

function sortProducts(val) {
  sortOrder = val;
  filterProducts();
}

function setTagFilter(tag, btn) {
  activeTag = tag;
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
}

function clearFilters() {
  activeTag = 'all';
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.tag-btn').classList.add('active');
  document.querySelectorAll('.cat-check, .style-check').forEach(c => c.checked = false);
  document.getElementById('price-min').value = '';
  document.getElementById('price-max').value = '';
  document.getElementById('search-input').value = '';
  sortOrder = 'default';
  document.querySelector('.sort-select').value = 'default';
  filterProducts();
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(getFilteredProducts());
});
