function ageClassification(age){
  
    switch(true){
      case ( age >= 0 && age <= 12):
        return "MIMICRY";
        break;
        case ( age >= 13 && age <= 19):
        return "SELF-DISCOVERY";
        break;
        case ( age >= 20 && age <= 45):
        return "COMMITMENT";
        break;
         default:
        return "LEGACY";
        break;
    }
  }
  var age = 25;
  var classification = ageClassification(age);
  console.log("The age classification is: " + classification);