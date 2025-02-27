import "./index.scss"

export interface PropsComponenteDeInformacao { 
    id: number;
    title: string;
    isActive?: boolean;
}

function ComponenteDeInformacao ({ id, title, isActive = true }: PropsComponenteDeInformacao) {
    return (
        <div className="info-container">
            <li 
                aria-current={isActive} 
                className={`info-title ${isActive ? "active-title" : ""} ${id === 3 ? "special-title" : ""}`}
            >
                {title}
            </li>
            <span 
                aria-label={`Etapa ${id}`} 
                className={`info-step ${isActive ? "active-step" : ""} ${id > 3 ? "extra-step" : ""}`}
            >
                {id}
            </span>
        </div>
    )
}

export default ComponenteDeInformacao;
