// Product detail page script
let currentProductId = null;

function openProduct(id) {
  const p = getProductById(id);
  if (!p) {
    console.error('Product not found:', id);
    return;
  }

  currentProductId = id;

  document.getElementById('detail-title').textContent = p.name;
  document.getElementById('detail-type').textContent = p.type;
  document.getElementById('detail-price').textContent = '₹' + p.price.toLocaleString();
  document.getElementById('detail-desc').textContent = p.desc;

  // Main product image
  const mainImg = document.getElementById('detail-img');
  mainImg.innerHTML = `
    <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
    <div class="about-portrait-grid"></div>
  `;

  // Thumbnails
  document.getElementById('thumb-1').innerHTML = `<img src="${p.image}" alt="${p.name}" onerror="this.parentElement.classList.add('no-img')">`;
  document.getElementById('thumb-2').innerHTML = '';
  document.getElementById('thumb-3').innerHTML = '';

  document.getElementById('spec-style').textContent =
    p.style === 'modern' ? 'Modern Calligraphy' :
      p.style === 'copperplate' ? 'Copperplate' :
        'Brush Lettering';

  // Related products
  const related = products.filter(x => x.id !== id && x.category === p.category).slice(0, 3);
  document.getElementById('related-grid').innerHTML = related.map((r) => `
    <div class="product-card" onclick="location.href='product-detail.html?id=${r.id}'">
      <div class="product-thumb">
        <img src="${r.image}" alt="${r.name}" onerror="this.parentElement.classList.add('no-img')">
      </div>
      <div class="product-body">
        <p class="product-name">${r.name}</p>
        <p class="product-type">${r.type}</p>
        <div class="product-footer">
          <span class="product-price">₹${r.price.toLocaleString()}</span>
          <button class="btn-cart" onclick="event.stopPropagation(); sendPurchaseEmail('${r.id}')">+ Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

function selectPill(el) {
  el.parentNode.querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

function sendPurchaseEmail(productId) {
  const product = getProductById(productId || currentProductId);
  if (!product) return;

  const size = document.querySelector('.option-pills:nth-of-type(1) .option-pill.selected')?.textContent || 'A4';
  const finish = document.querySelector('.option-pills:nth-of-type(2) .option-pill.selected')?.textContent || 'Matte';

  const subject = encodeURIComponent('Purchase Inquiry - ' + product.name);
  const message = encodeURIComponent(
    `Hi,\n\nI'm interested in purchasing the following product:\n\n` +
    `Product: ${product.name}\n` +
    `Type: ${product.type}\n` +
    `Price: ₹${product.price.toLocaleString()}\n` +
    `Size: ${size}\n` +
    `Finish: ${finish}\n\n` +
    `Please let me know about availability and next steps.\n\n` +
    `Thank you,\n` +
    `[Your Name]`
  );

  window.location.href = `mailto:contact@divineink.com?subject=${subject}&body=${message}`;
}

// Load product on page load
document.addEventListener('DOMContentLoaded', () => {
  const productId = getUrlParam('id');
  if (productId) {
    openProduct(productId);
  } else {
    // Redirect to products if no id provided
    window.location.href = 'products.html';
  }
});
