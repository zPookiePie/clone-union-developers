import ImageFloating from "../ImageFloating";
import LinkButton from "../LinkButton";
import "./index.scss";

function DivParaSeInscrever() {
    return (
        <article className="div-para-se-inscrever">
            <div className="content">
                
                    <div className="card">
                        <ImageFloating className="image" />
                        <div className="text">
                        <h2>
                            Vivência na prática, ambiente imersivo, desafios e muito mais!
                        </h2>
                        <h3>
                            Inscreva-se já! <br />Vagas limitadas
                        </h3>
                        <LinkButton
                            name="Inscrever-se agora"
                            href="#formulario"
                            className="button"
                        />
                        </div>
                    </div>
            </div>
        </article>
    )
}

export default DivParaSeInscrever;