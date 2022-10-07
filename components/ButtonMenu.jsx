//Importaciones
import Link from "next/link"
import { useRouter } from "next/router";

export const ButtonMenu = ({text, href, icon}) => {

    // Función para saber la ruta en donde se encuentra el usuario
    const { asPath } = useRouter();
    return (
        <Link href={href}>
            <a className={`btn justify-start btn-ghost btn-menu ${asPath === href ? 'bg-indigo-50 text-primary-500 font-medium' : 'text-slate-500'}`}>
                {icon}
                <span>{text}</span>
            </a>
        </Link>
    )
}
