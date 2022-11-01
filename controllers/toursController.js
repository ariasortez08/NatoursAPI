const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const getAllTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const checkID = (req, res, next, val) => {
  const tour = tours.find((el) => el.id == val);

  if (!tour) {
    return res.status(404).json({
      status: 'failed',
      message: 'Tour does not exists',
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: 'failed',
      message: 'The name and price are required',
    });
  }

  next();
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    message: 'Here is the tour',
    data: {
      tour,
    },
  });
};

const newTour = (req, res) => {
  // Retorna un Objeto de JAVASCRIPT
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    message: 'Here is the tour',
    data: {
      tour,
    },
  });
};

const deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    message: 'Here is the tour',
    data: {
      tour,
    },
  });
};

module.exports = {
  getAllTour,
  newTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
};
