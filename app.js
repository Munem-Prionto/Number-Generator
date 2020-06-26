const output = document.querySelector('#output');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const form = document.querySelector('#form');
var numberArray = [0];


/* form submit */
form.addEventListener('submit' , e=> {

    e.preventDefault();

    if(+min.value < +max.value) {

        let ranNumb = Math.floor(Math.random() * (+max.value  - + min.value + 1)) + +min.value;
        output.innerHTML = `<span>${ranNumb}</span>`;
        

        // counting animation
/*         numberArray.unshift(ranNumb);
        let previousNumber = numberArray[1];
        let currentNumber = numberArray[0];
        
        
        const counting = setInterval(() => {
            
         
            if(previousNumber > currentNumber) {
                previousNumber--;
                 c = true;
                if (previousNumber === currentNumber){
                    clearInterval(counting);
                    c =false;

                }
                output.innerHTML = `<span>${previousNumber}</span>`;
                
            } else if(previousNumber < currentNumber){
                previousNumber++;
                c =true;
                if (previousNumber === currentNumber){
                    clearInterval(counting);
                    c=false;
                }
                output.innerHTML = `<span>${previousNumber}</span>`;
               
            }
           
        }, 1);
        
     */

    } else {
        alert('Min value is greater then Max value');
    }

     form.reset();

});



/* border color */
min.addEventListener('keyup', e=> {
    if(+min.value > +max.value) {
       min.classList.add('red')
    }
    if(+min.value < +max.value) {
        min.classList.remove('red')
     }
});
max.addEventListener('keyup', e=> {
    if(+min.value < +max.value) {
       min.classList.remove('red');
    }
});



