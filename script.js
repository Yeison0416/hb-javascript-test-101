//NUMBER RGB
export function generateRandomColor() {
    
    var obj = {
        r: Math.floor((Math.random() * 255) + 0),
        g: Math.floor((Math.random() * 255) + 0),
        b: Math.floor((Math.random() * 255) + 0),
      };
      return obj;
}

//FILTER NEGATIVE NUMBERS
export function filterNegativeNumbers(array_negative) {
const array_positive=[];
    var array_for_filter=array_negative;
    var cont=0;
    for (var i = 0; i < array_for_filter.length; i++) { 
        if (array_for_filter[i] >= 0) {
            array_positive[cont]= array_for_filter[i];
            cont=cont+1;
        }
    }
    return array_positive;
}

export function functionalFilterNegativeNumbers(array_negative) {
    array_for_filter=array_negative;
    var number_of_condition = function(valor) {
        return valor >= 0;
    };

    return array_for_filter.filter(number_of_condition );
}

//MAP NUMBERS TO STRING
export function mapNumbersIntoStrings(array_negative) {
    const array_positive=[];
    for(i=0; i < array_negative.length; i++){
        array_positive[i]=array_negative[i].toString();
    }
    
    return array_positive;
}

//PALINDROME
export function isPalindrome(palin){

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
export class Person {
    
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

export function printOutPersonAge(student){
    return student.printAge();
}





