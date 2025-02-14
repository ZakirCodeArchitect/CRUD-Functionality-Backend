const express = require('express');
const router = express.Router();
const profile = require('../controllers/zakirController');

router.get("/signup", profile.render_profile);
// app.get('/signup', (req, res) => {
//     res.render('profile'); // Render about.ejs
// });
router.post("/view-profile", profile.get_profile);

// for Signup Form submission: 
router.post("/profile", profile.create_profile);


module.exports = router;