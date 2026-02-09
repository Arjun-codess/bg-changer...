

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id == 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = 'white'
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
    })
})








// project 2


// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if (height === '' || height <= 0 || isNaN(height)) {
//         results.innerHTML = `Please give a valid height`;
//     } 
//     else if (weight === '' || weight <= 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight`;
//     } 
//     else {
//         // Correct BMI formula (height in cm)
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//         let category = '';

//         if (bmi < 18.5) {
//             category = 'Underweight';
//         } else if (bmi >= 18.5 && bmi < 25) {
//             category = 'Normal weight';
//         } else if (bmi >= 25 && bmi < 30) {
//             category = 'Overweight';
//         } else {
//             category = 'Obese';
//         }

//         results.innerHTML = `
//             <p>Your BMI is: ${bmi}</p>
//             <p>Category: ${category}</p>
//         `;
//     }
// });








// project 3



