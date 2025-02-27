import "./index.scss"

interface TituloComLinhas {
    title: string;
}

function TituloComLinhas ({ title }: TituloComLinhas) {
    return (
        <div className="header-section">
            <div className="header-line-left"></div>
                <h2 className="header-title">{title}</h2>
            <div className="header-line-right"></div>
        </div>
    )
}

export default TituloComLinhas;