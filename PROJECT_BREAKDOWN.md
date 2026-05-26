# Calligraphy Portfolio - Component-wise Breakdown

## 📁 Directory Structure

```
calligraphy-portfolio/
│
├── 📄 HTML Pages (4 files)
│   ├── index-new.html           ← HOME PAGE (Hero + Featured Works)
│   ├── about.html               ← ABOUT PAGE (Bio + Skills)
│   ├── products.html            ← SHOP PAGE (Filters + Products Grid)
│   └── product-detail.html      ← PRODUCT DETAIL PAGE (Images + Options)
│
├── 📁 css/ (3 files)
│   ├── common.css               ← Shared: Nav, Footer, Variables, Colors
│   ├── products.css             ← Products page: Filters, Grid, Cards
│   └── product-detail.css       ← Detail page: Gallery, Specs, Related
│
├── 📁 js/ (3 files)
│   ├── products-data.js         ← Shared: Product array, Utilities
│   ├── products.js              ← Products logic: Filter, Sort, Render
│   └── product-detail.js        ← Detail logic: Load, Display, Related
│
└── 📄 Documentation
    ├── COMPONENT_STRUCTURE.md   ← Full documentation
    └── PROJECT_BREAKDOWN.md     ← This file
```

## 🎯 Page Components

### 1. HOME PAGE (index-new.html)
```
index.html
├── Shared Styles (CSS Variables)
├── Navigation
├── Hero Section
│   ├── Background gradient circles
│   ├── Title + Subtitle
│   ├── Description
│   └── CTAs (Explore Shop, About Me)
├── Featured Works Section
│   └── Works Grid (3 cards linking to products)
├── Sticky Quote Section
└── Popular Pieces Section
    └── Works Grid (3 cards)
```

### 2. ABOUT PAGE (about.html)
```
about.html
├── Navigation
├── About Hero Section
│   ├── Portrait (Left)
│   └── Bio Content (Right)
│       ├── Heading + Description
│       └── Stats (8+ years, 340+ commissions, 12 styles)
├── Skills Section
│   └── Skill Cards Grid (4 items)
│       ├── Copperplate
│       ├── Brush Lettering
│       ├── Spencerian
│       └── Modern Calligraphy
├── Sticky Quote Section
│   └── Commission CTA
└── Footer
```

### 3. PRODUCTS PAGE (products.html)
```
products.html
├── Navigation
├── Shop Header
├── Shop Layout
│   ├── Filters Panel (Left Sidebar)
│   │   ├── Search Bar
│   │   ├── Category Filters (4 checkboxes)
│   │   ├── Style Filters (3 checkboxes)
│   │   ├── Price Range Slider
│   │   └── Clear Filters Button
│   │
│   └── Products Section (Right)
│       ├── Results Bar
│       │   ├── Results Count
│       │   └── Sort Dropdown
│       ├── Tag Filters
│       │   └── 5 Quick Filters
│       └── Products Grid
│           └── Product Cards × 8
│               ├── Image
│               ├── Badge
│               ├── Name
│               ├── Type
│               ├── Price
│               └── Add to Cart
└── Footer
```

### 4. PRODUCT DETAIL PAGE (product-detail.html)
```
product-detail.html
├── Navigation
├── Detail Layout
│   ├── Image Section (Left)
│   │   ├── Main Image Gallery
│   │   │   ├── Product Image
│   │   │   ├── Grid Overlay
│   │   │   └── Product Name
│   │   └── Thumbnail Gallery (3 thumbs)
│   │
│   └── Content Section (Right)
│       ├── Back Link
│       ├── Product Type Tag
│       ├── Title
│       ├── Price
│       ├── Description
│       ├── Size Options (Pills)
│       │   └── A5, A4, A3, Custom
│       ├── Finish Options (Pills)
│       │   └── Matte, Gloss, Unframed
│       ├── Action Buttons
│       │   ├── Add to Cart
│       │   └── Wishlist
│       └── Specifications Table
│           ├── Medium
│           ├── Script Style
│           ├── Dispatch Time
│           ├── Framing
│           └── Customizable
├── Related Products Section
│   └── Related Grid (3 products)
└── Footer
```

