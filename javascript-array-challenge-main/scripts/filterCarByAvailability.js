// filterCarByAvailability.js

function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  for (const car of cars) {
    if (car.available === true) {
      result.push(car);
    }
  }

  // Tampilkan hasil filter
  console.log(result);

  // Kembalikan hasil filter
  return result;
}
