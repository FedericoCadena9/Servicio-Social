
export const TextBlock = ({ title, subtitle, children }) => {
    return (
        <div className='px-8 py-4 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-900 font-bold text-4xl font-secondary'>{title}</h1>
                <p className='text-gray-500 mt-2'>{subtitle}</p>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}
