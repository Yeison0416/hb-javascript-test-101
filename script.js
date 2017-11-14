//NUMBER RGB
function random_rgba() {
    var x;
    r= Math.floor((Math.random() * 100) + 0);
    g= Math.floor((Math.random() * 100) + 0);
    v= Math.floor((Math.random() * 100) + 0);
    
    var obj = {
        R:  r,
        G: g,
        B: v
      };
      return obj;
}

//FILTER NEGATIVE NUMBERS
array=[-1,-2,-3,0,1,-6]
function filterNegativeNumbers(array_negative) {
const array_positive=[];
    array_for_filter=array_negative;
    cont=0;
    for (i = 0; i < array_for_filter.length; i++) { 
        if (array_for_filter[i] >= 0) {
            array_positive[cont]= array_for_filter[i];
            cont=cont+1;
        }
    }
    return array_positive;
}

function functionalfilterNegativeNumbers(array_negative) {
    array_for_filter=array_negative;
    var number_of_condition = function(valor) {
        return valor >= 0;
    };

    return array_for_filter.filter(number_of_condition );
}

//MAP NUMBERS TO STRING
function mapNumbersIntoStrings(array_negative) {
    const array_positive=[];
    for(i=0; i < array_negative.length; i++){
        array_positive[i]=array_negative[i].toString();
    }
    
    return array_positive;
}

//PALINDROME
palindrome="anitalavalatina";
function isPalindrome(palin){

    var removeChar = palin.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse().join('');
    if(removeChar === checkPalindrome){
        var bool=1;
    }
    else{
        var bool=0;
    }
    return bool;
}

//CLASS PERSON
class Person {
    
      constructor(name, age) {
        this.name = name;
        this.age=age;
      }
    
      printName() {
        return this.name;
      }

      printAge() {
        return this.age;
      }
    
}
const student = new Person('John', 25);

function printOutPersonAge(student){
    return student.printAge();
}

console.log(printOutPersonAge(student));




