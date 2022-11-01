const express = require('express');
const router = express.Router();
const {
  getAllTour,
  newTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../controllers/toursController');

router.param('id', checkID);

router.route('/').get(getAllTour).post(checkBody, newTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
