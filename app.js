console.log("starting the app.js" )
const notes =require("./note.js")
//const os=require('os')
//const user=os.userInfo()
//console.log(user)
//const fs=require('fs')
//const _=require('lodash')
// var age = notes.getage()
// fs.appendFile('greeting.txt',`hello ${user.username},you are of ${age} age `,(err) => {
//     if(err){
//         console.log(err)
//     }
// })

// console.log('result is',notes.add(2,5))
// console.log(_.isString(true))
// console.log(_.isString('anju'))
// console.log(_.uniq(['anju boura',12,1,2,2,9,5]))
 //const command = process.argv[2]
// console.log(process.argv)

const yargs =require('yargs')

var titleoption ={
    
        describe :"title of note",
        demand :true,
        alias : 't'
};

var bodyoption ={
    describe :"body of the note",
        demand :"true",
        alias : 'b'

};
var argv=yargs
.command("add","to add the note" , {
    title :titleoption,
    body :bodyoption
    
})
.command("read","to read the note",{
    title :titleoption
})
.command("remove","to remove the note",{
    title :titleoption
})

.command("list","to listing the note",
)



.help()
.argv
//console.log(argv)
const command=argv._[0]


if(command == 'add'){
//console.log("adding the note")
 var note= notes.addNote(argv.title,argv.body)
 console.log('--------')
 if(note){

console.log('note is added')
notes.lognote(note)
 }
 else{
     console.log('title is taken')
 }
    
}


else if(command == 'list'){

   var fetchednotes= notes.getAll()
   fetchednotes.forEach( note => {
       console.log("-------------")
       notes.lognote(note)
       
   });
}


else if(command=='read'){


    var note=notes.getNote(argv.title)
    if(note){
    notes.lognote(note)
    }
    else{
        console.log('not any note with this title')
    }
}


else if(command=='remove'){
   
   var notestatus =notes.removeNote(argv.title)
   console.log( notestatus ? 'note is removed' :'no such kind of note')

}
else{
    console.log('command not recongnized')
}