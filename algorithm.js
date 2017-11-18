function loverLetter (l, n) {
   lFreq = {}; //count of letters in l

    // adds letter count in lFrequency
   for(let i = 0; i < l.length; i++ ){

     if(l[i] !== ' ') {
      let lLcase = l[i].toLowerCase();
      lFreq[lLcase] = ++lFreq[lLcase] || 1;
     }
   }

   for(let j = 0; j < n.length; j++) {
     let nLcase = n[j].toLowerCase();
     if(lFreq[nLcase]) {
       lFreq[nLcase]--;
       if(lFreq[nLcase] < 0) return false;
     }
   }

  for(let k in lFreq) {
    if(lFreq[k] > 0) return false;
  }

  return true;
}

// console.log(
// loverLetter('i heart u', 'I hate you right now')
// )

function wordCount(str){
  let freq = {};
  let tempLetter = '';

  for(let i = 0; i < str.length; i++){
    let letter = str[i].toLowerCase();

    if(letter === ' ' && tempLetter !== '' ) {
      freq[tempLetter] =  freq[tempLetter]+1 || 1;
      tempLetter = '';
    }

    if(letter >= 'a' && letter <= 'z'){
        tempLetter += letter;
    }
  }

  if(tempLetter !== '') freq[tempLetter] = freq[tempLetter]+1 || 1;

  return freq;
}

// wordCount('Hello! hello hi hi');

function anagramPair(str1, str2) {
  let freq = {};

  if(str1.length !== str2.length) return false;

  for(let k in str1){
    freq[str1[k]] = freq[str1[k]]+1 || 1;
  }

  for(let k in str2){
    if(freq[str2[k]] < 0 || !freq[str2[k]]) return false
    freq[str2[k]]--
  }

  return true;
}

// console.log(
// anagramPair("racecar", "crarace")
// )

function anagramPalindrome(str) {
  let freq = {};
  let oddCount = 0;

  for(let k in str){
    freq[str[k]] = freq[str[k]]+1 || 1;
  }

  for(let k in freq) {
    if(freq[k] % 2 === 1) oddCount++
    if(oddCount > 1) return false;
  }

  return true;
}

function letterSort(str) {
  let freq = {};
  let result = '';
  let min = 0;
  let max = 0;

  for(let k in str) {
    freq[str[k]] = ++freq[str[k]] || 1;
    min = Math.min(str[k].charCodeAt(0), min)
    max = Math.max(str[k].charCodeAt(0), max)
  }

  for(let i = min; i <= max; i++){
    let letter = String.fromCharCode(i);
    if(freq[letter])
      result = result + letter.repeat(freq[letter]);
  }

  return result;
}


// console.log(
// letterSort('one')
// )

function sortDigits(int) {
  let numCount = [];
  let result = 0;

  if(typeof int !== 'number' ) return false;

  while(int > 0){
    numCount[int % 10] = ++numCount[int % 10] || 1;
    int = Math.floor(int/10)
  }

  for(let i = 1; i < numCount.length; i++){
    if(numCount[i]){
      for(let j = 0; j < numCount[i]; j++ ) {
        result = result*10+i;
      }
    }
  }
  return result;
}

console.log(
sortDigits(12344+'8')
)