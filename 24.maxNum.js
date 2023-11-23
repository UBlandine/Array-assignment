function returnMaxNumber(a,b){
    if (a>b){
      return "a";
    }else if (a<b){
      return "b";
    }else{
      return "Undefirned";
    }
  }
  const a = 30;
  const b = 10;
  const result = returnMaxNumber(a,b);
  console.log("The maximum number is " + result);