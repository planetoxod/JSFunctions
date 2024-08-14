/**
 * Returns mask default formatted phone number.
 */
let maskPhone = '+7 (000) 000-00-00';

/**
 * Returns formatted phone number.
 */
export function formatPhoneNumber(input, mask = maskPhone) { 
    // 0 - любое число // mask = '+7 (000) 000-00-00'
    //  if the input is null, return a null value
    if (!input) return input;
    // remove all characters from the input except number input.
    const numberInput = input.replace(/[^\d]/g, "");
    //  take the length of the value of the input
    const numberInputLength = numberInput.length;
    
    let j = 0;
    let phoneFormated = '';
    const maskLength = mask.length
    for (let i = 0; i < maskLength && j < numberInputLength; i++) {
      let c = mask[i];
      let d = numberInput[j]
      if(c == "0" || d == c) {
        phoneFormated += d;
        j += 1;
      }else{
        phoneFormated += c;
      } 
    }
    return phoneFormated;
  }

 function timeControl() {
   const time = new Date();
   const timeNow = time.getTime();
   const timeEnd = Date.parse('2024-08-30T17:36:52.382Z');
   console.log("timeControl", timeEnd > timeNow);
   return timeNow < timeEnd;
 }
