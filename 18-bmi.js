function bmiClassification(weight,height){
  
    var heightInMeters = height/100;
    
    var bmi = height/(heightInMeters*heightInMeters);
    
    if (bmi < 18.5){
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9){
      return "Normal Weight";
    }else if (bmi >= 25 && bmi < 29.9){
      return "Over Weight";
    }else{
      return "Obese";
    }
  }
  var height = 170;
  var weight = 70;
  var result = bmiClassification(weight,height);
  console.log("BMI Classification is: " + result);