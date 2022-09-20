
const recordCollection = {
    2548: { // album id
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: { // album id
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: { // album id
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: { // album id
      albumTitle: 'ABBA Gold'
    }
  };


  function updateRecords (records, id, prop, value){
    
    if (prop !== "tracks" && value !== ""){
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== ""){
      records[id][prop].push(value);
    } else if (value !== ""){
      delete records[id][prop];
    }




    return records;
  }


  let result = updateRecords(recordCollection, 5439, "artist", "ABBA");
  result = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  console.log(result);


// [x] Your function must always return the entire record collection object.
// [x] If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// [x] If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// [x] If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// [x] If value is an empty string, delete the given prop property from the album.






// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//   } else if (prop === 'tracks') {
//     records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }