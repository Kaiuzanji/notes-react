import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState([])
  const [categories, setCategories] = useState(['Minhas Atividades'])
  
  const handleDeleteCard = key => setNotes(notes.filter((note, index) => index !== key))
  return (
    <>
      <Navbar notes={notes} setNotes={setNotes} categories={categories} setCategories={setCategories} />
      <div className="grid grid-flow-row grid-cols-4">
        {categories.map( category => {
          const notesByCategory = notes.filter( note => note.category === category)
          return (
            <div className="mt-2">
              <div className="flex justify-between mx-4 items-center text-slate-400">
                <span className="mt-2">{category}</span> 
                <span>{notesByCategory.length}</span>
              </div>
              <div className="w-50 p-2 m-2 rounded-md bg-zinc-800">
                {notesByCategory.map((note, index) => {
                  return (
                    <Card key={index} title={note.title} description={note.description} deleteCard={() => handleDeleteCard(index)} />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
