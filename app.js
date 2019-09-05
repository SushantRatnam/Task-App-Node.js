const chalk = require('chalk')
const yargs = require('yargs')
const Notes = require('./notes.js')

yargs.version('1.1.0')

//Create a add notes command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => Notes.addNotes(argv.title, argv.body)
})

//Create a remove notes command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => Notes.removeNote(argv.title)
})

//Create a list of notes
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: () => Notes.listNotes()
})

//Create a read notes command
yargs.command({
    command: 'read',
    describe: "Reading notes",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.readNotes(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)