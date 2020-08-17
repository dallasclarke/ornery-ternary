function isHot(temp) {
 
    return (temp >= 80) ? "Yes, it is indeed hot." : "No, it is not hot."
    
  }


function helloThere(name) {

    return (name.length < 6) ? `Hello, ${name}` : `Hi, ${name}`;
}


function goodbyeYou(person) {
  return (person === undefined) ? "Goodbye, stranger" : `Goodbye, ${person}`;

}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}