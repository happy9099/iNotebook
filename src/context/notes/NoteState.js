import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial =[
        {
          "_id": "641402ba8cb30eccbacc0cb11",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb12",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb13",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb14",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb15",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb16",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402dc8cb30eccbacc0cb37",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:04:12.372Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      // Add a Note
      const addNote = (title, description,tag) =>{
        // TODO: API Call 
        console.log("Addign a new note")
        const note = {
          "_id": "641402dc8cb30eccbacc0cb37",
          "user": "6412df6b37510cde83768d634",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-03-17T06:04:12.372Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote =(id)=>{
        // TODO: API Call 
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = (id, title, description, tag) =>{
        
      }


    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
