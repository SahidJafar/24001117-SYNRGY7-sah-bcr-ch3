function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Rubah code ini dengan array hasil sorting secara descending

  // Menggunakan Sort
  // result.sort((firstItem, secondItem) => secondItem.year - firstItem.year);

  // Menggunakan bubble sort
  for(let i = 0; i < result.length - 1; i++){
    for(let j = 0; j < result.length - 1 - i; j++){
      // Mengecek kondisi tahun sekarang lebih kecil dari tahun setelahnya
      if(result[j].year < result[j+1].year){
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
   console.log(result);
  return result;
}
