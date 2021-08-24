//part1
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}


//part2
const favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber] : 'That is my favorite!'
}


//part3
const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
}


//part4
function createAnimal (species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}