let value = (nilaiAwal, nilaiAkhir, dataArray = []) => {
    if (nilaiAkhir < nilaiAwal) {
      return "Nilai akhir harus lebih besar dari nilai awal";
    } else if (dataArray.length < 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5";
    } else {
      let result = [];
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
          result.push(dataArray[i]);
        }
      }
      if (!result.length) {
        return "Nilai tidak ditemukan";
      } else {
        return result;
      }
    }
  };
  
  console.log(value(5, 20, [2, 25, 4, 14, 17, 19, 8]));
  console.log(value(15, 3 , [2, 25, 4, 14, 17, 30, 8]));
  console.log(value(5, 17 , [2, 25, 4]));
  console.log(value(5, 17 , [2, 25, 4, 1, 30, 18]));  
  