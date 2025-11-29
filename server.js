const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup EJS Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serves CSS, JS, Images

// --- ROUTES ---

// 1. Home Page
app.get('/', (req, res) => {
    res.render('index', { 
        pageTitle: 'Home',
        path: '/' 
    });
});

// 2. Doctors & Booking Page
app.get('/doctors', (req, res) => {
    const doctorsList = [
        { name: "Dr. Sarah Chen", role: "Cardiologist", rating: 4.9, image: "bg-emerald-500" },
        { name: "Dr. Michael Rodriguez", role: "Internal Medicine", rating: 4.8, image: "bg-blue-500" },
        { name: "Dr. Priya Patel", role: "Pediatrician", rating: 5.0, image: "bg-purple-500" },
        { name: "Dr. James Wilson", role: "Neurologist", rating: 4.7, image: "bg-indigo-500" },
        { name: "Dr. Anita Singh", role: "Dermatologist", rating: 4.9, image: "bg-pink-500" },
        { name: "Dr. Robert Chang", role: "Orthopedic", rating: 4.8, image: "bg-orange-500" }
    ];
    
    res.render('doctors', { 
        pageTitle: 'Find a Doctor',
        doctors: doctorsList,
        path: '/doctors'
    });
});


// 4. Pharmacy Page (E-Commerce)
// 4. Pharmacy Page (Updated with working images)
app.get('/pharmacy', (req, res) => {
    const products = [
        { 
            id: 1, 
            name: "Immunity Booster Pack", 
            price: "$29.99", 
            category: "Wellness", 
image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80"
        },
        { 
            id: 2, 
            name: "First Aid Kit Pro", 
            price: "$45.50", 
            category: "Essentials", 
            image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=500&q=80" 
        },
        { 
            id: 3, 
            name: "Digital Thermometer", 
            price: "$12.99", 
            category: "Devices", 
image: "/images/thermometer.png"        
},

        { 
            id: 4, 
            name: "Daily Multivitamins", 
            price: "$18.00", 
            category: "Wellness", 
            image: "/images/multi.png" 
        },
        { 
            id: 5, 
            name: "BP Monitor", 
            price: "$89.99", 
            category: "Devices", 
            image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=500&q=80" 
        },
        { 
            id: 6, 
            name: "Organic Protein", 
            price: "$34.50", 
            category: "Nutrition", 
            image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=500&q=80" 
        }
    ];

    res.render('pharmacy', { 
        pageTitle: 'Crowbar Pharmacy',
        products: products,
        path: '/pharmacy' 
    });
});

// 5. Retreats & Experiences (Updated with working images)
app.get('/retreats', (req, res) => {
    const retreats = [
        { 
            title: "Coorg Wellness Village", 
            location: "Coorg, Karnataka", 
            price: "₹25,000", 
            host: "Dr. Rajesh",
    image: "/images/coorg.png"
        },
        { 
            title: "Post-Op Recovery Home", 
            location: "Mysuru, Karnataka", 
            price: "₹45,000", 
            host: "Nurse Sarah",
            image: "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?auto=format&fit=crop&w=800&q=80" 
        },
        { 
            title: "Gokarna Yoga Retreat", 
            location: "Gokarna Beach", 
            price: "₹18,000", 
            host: "Yogi Anand",
            image: "https://images.unsplash.com/photo-1599447421405-0c323d27bc5d?auto=format&fit=crop&w=800&q=80" 
        }
    ];

    res.render('retreats', { 
        pageTitle: 'Wellness Retreats',
        retreats: retreats,
        path: '/retreats' 
    });
});


// --- API ENDPOINTS ---

// API for the animated counters on the Home Page
app.get('/api/health-stats', (req, res) => {
  const stats = {
    activeDoctors: 120,
    patientsHelped: 5000,
    appointmentsToday: 45,
    satisfactionRate: 98,
    telemedSessions: 320,
    prescriptionsFilled: 890
  };
  
  res.json(stats);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Crowbar Health ecosystem running on http://localhost:${PORT}`);
});