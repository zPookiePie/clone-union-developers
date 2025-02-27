import DivPilares from "./DivPilares";
import "./index.scss"

function Pilares() {
    return (
        <section id="pilares" className="section-pilares">
            <header className="section-header">
                <h2>Pilares</h2>
            </header>
            <div className="section-intro">
                <p>
                Os pilares que sustentam o formato inovador de aprendizagem do Union é
                a junção de incríveis metodologias!
                </p>
            </div>
            <div className="card-container">
                <DivPilares
                title="Ativa"
                description="Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho para que ele possa ter sucesso no aprendizado."
                />
                <DivPilares
                title="Andragogia"
                description="É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem."
                />
                <DivPilares
                title="Ágil"
                description="A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora continua entre os membros, os processos e a qualidade geral do trabalho."
                />
            </div>
        </section>
    )
}

export default Pilares;
