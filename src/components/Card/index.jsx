import { Trash } from 'phosphor-react'
const Card = ({ title, description, deleteCard }) => {
    return (
        <div className="p-2 bg-zinc-700 break-words mt-2 rounded-lg flex flex-col gap-2 w-full">
            <span className="text-slate-300 text-md flex justify-between">
                <span className='break-words'>{title}</span>
                <span><Trash onClick={deleteCard} size={20} className="text-orange-600" /></span>
            </span>
            <span className="text-slate-500 text-md">
                {description}
            </span>
        </div>
    )
}

export default Card