// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    country: 'India',
    artwork: 'Eternal Grace',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    text: 'The calligraphy work transformed my living room. Every detail is exquisite and the craftsmanship is evident in every stroke.'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    artwork: 'Serenity Script',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=250&fit=crop',
    text: 'I commissioned a custom piece for my wedding and it was absolutely stunning. Highly recommend for any special occasion.'
  },
  {
    id: 3,
    name: 'Marco Rossetti',
    country: 'Italy',
    artwork: 'Renaissance Flow',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=250&fit=crop',
    text: 'Bellissimo! The artistry and attention to detail is remarkable. A true masterpiece that brings elegance to my studio.'
  },
  {
    id: 4,
    name: 'Aisha Patel',
    country: 'UAE',
    artwork: 'Modern Elegance',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop',
    text: 'Perfect for corporate gifting. My clients were impressed with the premium quality and unique artistic touch.'
  },
  {
    id: 5,
    name: 'James Chen',
    country: 'Singapore',
    artwork: 'Timeless Beauty',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=250&fit=crop',
    text: 'Exceptional work. The precision and creativity combined make this a worthwhile investment for art collectors.'
  },
  {
    id: 6,
    name: 'Emma Johnson',
    country: 'Canada',
    artwork: 'Graceful Essence',
    image: 'https://images.unsplash.com/photo-1517411901212-7d7d2e5d87f2?w=400&h=250&fit=crop',
    text: 'I frame and gift these pieces to close friends. The quality is consistently outstanding and the designs are timeless.'
  }
];

// Collaborations data
const collaborations = [
  {
    id: 1,
    artist: 'Maya Verma',
    type: 'Video Collaboration',
    description: 'Live calligraphy painting performance synchronized with Indian classical music.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    artist: 'Alex Rivera',
    type: 'Artistic Series',
    description: 'A 5-part series exploring modern calligraphy with contemporary digital art blends.',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    artist: 'Lucia Santos',
    type: 'Workshop Series',
    description: 'Behind-the-scenes tutorial series teaching calligraphy techniques and creative processes.',
    videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
  }
];

// Sponsors/Brand Partners data
const sponsors = [
  {
    id: 1,
    name: 'Luxe Pens Co',
    value: '$750',
    type: 'Premium Partner',
    description: 'Exclusive calligraphy pen collection with hand-crafted nibs and ergonomic design.',
    logo: 'https://images.unsplash.com/photo-1518611505868-48510c2e022f?w=300&h=120&fit=crop'
  },
  {
    id: 2,
    name: 'Artisan Paper Studio',
    value: '$600',
    type: 'Premium Partner',
    description: 'Specialty handmade paper from around the world, perfect for professional calligraphy work.',
    logo: 'https://images.unsplash.com/photo-1545958636-12515bee1513?w=300&h=120&fit=crop'
  },
  {
    id: 3,
    name: 'Golden Ink Manufacturers',
    value: '$850',
    type: 'Premium Partner',
    description: 'Traditional and contemporary inks formulated specifically for fine calligraphy applications.',
    logo: 'https://images.unsplash.com/photo-1565959375169-19384ca6188d?w=300&h=120&fit=crop'
  },
  {
    id: 4,
    name: 'Heritage Brush Works',
    value: '$550',
    type: 'Premium Partner',
    description: 'Handcrafted brushes using traditional methods with premium natural hair materials.',
    logo: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=120&fit=crop'
  }
];

// Reels data
const reels = [
  {
    id: 1,
    title: 'Live Demo',
    description: 'Watch the process of creating beautiful calligraphy from start to finish.',
    views: '12.5K',
    likes: '892',
    videoUrl: 'https://videos.unsplash.com/video-1574940871-17c3ea4f41e2?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    title: 'Custom Piece',
    description: 'Creating a personalized calligraphy piece for a wedding invitation.',
    views: '8.3K',
    likes: '625',
    videoUrl: 'https://videos.unsplash.com/video-1566753543-4cd6d1b0f6f5?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    title: 'Brush Techniques',
    description: 'Quick tutorial on essential brush strokes and pen techniques.',
    views: '15.2K',
    likes: '1.1K',
    videoUrl: 'https://videos.unsplash.com/video-1597899592618-bbf4aca63c94?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    title: 'Studio Tour',
    description: 'Behind-the-scenes look at my creative studio and workspace.',
    views: '6.8K',
    likes: '478',
    videoUrl: 'https://videos.unsplash.com/video-1551288049-bebda4e87f71?w=400&h=500&fit=crop'
  },
  {
    id: 5,
    title: 'Color Blending',
    description: 'Exploring beautiful color combinations with modern calligraphy.',
    views: '10.1K',
    likes: '743',
    videoUrl: 'https://videos.unsplash.com/video-1535404599348-6cf0d82c86c2?w=400&h=500&fit=crop'
  },
  {
    id: 6,
    title: 'Framing Ideas',
    description: 'Creative ways to frame and display your calligraphy artwork.',
    views: '7.5K',
    likes: '556',
    videoUrl: 'https://videos.unsplash.com/video-1578749556568-bc2c40e68b61?w=400&h=500&fit=crop'
  }
];
