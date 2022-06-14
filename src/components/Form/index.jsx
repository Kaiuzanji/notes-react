import { useState } from "react"

const Form = ({ notes, setNotes }) => {
    const [formValue, setFormValue] = useState({
        title:"",
        description: ""
    })

    const handleFormValue = (e) => {
        setFormValue((currentValues) => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        notes = notes.concat(formValue)
        setNotes(notes)
    }

    return (
        <form>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium text-slate-200">Título</label>
                <input onChange={handleFormValue} type="text" name="title" className="mt-2 p-3 text-slate-200 bg-zinc-700 border-zinc-700 outline-none text-md block w-full shadow-sm sm:text-sm rounded-md"/>
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium mt-2 text-slate-200">
                    Descrição
                </label>
                <div className="mt-2">
                    <textarea onChange={handleFormValue} name="description" rows={4} className="shadow-sm mt-1 text-slate-200 bg-zinc-700 block w-full text-md outline-none p-2 sm:text-sm border-zinc-700 rounded-md" placeholder="Descreva sua nota aqui..." defaultValue={''} />
                </div>
            </div>
            <div>
                <button onClick={handleSubmitForm} className="p-3 mt-2 text-slate-200 bg-orange-700 rounded-lg w-full outline-none hover:bg-orange-600">
                    Adicionar nota
                </button>
            </div>
        </form>
    )
}

export default Form