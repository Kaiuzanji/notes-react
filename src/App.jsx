import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [notes, setNotes] = useState([])
  return (
    <div className="grid grid-flow-row h-screen grid-cols-2">
      <div className="w-50 p-2 m-2 h-100 rounded-md bg-zinc-800">
        <Form notes={notes} setNotes={setNotes} />
      </div>
      <div className="w-50 p-2 m-2 h-100 rounded-md grid gap-4 grid-flow-row grid-cols-4 bg-zinc-800">
        {notes.map( (note, index) => {
          return (
            <Card key={index} title={note.title} description={note.description}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
