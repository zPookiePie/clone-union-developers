import "./index.scss"

export interface PropsDivEtapas {
    id: number;
    title: string;
    description: string;
}

function DivEtapas ({ title, id, description }: PropsDivEtapas) {
    return (
        <div className="card-etapa">
            <span> {id} </span>
            <div className="card-etapa-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DivEtapas;
