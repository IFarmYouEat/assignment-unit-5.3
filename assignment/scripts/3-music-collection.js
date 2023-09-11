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

console.log(addToCollection(myCollection,'Led Zepplin III','Led Zepplin',1970))

console.log(myCollection);

function showCollection(collection){
  for(let album of collection){
    console.log(`${album.title} was created by ${album.artist} in ${album.yearPublished}`);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist){
  let searchResults = [];
  for(let album of collection){
    if(artist === album.artist){
      searchResults.push(album);
    }
  }
  return searchResults;
}

console.log(findByArtist(myCollection, 'Muse'));
console.log(findByArtist(myCollection, 'Green Day'));
console.log(findByArtist(myCollection, 'Led Zepplin'));

function search(collection, artist, year){
  if(artist == null || year == null ){
    return showCollection(collection);
  }
  
  let searchResults = [];
  for(let album of collection){
    if(artist == album.artist && year == album.yearPublished){
      searchResults.push(album);
      }
    }
  return searchResults;
}

console.log(search(myCollection,'Led Zepplin', 1970))
console.log(search(myCollection,'Muse'));




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
