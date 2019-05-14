// console.log('notes.js running');

// the 'module' property of 'notes.js' which is set in app.js
// 'module' has several objects on it. See them by 'console.logging' the property
// 'module'.
// console.log(module);

// SETTING PROPERTIES ONTO 'exports' OBJECT IN 'module'
// module.exports.age = 36;

// module.exports.addNote = () => {
//  console.log('addNote');
//  return 'new note';
// }
// module.exports.add = (a,b) => {
//  // let sum = a + b;
//  return a + b;
// }

// OPENS UP fs.writeFileSync('nameOfFile') AND fs.readFileSync('nameOfFile')
const fs = require('fs');

let fetchNotes = () => {
  try {
    // FETCHING notes INTO noteString, IF ERROR THEN MOVES ONWARD UNOBSTRUCTED
    let notesString = fs.readFileSync('notes-data.json');
    // SETTING FETCHED DATA & parsing AS DATA IN notes ARRAY
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  // console.log('Adding note: ', title, body);
  // AN ARRAY notes WHICH ALLOWS US TO PUSH THE RECEIVED note INTO
  // A FILE notes-data.json
  // let notes = [];
  // HANDLES USER INPUT
  let note = {
    title,
    body
  };
  let notes = fetchNotes();

  // SETS duplicateNotes UP TO LOOP THROUGH notes LOOKING FOR DUPLICATE TITLES
  // IF DUPLICATES EXIST THEN writeFileSync WILL NOT RUN
  // let duplicateNotes = notes.filter( (note) => {
  //   return note.title === title;
  // };
  // THIS USES FUNKY ARROW FUNCION MAGIC
  // filter() CYCLES USING note AGAINST notes ARRAY AND RETURNS note.title IF IT MATCHES ANOTHER note.title
  let duplicateNotes = notes.filter( (note) => note.title === title);
  
  if (duplicateNotes.length === 0) {
    // PUSHING THE NEW note INTO notes ARRAY
    notes.push(note);
    saveNotes(notes);
    // ONLY RETURNS note IF NO DUPLICATE NOTES
    return note;
  }
};

let removeNote = (title) => {
  // FETCH NOTES
  let notes = fetchNotes();
  // FILTER NOTES
  let filteredNotes = notes.filter( (note) => note.title !== title);
  // SAVE NEW notes ARRAY
  saveNotes(filteredNotes);
  // RETURNS true IF NOT THE SAME LENGTH, MEANING removeNote() WAS SUCCESSFUL
  return notes.length !== filteredNotes.length;
};

let getAll = () => {
  // let notes = fetchNotes();
  // return notes;
  // A BETTER WAY
  return fetchNotes();
};

let readNote = (title) => {
  let notes = fetchNotes();
  let filteredNote = notes.filter( (item) => item.title === title);
  return filteredNote[0];
  // if (filteredNote.length !== 0) {
  // RETURNS AN ARRAY, THUS OUTPUT NEEDS [0]
  //   return filteredNote;
  // }
};

let logNote = (note) => {
  debugger;
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
// THE FOLLOWING SYNTAX IS IDENTICAL
// SYNTAX IS `property: value,` OR SIMPLY `property`
// IF property AND value ARE THE SAME
//  addNote: addNote
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};