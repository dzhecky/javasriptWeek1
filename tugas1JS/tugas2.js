//check grade

let lesson = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
    if (mtk, bahasaIndonesia, bahasaInggris, ipa != "") {
      let total = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
      if (total >= 90 && total <= 100) {
        return `Rata - rata = ${total} \ngrade = A`;
      } else if (total >= 80 && total <= 89) {
        return `Rata - rata = ${total} \ngrade = B`;
      } else if (total >= 70 && total <= 79) {
        return `Rata - rata = ${total} \ngrade = C`;
      } else if (total >= 60 && total <= 69) {
        return `Rata - rata = ${total} \ngrade = D`;
      } else if (total >= 0 && total <= 59) {
        return `Rata - rata = ${total} \ngrade = E`;
      } else {
        return 'nilai harus diisi!'
      }
    }
  };
  
  console.log(lesson(90, 95, 89, 93));
  console.log(lesson(94, 85, 91, 80));
  console.log(lesson(79, 80, 60, 75));
  console.log(lesson(68, 62, 70, 60));
  console.log(lesson(55, 49, 65, 50));
  console.log(lesson());