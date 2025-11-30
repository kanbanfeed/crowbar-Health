const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- ROUTES ---

// 1. Home Page
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home' });
});

// 2. Login Route (Redirects to Crowbar SSO)
app.get('/login', (req, res) => {
    // 1. Calculate current domain (works on localhost & production)
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.get('host');
    const baseUrl = `${protocol}://${host}`;
    
    // 2. Define where Crowbar should send the user back to
    const returnUrl = `${baseUrl}/auth/callback`;
    const encodedUrl = encodeURIComponent(returnUrl);
    
    // 3. Redirect to Crowbar Login
    res.redirect(`https://www.crowbarltd.com/login?redirect_to=${encodedUrl}`);
});

// 3. Callback Route (Handles the return from Crowbar)
app.get('/auth/callback', (req, res) => {
    // Renders a special page to process the token
    res.render('callback', { pageTitle: 'Verifying Identity...' });
});

// 4. Other Pages
app.get('/doctors', (req, res) => {
    const doctorsList = [
        { name: "Dr. Sarah Chen", role: "Cardiologist", rating: 4.9, image: "bg-emerald-500" },
        { name: "Dr. Michael Rodriguez", role: "Internal Medicine", rating: 4.8, image: "bg-blue-500" },
        { name: "Dr. Priya Patel", role: "Pediatrician", rating: 5.0, image: "bg-purple-500" },
        { name: "Dr. James Wilson", role: "Neurologist", rating: 4.7, image: "bg-indigo-500" },
        { name: "Dr. Anita Singh", role: "Dermatologist", rating: 4.9, image: "bg-pink-500" },
        { name: "Dr. Robert Chang", role: "Orthopedic", rating: 4.8, image: "bg-orange-500" }
    ];
    res.render('doctors', { pageTitle: 'Find a Doctor', doctors: doctorsList });
});

app.get('/pharmacy', (req, res) => {
    const products = [
        { id: 1, name: "Immunity Booster Pack", price: "$29.99", category: "Wellness", image: "https://images.unsplash.com/photo-1615485500704-8e99099928b3?auto=format&fit=crop&w=500&q=80" },
        { id: 2, name: "First Aid Kit Pro", price: "$45.50", category: "Essentials", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=500&q=80" },
        { id: 3, name: "Digital Thermometer", price: "$12.99", category: "Devices", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=500&q=80" },
        { id: 4, name: "Daily Multivitamins", price: "$18.00", category: "Wellness", image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=500&q=80" },
        { id: 5, name: "BP Monitor", price: "$89.99", category: "Devices", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=500&q=80" },
        { id: 6, name: "Organic Protein", price: "$34.50", category: "Nutrition", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=500&q=80" }
    ];
    res.render('pharmacy', { pageTitle: 'Crowbar Pharmacy', products: products });
});

app.get('/retreats', (req, res) => {
    const retreats = [
        { title: "Coorg Wellness Village", location: "Coorg, Karnataka", price: "₹25,000", host: "Dr. Rajesh", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80" },
        { title: "Post-Op Recovery Home", location: "Mysuru, Karnataka", price: "₹45,000", host: "Nurse Sarah", image: "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?auto=format&fit=crop&w=800&q=80" },
        { title: "Gokarna Yoga Retreat", location: "Gokarna Beach", price: "₹18,000", host: "Yogi Anand", image: "https://images.unsplash.com/photo-1599447421405-0c323d27bc5d?auto=format&fit=crop&w=800&q=80" }
    ];
    res.render('retreats', { pageTitle: 'Wellness Retreats', retreats: retreats });
});

app.get('/telemed', (req, res) => {
    res.render('telemed', { pageTitle: 'Virtual Waiting Room' });
});

// API
app.get('/api/health-stats', (req, res) => {
  res.json({
    activeDoctors: 120,
    patientsHelped: 5000,
    appointmentsToday: 45,
    satisfactionRate: 98,
    telemedSessions: 320,
    prescriptionsFilled: 890
  });
});

app.listen(PORT, () => {
  console.log(`Crowbar Health ecosystem running on http://localhost:${PORT}`);
});