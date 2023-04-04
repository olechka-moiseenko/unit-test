// Все строки в массиве, переданные вашей функции,
//  будут разной длины.

// Пример:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// ["Eyes", "Glasses", "Monocles", "Telescopes"]


const words = ["Telescopes", "Glasses", "Eyes", "Monocles"];

function sortByLength(array){
  for(let i = 0; i < array.length; i++){
    let longWord = array[0].length;
    if(array[i].length > longWord){
        array+=array[i];
    }
  }
    return array;
}
sortByLength(words);

module.exports = { sortByLength };

