export default function arrayDemo() {
  console.group("Array Demo");
  // Array
  const numbers = [4, 8, 15, 16, 23, 42]
  const numbersIterator = numbers[Symbol.iterator]();
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  console.log(numbersIterator.next());
  // Done
  console.log(numbersIterator.next());

  for (const number of numbers) {
    console.log(number);
  }
  console.groupEnd();
}