## 🔗 Navigation Flow

```
HOME (index.html)
├─→ Featured Works Card → product-detail.html?id=bloom
├─→ Shop CTA → products.html
├─→ About Link → about.html
└─→ Popular Pieces Card → product-detail.html?id=soul

ABOUT (about.html)
├─→ Browse Shop Button → products.html
└─→ Commission Link → products.html

PRODUCTS (products.html)
├─→ Product Card → product-detail.html?id={productId}
├─→ Home Link → index.html
└─→ About Link → about.html

PRODUCT DETAIL (product-detail.html)
├─→ Related Product → product-detail.html?id={relatedId}
├─→ Back Button → products.html
├─→ Home Link → index.html
└─→ About Link → about.html
```

## 📦 Data Flow

### Product Data (js/products-data.js)
```javascript
products = [
  {
    id: 'bloom',
    name: 'Bloom in Silence',
    type: 'Art Print',
    category: 'print',
    style: 'modern',
    price: 1200,
    badge: 'Bestseller',
    desc: '...',
    image: 'https://...'
  },
  // ... 7 more products
]
```

### Data Usage:
- **products.html** → renderProducts() → Display all filtered products
- **product-detail.html** → openProduct(id) → Load specific product
- Shared across both pages via `products-data.js`

## 🎨 Styling Architecture

### Common Styles (css/common.css)
- CSS Custom Properties (variables)
- Navigation styles
- Footer styles
- Base reset

### Page-Specific Styles
- **products.css** → Filter panel, product grid, cards
- **product-detail.css** → Image gallery, specs, related products

### Benefits:
- No style duplication
- Easy to update colors/spacing globally
- Component isolation

## ⚙️ JavaScript Architecture

### Shared Layer (js/products-data.js)
- Product array (8 products)
- Utility functions:
  - `getProductById(id)` - Find product by ID
  - `getUrlParam(param)` - Read URL query parameters

### Feature Layers

**Products Page (js/products.js)**
- `renderProducts(list)` - Display products grid
- `getFilteredProducts()` - Apply filters & sort
- `filterProducts()` - Update display on filter change
- `sortProducts(val)` - Sort by price/name
- `setTagFilter(tag)` - Category quick filters
- `clearFilters()` - Reset all filters

**Product Detail (js/product-detail.js)**
- `openProduct(id)` - Load product by ID
- `selectPill(el)` - Select size/finish options
- Automatic related products loading

## 📊 File Dependencies

```
index-new.html
├── Inline styles (no external CSS)
└── No JavaScript dependencies

about.html
├── Inline styles
└── No JavaScript

products.html
├── css/products.css
├── css/common.css (imported in products.css)
├── js/products-data.js
└── js/products.js
    └── depends on: products-data.js

product-detail.html
├── css/product-detail.css
├── css/common.css (imported)
├── js/products-data.js
└── js/product-detail.js
    └── depends on: products-data.js
```

## ✨ Key Features

### ✅ Implemented
- [x] Separated HTML pages (4 files)
- [x] Modular CSS (3 files)
- [x] Shared JavaScript data
- [x] Product filtering & sorting
- [x] Product images
- [x] Responsive design
- [x] Navigation between pages
- [x] URL-based product navigation (`?id=productId`)

### 🔄 URL Patterns
- `index-new.html` - Home page
- `about.html` - About page
- `products.html` - All products
- `product-detail.html?id=bloom` - Single product by ID

## 🚀 How to Start

1. Start with `index-new.html` (Home page)
2. Click "Explore Shop" → `products.html`
3. Click any product → `product-detail.html?id={productId}`
4. Use filters, search, and sort on products page
5. Navigate using header menu

## 📝 To Add New Product

Edit `js/products-data.js` and add to `products` array:
```javascript
{
  id: 'new-id',
  name: 'New Product',
  type: 'Art Print',
  category: 'print',
  style: 'modern',
  price: 1200,
  badge: 'New',
  desc: 'Description',
  image: 'url-to-image'
}
```

Product automatically appears in all pages! ✨
