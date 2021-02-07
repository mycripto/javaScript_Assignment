// https://github.com/mycripto/javaScript_Assignment

// kilometerToMeter
function kilometerToMeter(km) {
  if (Number.isInteger(km)) {
    return km * 1000; // 1km = 1000m.
  } else {
    return "Please enter a positive number"; //error msg
  }
}
// console.log(kilometerToMeter(5));

// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
  //price {watch = 50, phone: 100, laptop: 500};
  let watchBudget, phoneBudget, laptoBudget, arrBudget, total;
  arrBudget = [];

  //1. watch budget;
  if (Number.isInteger(watch) && watch > 0) {
    watchBudget = watch * 50;
    arrBudget.push(watchBudget);
  } else if (watch === 0) {
    watchBudget = 0;
    arrBudget.push(watchBudget);
  } else {
    return "Please input valid quantity for watch";
  }

  //2. phone budget;
  if (Number.isInteger(phone) && phone > 0) {
    phoneBudget = phone * 100;
    arrBudget.push(phoneBudget);
  } else if (phone === 0) {
    phoneBudget = 0;
    arrBudget.push(phoneBudget);
  } else {
    return "Please input valid quantity for phone";
  }
  //3. laptop budget;
  if (Number.isInteger(laptop) && laptop > 0) {
    laptopBudget = laptop * 500;
    arrBudget.push(laptopBudget);
  } else if (laptop === 0) {
    laptopBudget = 0;
    arrBudget.push(laptopBudget);
  } else {
    return "Please input valid quantity for laptop";
  }
  //4. sum of all budget
  total = 0;
  for (let i = 0; i < arrBudget.length; i++) {
    total += arrBudget[i];
  }
  return total;
}
// console.log(budgetCalculator(0, 4, 5));

//hotelCost
function hotelCost(daysToStay) {
  let rateFirst, rateSecond, rateThird, maxForTwenty;
  rateFirst = 100;
  rateSecond = 80;
  rateThird = 50;

  if (Number.isInteger(daysToStay) && daysToStay >= 0) {
    if (daysToStay <= 10) {
      return daysToStay * rateFirst;
    }
    if (daysToStay <= 20) {
      return hotelCost(10) + (daysToStay - 10) * rateSecond;
    } else {
      // return (10 * rateFirst) + (10 * rateSecond) + (daysToStay - 20) * rateThird;
      return hotelCost(20) + (daysToStay - 20) * rateThird;
    }
  } else {
    return "invalid number";
  }
}
// console.log(hotelCost(25));

//megaFriend
function megaFriend(friends) {
  let nameSize = 0;
  let longestName;
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > nameSize) {
      nameSize = friends[i].length;
      longestName = friends[i];
    }
  }
  //   console.log(longestName);
  return longestName;
}
// megaFriend(["111", "1114", "3353", "4444"]);

console.log(` 
kilometerToMeter: ${kilometerToMeter(2)},
budgetCalculator: ${budgetCalculator(4, 5, 6)},
hotelCost: ${hotelCost(45)},
megaFriend: ${megaFriend(["Suman", "raja", "salam uddin"])};`);