//function that display bmi classification of people

function calculateBMI(weight, height){
    const bmi = weight / (height * height);
    let age;
    if(bmi < 18.5){
        age = 'Underweight';
    }else if (bmi >= 18.5 && bmi < 24.9){
        age = 'Normal Weight';
    }else if (bmi >= 25 && bmi < 29.9 ){
        age = 'Overweight';
    }else {
        age = 'Obese';
    }
    return {
        bmi: bmi.toFixed(3),
        age: age
    };
}
const answer = calculateBMI(68, 1.68);
console.log(`BMI: ${answer.bmi}, Age: ${answer.age}`);