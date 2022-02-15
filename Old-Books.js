function oldBooks(input) {
  let index = 0;
  let wantedBook = input[index];
  index++;
  let bookList = input[index];
  let checkedBooks = 0;
  let ifBookFound = false;

  while (bookList !== "No More Books") {
    bookList = input[index];
    index++;
    checkedBooks++;
    if (bookList === wantedBook) {
      ifBookFound = true;
      break;
    }
  }

  if (ifBookFound === true) {
    console.log(`You checked ${checkedBooks - 1} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedBooks - 1} books.`);
  }
}

oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
