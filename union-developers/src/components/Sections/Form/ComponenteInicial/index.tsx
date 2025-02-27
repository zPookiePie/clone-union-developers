import Image from "next/image";
import "./index.scss"

export interface PropsComponenteInicial { 
    src: string;
    title: string;
}

function ComponenteInicial({ src, title }: PropsComponenteInicial) {
    return ( 
        <div className="initial-container">
            <Image 
                src={src} 
                alt="Ícone de um check" 
                width={20} 
                height={20} 
                className="icon"
            />
            <li className="initial-title">{title}</li>
        </div>
    );
}

export default ComponenteInicial;
