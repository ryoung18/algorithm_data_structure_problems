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

console.log(
loverLetter('i heart u', 'I hate you right now')
)

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

wordCount('Hello! hello hi hi');