function isPolindrome(string) {
  //шалаш
  const str = string.toLowerCase();
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return str.length !== 0;
}

function countVowels(aWord) {
  let counter = 0;
  const volwes = "аеёиуоэяюы";
  const lcWord = aWord.toLocaleLowerCase();
  for (let i = 0; i < lcWord.length; i++) {
    if (volwes.includes(lcWord[i])) {
      counter++;
    }
  }
  return counter;
}

function isAnagram(oneWord, otherWord) {
  if (oneWord.length === 0 || oneWord.length !== otherWord.length) {
    return false;
  }
  let counter = {};
  const lcOneWord = oneWord.toLowerCase();
  const lcOtherWord = otherWord.toLowerCase();
  for (let c of lcOneWord) {
    if (c in counter === false) counter[c] = 1;
    else counter[c]++;
  }
  for (let c of lcOtherWord) {
    if (c in counter === false) {
      return false;
    }
    counter[c]--;
    if (counter[c] === 0) {
      delete counter[c];
    }
  }
  return Object.keys(counter).length === 0;
}

const numfib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

function valueFib (n) {
  let a = 1;
  let b = 1;
  for(let i = 3; i <= n; i++){
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
 
function valueFib1 (n) {
  if(num < 2) {
    return num
  }

  return fibonacci(num - 1) + fibonacci(num - 2)
}

function pattern(n){
 let output = "";
 for(let i = 1; i <= n; i++){
  for(let j = 0; j < i; j++){
    output += i;
  }
    output +='\n';
 }
 return output; 
}


//number CountVowels(aWord)/
//bool isAnagram(oneWord, otherWord)
//bool IsMetagram(oneWord, otherWord)



module.exports = { isPolindrome, countVowels, isAnagram, valueFib, valueFib1, pattern};
