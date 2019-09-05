const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes'
}

const addNotes = (title, body) => {

    const notes = loadNotes()
    //const duplicateNotes = notes.filter( (note) =>  note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added'))
    } else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)


    if (notes.length === updatedNotes.length) {
        console.log(chalk.bgRed('No note found'))
    } else {
        saveNotes(updatedNotes)
        console.log(chalk.bgGreen('Note Removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('YOUR NOTES:'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) => {
       const notes = loadNotes()
       const note =  notes.find((note) =>  note.title === title)
       if(note){
       console.log(chalk.inverse.blue.bold(note.title))
       console.log(note.body)
       }
       else{
           console.log(chalk.red('No Note found'))
       }
       
    
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes =  () => {
    try {

        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}