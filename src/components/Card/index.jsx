const Card = ({ title, description }) => {
    return (
        <div className="p-2 bg-zinc-700 rounded-lg flex flex-col gap-2 w-full">
            <span className="text-slate-300 text-md">
                {title}
            </span>
            <span className="text-slate-500 text-md">
                {description}
            </span>
        </div>
    )
}

export default Card