function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Rubah code ini dengan array hasil filter berdasarkan availablity

  // Menggunakan foreach
  cars.forEach((car) => {
    (car.available === true) ? result.push(car) : null;
  });

  // Menggunakan for
  // for (let i = 0; i < cars.length - 1; i++) {
  //   // Melakukan pengecekan apakah mobil available bernilai true
  //   if (cars[i].available === true) {
  //     // jika mobil available, maka memasukkan ke dalam array result
  //     result.push(cars[i]);
  //   }
  // }

  console.log(result);
  return result;
}
