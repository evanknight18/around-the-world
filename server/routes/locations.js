const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationsController');
const auth = require('../middleware/auth'); // Assuming you have an auth middleware

// Routes related to locations
router.get('/', auth, locationController.getAllLocations);
router.get('/:id', auth, locationController.getLocation);
router.post('/', auth, locationController.addLocation);
router.put('/:id', auth, locationController.updateLocation);
router.delete('/:id', auth, locationController.deleteLocation);

module.exports = router;