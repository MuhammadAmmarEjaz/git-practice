/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1 (which has index 0), but less than 2 (which has index 1).

Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

 function checknumber(arr,b){
     arr.push(b);

     const sorted_array=arr.sort((a,b)=>a-b)

     return sorted_array.indexOf(b);
 }

 console.log(checknumber([4,3,5,7],8));

 /**
  * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
destroyer([1, 2, 3, 2, 3, 1], 2, 3) - Should return [1, 1] as we remove all the 2's and 3's from the provided array
  */

  function destroyer(arr){
      console.log(Object.values(arguments));
    const destroyerArr = Object.values(arguments).slice(1);

    // Step 4.
    return arr.filter(x => !destroyerArr.find(y => y === x));
}

  console.log(destroyer([3,4,45,3,3,4,4],3,4))


  /**
   * You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 3, 3, 1, 2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles.
   */

   function birthdayCandles(arr){

    let max= 0 ;
    let counter = 0;

    arr.forEach(element => {
        if(element>max){
            max=element;
            counter = 1;
        }else if(element === max){
            counter++;
        }
    });
    return counter;
   }

   console.log(birthdayCandles([3,3,1,2]))

/**
 * Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days,[i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.
 */

 function beautifuldays(arr){
     let count = 0;
     let k=2;
     for(let i in arr){
         if(Math.abs(i-reversenumber(i))%k==0){
             count++;
         }
     }
     return count;
 }

 console.log(beautifuldays([19,10,12,14,15,9]) + "beautiful days");

 function reversenumber(n){
    n=n+ "";
    return n.split("").reverse().join("");
 }


 /**
  * A bracket sequence is called regular if it is possible to insert some numbers and signs into the sequence in such a way that the new sequence will represent a correct arithmetic expression.

For a string consisting of only ('s and )'s, determine if it is a regular bracket sequence or not.

Example:

Given ()() we could insert (1 + 2) * (2 + 4) which is a valid arithmetic expression, but (())) is not as it has an extra closing bracket: ).
  */

  function bracketmatch(str){
      let equal = 0;
      for(let i=0;i<str.length;i++){
          str[i]=== '(' ? (equal +=1) : (equal-=1)
      }
      return equal === 0;
  }

  console.log(bracketmatch('(((())))'));
  console.log(bracketmatch('()(()'));