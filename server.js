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
app.get('/pharmacy', (req, res) => {
    const products = [
        { id: 1, name: "Immunity Booster Pack", price: "$29.99", category: "Wellness", color: "bg-orange-100" },
        { id: 2, name: "Advanced First Aid Kit", price: "$45.50", category: "Essentials", color: "bg-red-100" },
        { id: 3, name: "Digital Thermometer", price: "$12.99", category: "Devices", color: "bg-blue-100" },
        { id: 4, name: "Daily Multivitamins", price: "$18.00", category: "Wellness", color: "bg-green-100" },
        { id: 5, name: "BP Monitor Pro", price: "$89.99", category: "Devices", color: "bg-slate-100" },
        { id: 6, name: "Organic Protein", price: "$34.50", category: "Nutrition", color: "bg-yellow-100" }
    ];

    res.render('pharmacy', { 
        pageTitle: 'Crowbar Pharmacy',
        products: products,
        path: '/pharmacy' 
    });
});

// 5. Retreats & Experiences (The Host Ecosystem)
app.get('/retreats', (req, res) => {
    const retreats = [
        { title: "Coorg Wellness Village", location: "Coorg, Karnataka", price: "₹25,000", image: "bg-emerald-800" },
        { title: "Post-Op Recovery Home", location: "Mysuru, Karnataka", price: "₹45,000", image: "bg-teal-800" },
        { title: "Gokarna Yoga Retreat", location: "Gokarna Beach", price: "₹18,000", image: "bg-cyan-800" }
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