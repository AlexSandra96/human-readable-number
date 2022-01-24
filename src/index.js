module.exports = function toReadable (number) {
    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
   
    if (number < 10) {
       return arr1[number];
    } else if (number >= 10 && number < 20) {
       return arr2[Math.floor(number - 10)];
    }  else if (number < 100){
       if (number % 10 === 0) {
          return arr3[Math.floor(number / 10)];
       } else {
          return `${arr3[Math.floor(number / 10)]} ${arr1[number % 10]}`
       }

    } else if (number >= 100) {
      if (number % 100 === 0) {
         return `${arr1[Math.floor(number / 100)]} ${hundred}`
      } else if (number % 100 < 10 && number % 100 !== 0 && number > 100) {
         return `${arr1[Math.floor(number / 100)]} ${hundred} ${arr1[Math.floor(number % 100)]}`
      } else if (number % 100 < 20 && number > 100) {
         return `${arr1[Math.floor(number / 100)]} ${hundred} ${arr2[Math.floor((number % 100) % 10)]}`
      } else if (number % 10 === 0 && number >= 100) {
         return `${arr1[Math.floor(number / 100)]} ${hundred} ${arr3[Math.floor((number / 10) % 10)]}`
      } else {
         return `${arr1[Math.floor(number / 100)]} ${hundred} ${arr3[Math.floor((number / 10) % 10)]} ${arr1[Math.floor(number % 10)]}`
      }
    }
}

 