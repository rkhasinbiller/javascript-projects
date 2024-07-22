// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numberOfPages = numberOfPages;
    this.numberOfTimesCheckedOut;
    this.discarded = discarded;

  }
  checkout(uses=1) {
    this.timesCheckedOut += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends BookClass{
  constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded) {
    super(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded);
    
  }
  dispose(currentYear){
    if (currentYear-this.copyright > 5) {
       this.discarded = 'Yes';
    }
  }
}
class Novel extends BookClass {
  constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded) {
    super(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded);
  
  }
  dispose(){
    if (this.numberOfTimesCheckedOut > 100) {
       this.discarded = 'Yes';
    }
 }
}


// Declare the objects for exercises 2 and 3 here:
let PandP = new Novel ('Pride and Prejudice', 'Jane Austin', 1813, 1111111111111, 432, 32, 'No');

let topSecret = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:
goodRead.checkout(5);
goodRead.dispose();