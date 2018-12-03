const fs = require('fs');
const mocha = require('mocha');
const chai = require('chai');

// node ./day-1/1-1.js ./day-1/input.txt
// ./node_modules/.bin/mocha --ui tdd ./day-1/1-1.js

/*
===============================================================================
Get Input and main function run - wont run when unit testing
===============================================================================	
*/
if (process.argv.length > 1 && process.argv[1] === __filename) {
  fs.readFile(process.argv[2], 'utf8', function(err, input) {
    let strings = input.split('\n');
    let boxIdSet =  []
    let otherArray = new Set ([])
    
    for (i = 0; i < strings.length; i++) {
      boxIdSet.push(strings[i].split("").sort().join("").match(/(.)\1+/g))
      
    }
    two = 0
    three = 0 
    for (i = 0; i < boxIdSet.length; i++) {
      arr = boxIdSet[i]
      lengths = arr.map(function(word){
        return word.length
       })

      // for (i = 0; i < lengths.length; i++) {
      //   // console.log(lengths)
      // }
      let uniqueValues = [...new Set(lengths)]; 
      // console.log(uniqueValues)
      if (uniqueValues.includes(2)){
        two = two + 1 
      } 
      if (uniqueValues.includes(3)) {
        three = three + 1 
      }
      
    }
   console.log(two)
   console.log(three)
   console.log(two * three)
    

  
    // console.log(boxIdSet)
    // var count = boxIdSet.reduce(function(n, val) {
    //       if (val.length == 2){
    //         return n + 1 
    //       } else {
    //         return n
    //       }
          
    //     }, 0);
        
    // console.log(count)

    // for ( str = 0; str < strings.length; str++) {
    //   console.log(strings[str])
    //   // for (i = 0; i < strings[str].length; i++) {
    //   //   search = strings[str][i]
    //     // console.log(search)
        
    //     var count = strings[str].reduce(function(n, val) {
    //     return n + (val === search);
    //   }, 0);
    //   // boxIdSet.push(count)
    //   // }
    //   // console.log(boxIdSet)
      
    // }

    
    
    // strings.map( str =>  {
    //   for (i = 0; i < str.length; i++) {
        
      
    //   }
       
     
      // if (str.match(/(.)(.*\1){3}/ || /(.)(.*\1){2}/ ) != null) {
      //   threeArray.push(str)
      // }
      
      }
    //   newString = str.replace(/(.)(.*\1){3}/, function(m) {
    //   return "3"
      
     
    // });
    // boxIdSet.push(newString)
  )
  
  
  //  two = boxIdSet.reduce( (sum, string) => {
  //    if (string.includes("2")) {
  //      return sum + 1 
  //    } else {
  //      return sum 
  //    }
  //   }, 0)
  //  three = boxIdSet.reduce( (sum, string) => {
  //     if (string.includes("3")) {
  //       return sum + 1 
  //     } else {
  //       return sum 
  //     }
  //    }, 0)
  //  console.log(boxIdSet)
  

function sum(a, b) {
  return a + b;
}

/*
===============================================================================
UNIT TESTS - only runs when unit testing
===============================================================================	
*/
if (process.argv.length > 1 && process.argv[1].includes('mocha')) {
  let expect = chai.expect;
  let assert = chai.assert;

  mocha.suite(__filename.split('/').reverse()[0] + ' tests', function() {
    mocha.test('sum', function() {
      expect(sum(1, 1)).to.equal(2);
      expect(sum(2, 2)).to.equal(4);
    });
  });
}}
