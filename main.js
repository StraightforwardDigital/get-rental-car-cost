function rentalCarCost(d) {
  //set variable to hold standard cost
  let cost = d * 40;
  //determine instances greater than 7
  if (d >= 7){
    return cost -= 50;
    //determine instances greater than 3
  } else if (d >= 3){
    return cost -= 20;
    //Account for instances less than 3
  } else {
    return cost;
  }
}