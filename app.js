const output = document.querySelector('#output');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const form = document.querySelector('#form');

/* form submit */
form.addEventListener('submit' , e=> {
    e.preventDefault();
    if(+min.value < +max.value) {
        let ranNumb = Math.floor(Math.random() * (+max.value  - + min.value + 1)) + +min.value;
        //let ranNumb = Math.floor(Math.random() * (parseInt(max.value)  - parseInt(min.value) + 1)) + parseInt(min.value);
        output.innerHTML = `<span>${ranNumb}</span>`;
    } else {
        alert('Min value is greater then Max value');
    }
    form.reset();
    

});

/* borde color */
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




   // oninvalid="setCustomValidity('R U STUPID DUMB ')" oninput="setCustomValidity('')"
