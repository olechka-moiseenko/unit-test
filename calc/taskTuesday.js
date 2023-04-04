function getSubstring(string, length) {
  return substring = string.slice(0, length);
}

function formatMessage(message, maxLength) {
    let result;
    if(message.length > maxLength) {
      result = message.slice(0, maxLength) + "...";
    } else {
      result = message;
    }
    return result;
}

function checkForName(fullName, name) {
    return result = fullName.includes(name); 
}

function checkForSpam(message) {
  let result;
  message = message.toLowerCase();
  result = message.includes('spam') || message.includes('sale');
  return result;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  }
  if (password !== ADMIN_PASSWORD) {
   return "Access denied, wrong password!";
  }
}

function getExtremeElements(array) {
 let newArr = [];
 let lastElInd = array.length - 1;
 newArr.push(array[0], array[lastElInd]);
 return newArr;
}

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");

  return words.length * pricePerWord;
}

function slugify(title) {
  let message = title.toLowerCase();
  return message.split(' ').join('-');
}

function calculateTotal(number) {
   let sum = 0;
   for(let i = 1; i <= number; i+=1){
    sum += i;
   }
   return sum;
}

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for(let i = min; i <= max; i += 1){
     numbers.push(i);
  }
   
  return numbers;
}

function filterArray(numbers, value) {
 const newArr = [];
 for (let i = 0; numbers.length > i; i += 1){
   if(numbers[i] > value){
     newArr.push(numbers[i]);
   }
 }
 return newArr;
}

function getCommonElements(array1, array2) {
  let newArr = [];
  for(let i = 0; i <= array1.length; i++){
    if(array2.includes(array1[i])) {
    newArr.push(array1[i]);
  }
} 
  return newArr;
}

function includes(array, value) {
  for(let i = 0; i <= array.length; i++){
    if (array[i] === value) {
      return true;
    }
  }
}


module.exports = {
   getSubstring,
   formatMessage,
   checkForName,
   checkForSpam,
   checkPassword,
   getExtremeElements,
   calculateEngravingPrice,
   slugify,
   calculateTotal,
   createArrayOfNumbers,
   filterArray,
   getCommonElements,
}