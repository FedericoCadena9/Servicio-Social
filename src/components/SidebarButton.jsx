//Importaciones
import Link from "next/link"
import { useRouter } from "next/router";

export const SidebarButton = ({ text, href, icon }) => {

    // Función para saber la ruta en donde se encuentra el usuario
    const { asPath } = useRouter();
    return (
        <Link href={href} legacyBehavior>
            <a className={`btn justify-start btn-ghost btn-menu ${asPath === href ? 'bg-indigo-50 dark:bg-emerald-500/30 dark:text-slate-100  text-emerald-500 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                {icon}
                <span>{text}</span>
            </a>
        </Link>
    )
}
