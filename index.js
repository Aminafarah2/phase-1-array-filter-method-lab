// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
// returns all drivers that match the passed in name
const findMatching = (x,y) => x.filter(x => x.toLowerCase() === y.toLowerCase())
//returns a driver if beginning provided letters match
const fuzzyMatch = (x,y) => x.filter(x => x.charAt(0) === y.charAt(0))
//accesses the data structure to check if name match
const matchName = (x,y) => x.filter(x => x.name === y)