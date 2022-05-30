import React,{useState} from 'react'

function CreateArea(props) {

    const [note, setNote] = useState({
        title : '',
        content :''
    })  
    
    function handleChange(event) {
        const { name, value } = event.target;
        //here the name you will get from the input tag
      //if you are writing in title named input box then name will be title
      //but if you are writing in description named input box name will become description
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value //by [] we are holding the key ex : title: "My computer"
          };
        });
      }
    //after you click add, it will reset the form
    const submitChange = (event) => {
        props.onAdd(note) //we are sending note object to get added
        setNote({
            title : '',
            content :''
        })
        event.preventDefault();

    }
    
  return (
    <div>
      <form>
              <input name="title" placeholder="Title" value={note.title} onChange={ handleChange}/>
        <textarea name="content" placeholder="Take a note..." value={note.content} onChange={ handleChange} rows="3" />
        <button onClick={submitChange}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
