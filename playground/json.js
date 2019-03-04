const fs =require('fs')


var note = {
    title : "some title",
    body : "some body"
}
var originalstring =JSON.stringify(note)
fs.writeFileSync('notes.json', originalstring)
 var readstring =fs.readFileSync('notes.json')
  var obj =JSON.parse(readstring)
  console.log(typeof obj)
  console.log(obj.title)