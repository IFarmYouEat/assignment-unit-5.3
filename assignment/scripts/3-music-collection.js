console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  if(collection === myCollection){
    myCollection.push(newRecord);
  }else if(collection === primesCollection){
    primesCollection.push(newRecord);
  }else console.log('Error adding to collection')

  return newRecord;
};


console.log(addToCollection(myCollection,'Toxicity', 'System of a Down', 2001));

console.log(addToCollection(myCollection,'Songs for the Deaf', 'Queens of the Stone Age', 2002))

console.log(addToCollection(myCollection,'BBC Live Sessions', 'Led Zepplin', 1997 ))

console.log(addToCollection(myCollection,'Remember That You Will Die', 'Polyphia', 2022))

console.log(addToCollection(myCollection,'Wolfmother', 'Wolfmother', 2005));

console.log(addToCollection(myCollection,'The Resistance', 'Muse', 2009 ));








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
