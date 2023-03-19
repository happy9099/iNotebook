import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial =[
        {
          "_id": "641402ba8cb30eccbacc0cb1",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb1",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb1",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb1",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb1",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402ba8cb30eccbacc0cb1",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:03:38.182Z",
          "__v": 0
        },
        {
          "_id": "641402dc8cb30eccbacc0cb3",
          "user": "6412df6b37510cde83768d63",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-17T06:04:12.372Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
