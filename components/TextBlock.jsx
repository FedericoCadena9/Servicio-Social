export const TextBlock = ({ title, subtitle, children }) => {
    return (
        <div className='px-8 py-4 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-900 dark:text-white font-bold text-4xl font-secondary'>{title}</h1>
                <p className='text-gray-500 dark:text-gray-600 mt-2'>{subtitle}</p>
            </div>

            {/* Contenido para botones */}
            <div className="flex items-center gap-4">
                {children}
            </div>
        </div>
    )
}
