import React from "react";
import { useState } from "react";
import {IoIosAdd} from "react-icons/io";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function handleChange(event) {
        const {name, value} = event.target
        console.log(name, value)
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        })    
    }

    function submitNote(event) {
        event.preventDefault();
        if(note.title.trim()||note.content.trim()) {
            if(note.title.trim() === "") {
                note.title = note.content.substring(0, 10);
            }
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
        } else{
            alert("cannot submit empty note")
        }
        
        
    }

    return (
        <div className="createArea">
            <form>
                <input name="title" 
                placeholder="Title" 
                onChange={handleChange}
                value={note.title}
                onClick={expand}/>

               {isExpanded?
                <textarea name="content" 
                placeholder="Take a note..." rows="3" 
                onChange={handleChange}
                value={note.content} />: null}


                <button
                onClick={submitNote}
                type="submit">
                    <IoIosAdd />
                </button>
            </form>
        </div>
    );
};
export default CreateArea;