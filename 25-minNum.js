function returnMinNumber(a,b){
    if (b<a){
      return "b";
    }else{
      return "Undefirned";
    }
  }
  const a = 30;
  const b = 10;
  const result = returnMinNumber(a,b);
  console.log("The minimum number is " + result);