const express = require('express');
const router = express.Router();
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/carControllers');

const {
  middleware3,
  middleware4,
  middleware5,
  middlewareNoNext,
} = require('../middleware/customMiddlewares');

// Middleware is executed in the order it is defined

// Applied to all routes in carRouter = router-level middleware
router.use(middleware3);

// GET /cars
router.get('/', getAllCars);

// Applied to all routers defined below this
router.use(middleware4);

// POST /cars
router.post('/', createCar);

// GET /cars/:carId
// middleware5 is only applied to the GET /cars/:carId route
// = route-level middleware
router.get('/:carId',middleware5, getCarById);

// PUT /cars/:carId
router.put('/:carId', updateCar);

// Stops further processing after the PUT route because it does not call next()
// (important to always call next())
router.use(middlewareNoNext);

// DELETE /cars/:carId
router.delete('/:carId', deleteCar);

module.exports = router;
