module.exports = function toReadable (number) {
    
    let digits = number % 10;
    let dozens = (number - digits) % 100;
    let hundreds =  (number - dozens - digits) % 1000;


    function findDigit(digits){
        let digit = 0;
        switch (digits){
            case 0: 
                digit = "zero";
            break;
            case 1: 
                digit = "one";
            break;
            case 2: 
                digit = "two";
            break;
            case 3: 
                digit = "three";
            break;
            case 4: 
                digit = "four";
            break;
            case 5: 
                digit = "five";
            break;
            case 6: 
                digit = "six";
            break;
            case 7: 
                digit = "seven";
            break;
            case 8: 
                digit = "eight";
            break;
            case 9: 
                digit = "nine";
            break;
        }

        return digit;
    }

    function findNumbersBetweenTenAndTwenty(dozens, digits){

        let teens = 0;
        
        switch (dozens + digits){
            case 10: 
                teens = "ten";
            break;
            case 11: 
                teens = "eleven";
            break;
            case 12: 
                teens = "twelve";
            break;
            case 13: 
                teens = "thirteen";
            break;
            case 14: 
                teens = "fourteen";
            break;
            case 15: 
                teens = "fifteen";
            break;
            case 16: 
                teens = "sixteen";
            break;
            case 17: 
                teens = "seventeen";
            break;
            case 18: 
                teens = "eighteen";
            break;
            case 19: 
                teens = "nineteen";
            break;
        }

        return teens;
    }

    function findNumberBetweenTwentyAndHundread(dozens){

        let dozen = 0;

        switch(dozens){
            case 10:
                dozen = "ten";
            break;
            case 20: 
                dozen = "twenty";
            break;
            case 30: 
                dozen = "thirty";
            break;
            case 40: 
                dozen = "forty";
            break;
            case 50: 
                dozen = "fifty";
            break;
            case 60: 
                dozen = "sixty";
            break;
            case 70: 
                dozen = "seventy";
            break;
            case 80: 
                dozen = "eighty";
            break;
            case 90: 
                dozen = "ninety";
            break;
        }

        return dozen;
    }

    function findHundreads(hundreds){

        let hundredCount = 0;

        switch (hundreds){
            case 100: 
                hundredCount = "one";
            break;
            case 200: 
                hundredCount = "two";
            break;
            case 300: 
                hundredCount = "three";
            break;
            case 400: 
                hundredCount = "four";
            break;
            case 500: 
                hundredCount = "five";
            break;
            case 600: 
                hundredCount = "six";
            break;
            case 700: 
                hundredCount = "seven";
            break;
            case 800: 
                hundredCount = "eight";
            break;
            case 900: 
                hundredCount = "nine";
            break;
        }

        return hundredCount;
    }

    if(number < 10){
        return `${findDigit(digits)}`;
    }
    else if(number >= 10 && number < 20){
        return `${findNumbersBetweenTenAndTwenty(dozens, digits)}`;
    }
    else if(number >=20 && number < 100){
        if(digits == 0){
            return `${findNumberBetweenTwentyAndHundread(dozens)}`;
        }
        else{
            return `${findNumberBetweenTwentyAndHundread(dozens)} ${findDigit(digits)}`;
        }
    }
    else{
        if(dozens == 0 && digits == 0){
            return `${findHundreads(hundreds)} hundred`;
        }
        else if(dozens == 0 && digits != 0){
            return `${findHundreads(hundreds)} hundred ${findDigit(digits)}`;
        }
        else if(dozens != 0 && digits == 0){
            return `${findHundreads(hundreds)} hundred ${findNumberBetweenTwentyAndHundread(dozens)}`
        }
        else if(dozens != 0 && digits != 0){
            if(dozens == 10){
                return `${findHundreads(hundreds)} hundred ${findNumbersBetweenTenAndTwenty(dozens, digits)}`;
            }
            else{
                   return `${findHundreads(hundreds)} hundred ${findNumberBetweenTwentyAndHundread(dozens)} ${findDigit(digits)}`;
               }
           }   
       }
}

