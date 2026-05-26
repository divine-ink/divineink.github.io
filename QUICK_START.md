# Quick Start Guide

## 🚀 Getting Started

### Option 1: Open Directly in Browser
Simply open `index.html` in your web browser to start exploring!

```bash
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### Option 2: Use a Local Server (Recommended)
For best experience with all features:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
# Click on index-new.html
```

## 📄 Main Files

| File | Purpose | Start Here? |
|------|---------|------------|
| `index.html` | Home page | ✅ YES |
| `about.html` | About/Team page | Navigation link |
| `products.html` | Shop/Products page | "Explore Shop" link |
| `product-detail.html` | Product details | Click any product |

## 🗂️ Project Files Summary

```
Root Level
├── index.html (71 KB)     ← START HERE
├── about.html (21 KB)
├── products.html (6 KB)
├── product-detail.html (6 KB)
│
├── css/
│   ├── common.css (4 KB)
│   ├── products.css (8 KB)
│   └── product-detail.css (10 KB)
│
└── js/
    ├── products-data.js (3 KB)
    ├── products.js (2 KB)
    └── product-detail.js (2 KB)
```

## 🎯 Key Features

### Home Page (index-new.html)
- Beautiful hero section
- Featured works showcase
- "Explore Shop" and "About Me" buttons
- Shop highlights section

### Products Page (products.html)
- Filter by category (4 options)
- Filter by style (3 options)
- Filter by price range
- Search functionality
- Sort by price or name
- Quick tag filters
- Beautiful product grid with images

### Product Detail (product-detail.html)
- Large product image
- Size options (A5, A4, A3, Custom)
- Finish options (Matte, Gloss, Unframed)
- Full specifications
- Related products
- Add to cart / Wishlist buttons

### About Page (about.html)
- Artist bio
- Statistics (8+ years experience, 340+ commissions)
- Skills showcase (4 specializations)
- Commission call-to-action

## 🎨 Customization

### Change Colors
Edit `css/common.css` - Look for `:root` section:
```css
:root {
  --lavender: #b8a9e8;
  --lavender-deep: #7c6bb5;
  /* ... etc */
}
```

### Update Product Data
Edit `js/products-data.js` - Add or modify products:
```javascript
const products = [
  {
    id: 'product-id',
    name: 'Product Name',
    // ... other fields
  }
];
```

### Change Text/Content
All text is in the HTML files - simply edit and save!

## 🔗 Navigation

```
Home Page
  ├─→ "Explore Shop" → Products Page
  ├─→ "About Me" → About Page
  └─→ Click any product card → Product Detail

Products Page
  ├─→ "Home" (nav) → Home Page
  ├─→ "About" (nav) → About Page
  ├─→ Click any product → Product Detail

Product Detail
  ├─→ "← Back to Shop" → Products Page
  ├─→ "Home" (nav) → Home Page
  ├─→ "Shop" (nav) → Products Page

About Page
  ├─→ "Browse My Shop" → Products Page
  ├─→ "Home" (nav) → Home Page
  └─→ "Shop" (nav) → Products Page
```

## ✨ Features Implemented

- ✅ 4 separate HTML pages
- ✅ Product filtering & sorting
- ✅ Product search
- ✅ Responsive design (mobile-friendly)
- ✅ Image gallery on product detail
- ✅ Professional styling with lavender theme
- ✅ Modular CSS files
- ✅ Vanilla JavaScript (no frameworks)
- ✅ Real product images
- ✅ Navigation between pages

## 🐛 Troubleshooting

### Images not loading?
- Make sure you're using a web server (Python, Live Server, etc.)
- Check internet connection (images are from Unsplash)

### Links not working?
- Make sure all HTML files are in the same directory
- Check that file names match exactly

### Styles not applying?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Make sure CSS files are in the `css/` folder
- Check browser console for errors

## 📱 Responsive Design

All pages are mobile-friendly! The layout adapts to:
- 📱 Mobile (< 720px)
- 📱 Tablet (720px - 820px)
- 🖥️ Desktop (> 820px)

Try resizing your browser to see!

## 📚 Documentation Files

- `COMPONENT_STRUCTURE.md` - Detailed structure guide
- `PROJECT_BREAKDOWN.md` - Visual breakdown with diagrams
- `QUICK_START.md` - This file!

## 🎓 Learning the Code

1. Start with `index-new.html` - See the HTML structure
2. Check `css/common.css` - Understand shared styles
3. Look at `js/products-data.js` - See how data is organized
4. Follow `js/products.js` - Understand filtering logic
5. Study `js/product-detail.js` - See how product details load

## 📞 Need Help?

- Check the documentation files
- Review the inline comments in the code
- Look at the browser console for error messages (F12)

## 🎉 You're Ready!

Your Divine Ink Calligraphy portfolio is ready to go!

Start here: **`index-new.html`**

Enjoy! ✨
