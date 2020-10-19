let age = "";

const whichSchool  = function (age) {
  if (age <= 12) {
    age = "Elemtanary"
    return age;
  } else if ((age >= 13) && (age <= 18)) {
    age = 'Secondary'
    return age;
  } else if (age>=19) {
    age = 'Lighthouse Labs'
    return age;
  } else {
    age = "invalid Input"
    console.log('invalid input')
  }
 return age;
 
}
console.log(whichSchool(17));