const express = require('express');

const router = express.Router();

const LocationController = require('../controllers/locations.js');

const ensureAuthenticated = require('../config/auth.js').ensureAuthenticated;

router.get('/create', LocationController.createGet);
router.post('/create', LocationController.validate("createLocation") , LocationController.createPost);

router.get('/search', LocationController.searchGet);
router.post('/search', LocationController.searchPost);

router.get('/searchgeo', LocationController.searchGeoGet); //TODO: CHANGE IF NECESSARY
router.post('/searchgeo', LocationController.searchGeoPost);

router.get('/searchvacgeo', LocationController.searchVacByLocationGeo); //DONETODO: change to get

router.get('/dashboard', LocationController.showDashboard);

router.get('/:locationid/edit', LocationController.editGet);
router.post('/:locationid/edit', LocationController.editPost);

router.get('/:locationid/vaccinations', LocationController.addVaccinationGet);
router.post('/:locationid/vaccinations', LocationController.addVaccinationPost);

router.get('/:id', LocationController.locationGet);


exports.router = router;