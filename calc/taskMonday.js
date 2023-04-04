// Сделайте функцию, которая принимает параметром число от 1 до 7,
//  а возвращает день недели на русском языке.

function dayOfWeek(n) {
  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  return days[n - 1];
}

// Напишите функцию которая умножает
// первый элемент массива на второй,
//   а третий элемент на четвертый.
//    Результаты сложите, присвойте переменной result.

function sumMultEl(num) {
  return num[0] * num[1] + num[2] * num[3];
}

// Дана строка. Сделайте заглавным первый символ каждого слова
//  этой строки. Для этого сделайте вспомогательную функцию ucfirst,
//   которая будет получать строку, делать первый символ этой строки
// заглавным и возвращать обратно строку с заглавной первой буквой.
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  return (message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
}

function isAdult(age) {
  const passed = age >= 18;

  return passed;
}

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  const isMatch = password === SAVED_PASSWORD;

  return isMatch;
}

function checkStorage(available, ordered) {
  let message;
  if (ordered < available) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }

  return message;
}

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  }
  return `You ordered ${orderedQuantity} droids, you have ${
    customerCredits - totalPrice
  } credits left.`;
}

function checkStorage1(available, ordered) {
  let message;
   if (ordered === 0) { 
    message = "There are no products in the order!";
  } else if (ordered > available) { 
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; 

  return isInRange;
}

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip";

  return canAccessContent;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  
  // if(totalSpent >= 50000){
  //   discount = GOLD_DISCOUNT
  //   }
  // if (totalSpent >= 20000 && totalSpent <= 50000) {
  //   discount = SILVER_DISCOUNT;
  //   }
  // if(totalSpent >= 5000 && totalSpent <= 20000){
  //    discount = BRONZE_DISCOUNT;
  //  } 
  // if(totalSpent < 5000){
  //   discount = BASE_DISCOUNT; 
  //  }
  

  // return discount;
  if(totalSpent >= 50000){
    discount = GOLD_DISCOUNT;
  }
  else if (totalSpent >= 20000) {
    discount = SILVER_DISCOUNT;
  }
  else if(totalSpent >= 5000){
     discount = BRONZE_DISCOUNT;
  } 
  else {
    discount = BASE_DISCOUNT;
  }
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch(password) {
    case null: 
    message = "Canceled by user!";
    break;

    case ADMIN_PASSWORD:
    message = "Welcome!";
    break;

    default: 
    message = "Access denied, wrong password!";
  }

  return message;
}

function lastElement() {
  const language = "JavaScript essentials";
  return lastElement = language[language.length-1];
}

module.exports = {
  dayOfWeek,
  sumMultEl,
  ucFirst,
  makeOrderMessage,
  isAdult,
  isValidPassword,
  checkStorage,
  makeTransaction,
  checkStorage1,
  isNumberInRange,
  checkIfCanAccessContent,
  getDiscount,
  checkPassword,
  lastElement
};
