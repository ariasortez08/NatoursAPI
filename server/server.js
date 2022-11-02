/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import app from '../app.js';
import db from '../config/db.js';
try {
  await db.authenticate();
  db.sync(); // CREA LA TABLA SI NO EXISTE
  console.log('CONEXION CORRECTA');
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
