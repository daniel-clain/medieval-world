export function numberLoop(amount, func: (number?: number) => void) {
  let returnVal: any[] = []
  for(let number = 1; number <= amount; number++){
    returnVal.push(func(number))
  }
  return returnVal
}
export const shuffle = <T>(array: T[]): T[] => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export function twoDec(num: number){
  return (Math.round((num) * 100) / 100)
}


export function randomNumber({from, to}:{from: number, to: number}){
  return Math.ceil(Math.random()*(to-from) + from)
}

export const randomNumberDigits = (digits: number) => Math.round(Math.random() * Math.pow(10, digits))

export const createId = () => Date.now() + randomNumberDigits(10)


export const wait = (milliseconds: number): Promise<void> => new Promise(resolve => setTimeout(resolve, milliseconds))