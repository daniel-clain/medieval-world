import { shuffle } from "../../general-helper-functions";

export const gameConfig = {
  tileSize: 10,
  rows: 100,
  columns: 100,
  timeIncrementAmount: 0.1,
  timeIncrementInterval: 100,
  listOfNames: shuffle([
    'Daniel', 'Tom', 'Alex', 'Angelo', 'Paul', 'Mark', 'Mat', 'Mike', 'Brad', 'Steve', 'James', 'Harry', 'Kevin', 'Stan', 'Dave', 'Chris', 'Sam', 'Bob', 'Fred', 'Frank', 'Jake', 'Alan', 'Ben', 'Chad', 'Denis', 'Eric', 'Greg', 'Lewis', 'Larry', 'Neil', 'Nathan', 'Norbit', 'Phil', 'Ryan', 'Simon', 'Seth', 'Troy', 'Tyler', 'Zach', 'Gavin', 'Robert', 'Tim', 'Tyson', 'Hugh', 'Ronald', 'Spencer', 'Jason', 'Arnold', 'Tod', 'Shawn', 'Liam', 'Will', 'Oliver', 'Ethan', 'John', 'Luke', 'Dylan', 'Anthony', 'Josh', 'Charles', 'Connor', 'Cameron', 'Adam', 'Ian', 'Evan', 'Henry', 'Owen', 'Isaac', 'Jackson', 'Leo', 'Jonathan', 'Declan', 'Vincent', 'Tristan', 'Dom', 'Patrick', 'Arie', 'Adrien', 'Bruce', 'Miles', 'Garrick', 'Barry', 'Jerry', 'George', 'Julian', 'Andy', 'Peter', 'Drew', 'Craig', 'Angus', 'Boris', 'Jake', 'Raymond', 'Martin', 'Harold', 'Justin', 'Jeff', 'Matthew'
  ])
}