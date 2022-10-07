// Importaciones
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react';

// Iconos
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'


export const DarkModeToggle = () => {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button className={`transition duration-300 ease-in-out opa ${theme === 'light' ? 'rotate-45 ' : ''}`} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >
            {/* Botón de Modo Oscuro */}
            {theme === 'dark' ? (
                <MoonIcon className="w-5 h-5" />
            ) : (
                <SunIcon className="w-5 h-5" />
            )}
        </button>

    )
}
