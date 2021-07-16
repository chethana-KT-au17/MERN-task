const Notes = require('../models/noteModel')

const noteCtrl = {
    getNotes: async( req, res) =>{
        try {
            const notes = await Notes.find({user_id: req.user.id})
            console.log("notes", notes)
            res.json(notes)
        } catch (err) {
            return res. status(500).json({msg: err.message})
        }
    },
    createNote: async (req, res) => {
        try {
            const{title, content, date} = req.body;
            console.log("create note req.body",req.body)
            const newNote = new Notes({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name,
         
            })

            console.log("create newnote",newNote)
           const n = await newNote.save()
           console.log("n note",n)
            res.json(newNote)
        } catch (err) {
            return res. status(500).json({msg: err.message})
        }
    },
    deleteNote: async (req, res) =>{
        try {
            await Notes.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a Note"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateNote:async (req, res) =>{
        try {
            const {title, content, date} = req.body;
            await Notes.findOneAndUpdate({_id: req.params.id},{
                title,
                content,
                date
            })
            res.json({msg: "Update a Note"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getNote:async (req, res) =>{
        try {
            const note = await Notes.findById(req.params.id)
            res.json(note)
        } catch (err) {
            
        }
        return res.status(500).json({msg: err.message})
    }
}


module.exports = noteCtrl