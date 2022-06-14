import { useState } from "react"

const Form = ({ categories, setCategories }) => {
    const [category, setCategory] = useState("")

    const handleSubmitForm = (event) => {
        event.preventDefault()
        categories = categories.concat(category)
        setCategories(categories)
        setCategory("")
    }

    return (
        <form>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium text-slate-200">Categoria</label>
                <input onChange={(event) => setCategory(event.target.value)} value={category} type="text" name="category" className="mt-2 p-3 text-slate-400 bg-zinc-700 border-zinc-700 outline-none text-md block w-full shadow-sm sm:text-sm rounded-md"/>
            </div>
            <div>
                <button onClick={handleSubmitForm} className="p-3 mt-2 text-slate-200 bg-orange-700 rounded-lg w-full outline-none hover:bg-orange-600">
                    Adicionar categoria
                </button>
            </div>
        </form>
    )
}

export default Form