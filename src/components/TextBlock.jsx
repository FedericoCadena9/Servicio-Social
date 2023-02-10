export const TextBlock = ({ title, subtitle, children }) => {
    return (
        <div className='py-4 flex flex-col md:flex-row items-start gap-6 md:gap-0 md:items-center justify-between'>
            <div className="space-y-2 md:space-y-0">
                <h1 className='text-gray-900 dark:text-white font-bold text-3xl md:text-4xl font-secondary'>{title}</h1>
                <p className='text-gray-500 dark:text-gray-600 mt-2'>{subtitle}</p>
            </div>

            {/* Contenido para botones */}
            <div className="flex items-center gap-4">
                {children}
            </div>
        </div>
    )
}
