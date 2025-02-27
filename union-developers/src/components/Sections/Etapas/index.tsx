import TituloComLinhas from "@/components/TituloComLinhas";
import DivEtapas, { PropsDivEtapas } from "./DivEtapas";
import "./index.scss";

function Etapas () {
    const EtapasData: PropsDivEtapas[] = [
        {
            id:1,
            title:"Pré-inscrição",
            description:"Inicie a sua inscrição preenchendo o nosso formulário",
        },
        {
            id:2,
            title:"Análise do formulário",
            description:"O nosso time irá analisar suas informações",
        },
        {
            id:3,
            title:"Desafio técnico",
            description:"Após a análise você receberá um desafio prático",
        },
        {
            id:4,
            title:"Entrevista",
            description:"Nessa fase iremos bater um papo para que possamos conhecer melhor você",
        },
    ]

    return (
        <section id="etapas" className="etapas-section">
            <TituloComLinhas
                title="Etapas"
            />
            <p className="subtitle">Conheça as etapas do nosso processo seletivo</p>
            <div className="etapas-container">
                <div className="etapas-wrapper">
                <ol className="etapas-list">
                    {EtapasData.map((etapas, index) => (
                    <li
                        key={index}
                        className={`etapas-item ${index % 2 === 1 ? "etapas-item-par" : ""}`}
                    >
                        <DivEtapas
                        id={etapas.id}
                        title={etapas.title}
                        description={etapas.description}
                        />
                    </li>
                    ))}
                </ol>
                <div className="etapas-linha"></div>
                </div>
            </div>
        </section>
    )
}

export default Etapas;