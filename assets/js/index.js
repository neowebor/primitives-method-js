// 1
function getStringCopy(str) {
  if(typeof str !== 'string') {
    throw new TypeError('Invalid Type (string expected)');
  }

  const processedString = str.trim().split(" ").filter(elem => elem);

  return processedString.map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ');
}

try {
  const res = getStringCopy('test string');

  console.log(res);
  
} catch(err) {
  console.log(err.message)
}

// 2
function countVowels(str, arr) {
  if(!Array.isArray(arr) || typeof str !== 'string') {
    throw new TypeError('Invalid Type (Array/String expected)')
  }

  const processedString = str.trim().split(" ").filter(elem => elem).join("");

  const vowels = arr.map(elem => elem.toLowerCase());  
  let quantityVowels = 0;

  for(let i = 0; i < processedString.length; i++) {
    if(vowels.includes(processedString[i].toLowerCase())) {
      quantityVowels++;
    }
  }

  return quantityVowels;
}

try {
  const res = countVowels('testaa', ['e', 'a', 'i']);

  console.log(res); // 3
} catch (err) {
  console.log(err.message);
}