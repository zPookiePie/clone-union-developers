import "./index.scss"

interface PropsDivPilares {
    title: string;
    description: string;
}

function DivPilares({ title, description }: PropsDivPilares) {
    return (
        <div className="card-pilar">
            <div className="card-header">
                <h3> {title} </h3>
            </div>
            <div className="card-body">
                <p> {description} </p>
            </div>
        </div>
    )
}

export default DivPilares;
