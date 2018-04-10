module.exports = {
  difference: function(x, y){
    return x - y;
  },
  isEqual: function(x, y){
    return (x === y);
  },
  isEven: function(x){
    if (x % 2 === 0) {
      return true;
    } else {
      return false;
    }
  },
  isDivisible: function(x, y){
    if (x % y === 0) {
      return true;
    } else {
      return false;
    }
  },
  discountPercentage: function(amount, discount){
    if (discount >= 0 && discount <= 100) {
      return (amount * (discount/100));
    } else {
      return "please enter a number between 0 and 100";
    }
  },
  isVowel: function(letter){
    if (letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u') {
          return true;
    } else {
      return false;
    }
  },
  celsiusToFahrenheit: function(celsius){
    return celsius * 1.8 + 32;
  },
  biggestOfThree: function(x, y, z){
    var array = [x, y, z];
    var biggestNum = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > biggestNum) {
        biggestNum = array[i];
      }
    }
    return biggestNum;
  },
  // Bonus
  federalIncomeTaxCalculator: function(income) {
    var taxSum = 0;

    while (income > 0) {
      var difference = 0;

      if (income > 418400) {
        difference = income - 418400;
        taxSum = taxSum + (difference * 0.396);
        income -= difference;
      } else if (income > 416700) {
        difference = income - 416700;
        taxSum = taxSum + (difference * 0.35);
        income -= difference;
      } else if (income > 191650) {
        difference = income - 191650;
        taxSum = taxSum + (difference * 0.33);
        income -= difference;
      } else if (income > 91900) {
        difference = income - 91900;
        taxSum = taxSum + (difference * 0.28);
        income -= difference;
      } else if (income > 37950) {
        difference = income - 37950;
        taxSum = taxSum + (difference * 0.25);
        income -= difference;
      } else if (income > 9325) {
        difference = income - 9325;
        taxSum = taxSum + (difference * 0.15);
        income -= difference;
      } else {
        taxSum = taxSum + (income * 0.10);
        income -= 9325;
      }
    }
    return taxSum;
  }
}
