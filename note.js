console.log("starting the note.js")
const fs =require('fs')
//console.log(module)
// module.exports.getage = () => {
//     return 19;

// };


// module.exports.add = (a ,b) => {
// return a+b;
// }
var fetchnotes = () =>{
    try{
    var notesString=fs.readFileSync("notes.json")
    var notes=JSON.parse(notesString)
    return notes
    }
    catch {
        return []

    }

};

var savenotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes))

}


var addNote = (title,body) => {
    var notes=fetchnotes()
var note = {
    title,
    body

};

    var filterednotes = notes.filter( (note) => {
    return note.title == title
     
    })
    if(filterednotes.length == 0){
    


    notes.push(note)
    savenotes(notes)
    return note;
    }

};
var getAll = () => {
    return fetchnotes()
};
var getNote = (title) => {
    var notes=fetchnotes()
    //console.log(notes)
    var filterednote=notes.filter( (note) =>{
        return note.title==title

    })
    //console.log(filterednote)
    return filterednote[0];
};
var removeNote =(title) => {
    //console.log("remove the note of having the title",title)
   var notes =fetchnotes()
   var filterednote=notes.filter( (note) => {
       return note.title != title
   })

   savenotes( filterednote)
   return filterednote.length !=notes
};

var lognote = (note) => {
console.log(`Title is : ${note.title}`)
console.log(`Body is : ${note.body}`)
}

module.exports =  {
    addNote,
    getAll,
    getNote,
    removeNote,
    lognote

    

};