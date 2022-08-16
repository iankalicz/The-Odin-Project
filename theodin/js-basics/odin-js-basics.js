
    // 1.
    function add7 (n) {
        console.log ( n + 7 )
    }

    // 2.
    function multiply (a , b) {
        console.log (a * b);
    }

    // 3.
    function capitalize(input) {
        console.log ((input.charAt(0)).toUpperCase() + input.slice(1))
    }

    // 4.
    function lastLetter(input) {
        console.log (input.slice(-1))
    }

    // fizzbuzz

    function fizzBuzz() {
        
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    for (let i = 1 ; i <= answer; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

    // factorial
    
    function FirstFactorial(num) { 

        for (let i = num - 1 ; i >= 1 ; i--) {
            console.log(num *= i)
        }
      
      }