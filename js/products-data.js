// Product data shared across pages
const products = [
  {
    id: 'bloom',
    name: 'Bloom in Silence',
    type: 'Art Print',
    category: 'print',
    style: 'modern',
    price: 1200,
    badge: 'Bestseller',
    desc: 'This artwork says a lot about who I am on a deeper level. Blue has always been my natural choice, a color I find myself drawn to without thinking. It brings a sense of calm, depth, and quiet comfort, much like the emotions I try to express through my work. Every stroke in this piece feels personal, carrying a small part of my thoughts, feelings, and journey as an artist.',
    image: 'images/products/bloom_silence.png'
  },
  {
    id: 'grace',
    name: 'Grace & Flow',
    type: 'Commission',
    category: 'commission',
    style: 'copperplate',
    price: 3500,
    badge: '',
    desc: 'From a young age, writing always held a special place in my heart. I was naturally drawn to the beauty of words and the joy of putting pen to paper. Over time, that love quietly grew into a passion, and today I feel grateful to have followed it through my art, turning handwriting into something meaningful and expressive.',
    image: 'images/products/grace_flow.png'
  },
  {
    id: 'dawn',
    name: 'Dawn Letters',
    type: 'Brush Lettering',
    category: 'print',
    style: 'brush',
    price: 950,
    badge: 'New',
    desc: 'This artwork carries a special feeling for me. It is a poem written by someone from the USA, a place I had always dreamed of reaching in some way. I never imagined that through art and calligraphy, my work would find its own journey. Today, having shipped over 50 artworks across the USA feels deeply meaningful. It reminds me that sometimes passions quietly take us to places we once only hoped to reach.',
    image: 'images/products/dawn_letters.png'
  },
  {
    id: 'soul',
    name: 'Soul Script',
    type: 'Wedding Stationery',
    category: 'stationery',
    style: 'copperplate',
    price: 4800,
    badge: '',
    desc: 'Elegant copperplate for wedding invitations, menus, and place cards. Minimum order of 50 applies.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop'
  },
  {
    id: 'whisper',
    name: 'Whisper in Ink',
    type: 'Framed Art',
    category: 'framed',
    style: 'modern',
    price: 2200,
    badge: '',
    desc: 'A whisper of words in contemporary script — framed in soft white and ready to hang. A quiet statement piece.',
    image: 'https://images.unsplash.com/photo-1607083206968-13f3920de46f?w=400&h=400&fit=crop'
  },
  {
    id: 'ritual',
    name: 'Daily Ritual',
    type: 'Quote Print',
    category: 'print',
    style: 'brush',
    price: 800,
    badge: '',
    desc: 'A brush-lettered reminder for your daily practice. Ships unframed on premium matte card stock.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324817638c3?w=400&h=400&fit=crop'
  },
  {
    id: 'verse',
    name: 'Velvet Verse',
    type: 'Framed Art',
    category: 'framed',
    style: 'modern',
    price: 2800,
    badge: 'New',
    desc: 'Rich strokes and velvety ink — an original artwork in a rich lavender palette, ready to frame.',
    image: 'https://images.unsplash.com/photo-1578926314433-c6e7ad7eb744?w=400&h=400&fit=crop'
  },
  {
    id: 'ember',
    name: 'Ember & Quill',
    type: 'Commission',
    category: 'commission',
    style: 'copperplate',
    price: 5200,
    badge: '',
    desc: 'A deeply personal copperplate commission — a poem, a letter, a vow. Tell me your story.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop'
  },
];

const bgColors = [
  'linear-gradient(135deg,#e8e3f8,#d5ccf0)',
  'linear-gradient(135deg,#f0ebfe,#ddd5f5)',
  'linear-gradient(135deg,#e3ddf5,#ccc3e8)',
  'linear-gradient(135deg,#ede8fc,#cfc6ee)',
  'linear-gradient(135deg,#f2eefe,#ddd6f5)',
  'linear-gradient(135deg,#e5e0f5,#c8bfea)',
  'linear-gradient(135deg,#eae5fc,#d4ccf0)',
  'linear-gradient(135deg,#f5f0fe,#e2dafc)'
];

// Utility: Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Utility: Get URL parameter
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
