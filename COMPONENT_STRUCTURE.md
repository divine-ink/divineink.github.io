# Divine Ink Calligraphy - Component Structure

This project has been refactored from a single HTML file into multiple component-wise files for better maintainability and scalability.

## Project Structure

```
calligraphy-portfolio/
├── index-new.html              # Home page
├── about.html                  # About page
├── products.html               # Products/Shop page
├── product-detail.html         # Product detail page
│
├── css/
│   ├── common.css             # Shared styles (nav, footer, colors)
│   ├── products.css           # Products page styles
│   └── product-detail.css     # Product detail page styles
│
├── js/
│   ├── products-data.js       # Product data shared across pages
│   ├── products.js            # Products page functionality
│   └── product-detail.js      # Product detail page functionality
│
└── shared.html                # Reference file (styles/structure template)
```

## Files Overview

### HTML Pages

1. **index-new.html** - Home page
   - Hero section with CTA buttons
   - Featured works grid
   - Sticky note quote section
   - Shop highlights section
   - Links to other pages

2. **about.html** - About/Team page
   - Hero section with portrait
   - Personal bio and stats
   - Skills grid (Copperplate, Brush, etc.)
   - Call-to-action section

3. **products.html** - Shop page
   - Filter panel (category, style, price)
   - Search functionality
   - Sort options (price, name)
   - Tag filters
   - Products grid with images
   - Responsive layout

4. **product-detail.html** - Product detail page
   - Main product image with thumbnails
   - Product information
   - Size and finish options
   - Add to cart / Wishlist buttons
   - Specifications
   - Related products section

### CSS Files

1. **css/common.css** - Shared styles
   - CSS variables (colors, spacing)
   - Navigation styles
   - Footer styles
   - Base reset styles

2. **css/products.css** - Products page
   - Filter panel styles
   - Product grid styles
   - Product cards
   - Search and sort components
   - Tag filters

3. **css/product-detail.css** - Product detail page
   - Detail layout
   - Image gallery styles
   - Options/pills
   - Related products grid
   - Specs table

### JavaScript Files

1. **js/products-data.js** - Shared data
   - Product array with all product info
   - Image URLs for all products
   - Utility functions (getProductById, getUrlParam)
   - Background gradient colors

2. **js/products.js** - Products page logic
   - renderProducts() - Display products grid
   - getFilteredProducts() - Apply all filters
   - filterProducts() - Update display
   - sortProducts() - Sort by price/name
   - setTagFilter() - Category filter
   - clearFilters() - Reset all filters

3. **js/product-detail.js** - Product detail logic
   - openProduct() - Load product by ID
   - selectPill() - Handle option selection
   - Related products rendering
   - URL parameter handling

## Features

### Product Images
- All products now have images from Unsplash
- Images are responsive and use `object-fit: cover`
- Graceful fallback if images fail to load

### Navigation
- Fixed header with navigation links
- Active state highlighting
- Responsive on mobile

### Filtering & Sorting
- Category filters (Art Prints, Commissions, Stationery, Framed Art)
- Style filters (Modern, Copperplate, Brush)
- Price range filter
- Search by product name/type
- Sort by price (low-high, high-low), name (A-Z)
- Quick tag filters (All, Prints, Commissions, etc.)

### Responsive Design
- Mobile-friendly layout
- Flexible grids
- Sticky filters panel on products page

## How to Use

1. **Visit Home Page**: Open `index-new.html`
2. **Browse Products**: Click "Explore Shop" or "Shop" in navigation
3. **View Product Details**: Click any product card to see details
4. **Filter Products**: Use filters on the products page
5. **Return to Shop**: Use "Back to Shop" link on product detail page

## URL Navigation

- `index-new.html` - Home page
- `about.html` - About page
- `products.html` - Products listing
- `product-detail.html?id=bloom` - Product detail (ID parameter)

## Adding New Products

1. Add product object to `js/products-data.js` array:
```javascript
{
  id: 'new-id',
  name: 'Product Name',
  type: 'Art Print',
  category: 'print',
  style: 'modern',
  price: 1200,
  badge: 'New',
  desc: 'Description...',
  image: 'https://image-url.jpg'
}
```

2. Product will automatically appear in products listing and all filtering works

## Color Scheme

- **Primary**: Lavender (#7c6bb5)
- **Light**: Lavender Light (#e8e3f8)
- **Dark**: Lavender Dark (#4a3c80)
- **Text**: Ink (#2a2040)
- **Muted Text**: Ink Muted (#5a5270)
- **Background**: Cream (#faf9ff)

## Browser Support

- Modern browsers with ES6 support
- Chrome, Firefox, Safari, Edge

## Notes

- CSS is inlined in HTML files for component self-containment
- Alternative: Link to external CSS files for additional optimization
- JavaScript uses vanilla JS (no frameworks)
- Product data is shared across pages for consistency
