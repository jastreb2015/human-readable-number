module.exports = function toReadable (n) {
    let str = n.toString();
    
    let str1 = ["zero","one","two","three","four","five","six","seven","eight","nine"][+str.slice(-1)];
    let str2 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"][+str.slice(-1)];
    let str3 = ["ten", "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"][+str.slice(-2, -1) - 1];
    let str4 = "hundred";
    let str5 = ["zero","one","two","three","four","five","six","seven","eight","nine"][+str[0]];
    console.log(str1);
    console.log (+str.slice(0, -2) + 1);
  
    if (n >= 0 && n < 10) {
      return str1;
    } else 
    if (n > 9 && n < 20 ) {
      return str2;
    } else 
    if ((n % 10 !== 0) && n > 19 && n < 100 ) {
        return str3 + " " + str1;
    } else 
    if (n % 10 == 0 && n < 100) {
        return str3;
    } else 
    if (n % 100 == 0) {
      return str5 + " " + str4;
    } else 
    if ( n > 100 && n % 10 == 0 ) {
      return str5 + " " + str4 + " " + str3;
    } else 
    if ( +str.slice(-2) < 10){
      return str5 + " " + str4 + " " + str1;
    } else 
    if ( +str.slice(-2) < 20){
      return str5 + " " + str4 + " " + str2;
    } else {
      return str5 + " " + str4 + " " + str3 + " " + str1;
    }
  
  }
