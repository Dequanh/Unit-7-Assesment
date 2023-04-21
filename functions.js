let array = [28, 43, -12, 30, 4, 0, 12]

const addToZero= (arr)=>{
    let value = false;
        for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
            if (arr[i] + arr[j] === 0) {
                value = true;
            }
            }
        }
        }
        return value
}
// 0.454ms O(n^2) 


function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
// 0.092ms O(n)


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
// 0.93ms  O(log n)


var myArray = ['juju', 'ky', 'ddequan', 'holmes', 'myron']

function Find_longStr(myarry) {
    var max = myarry[0].length;
    myarry.map(item => max = Math.max(max, item.length));
    Str = myarry.filter(item => item.length == max);
    return Str;
}
// 28.492ms 


