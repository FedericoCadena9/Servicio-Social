// Importaciones
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react';

// Iconos
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'


export const DarkModeToggle = () => {

    // Hook para cambiar el tema, representa el tema actual
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    // Use Effect para resolver el error de que el componente se renderiza antes de que el hook useTheme se ejecute
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button className={`transition duration-300 ease-in-out ${theme === 'light' ? 'rotate-45 ' : ''}`} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >
            {/* Botón de Modo Oscuro */}
            {theme === 'dark' ? (
                <MoonIcon className="w-5 h-5" />
            ) : (
                <SunIcon className="w-5 h-5" />
            )}
        </button>

    )
}
