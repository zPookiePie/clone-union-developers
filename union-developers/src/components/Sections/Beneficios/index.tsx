import "./index.scss"

import DivBeneficios from "./DivBeneficios";
import TituloComLinhas from "@/components/TituloComLinhas";
import { PropsDivBeneficios } from "./DivBeneficios";

function Beneficios() {

    const BeneficiosData: PropsDivBeneficios[] = [
    {
        title: "Preparação para o mercado",
        icon: "https://media.graphassets.com/qssZQEUSEaAQoM6oznCw", 
        description: "Os membros são equipados com uma compreensão profunda das práticas de mercado, permitindo-lhes ingressar no setor com confiança e conhecimento.",
        alt: "imagem de um foguete",
    },
    {
        title: "Aprendizado de novas tecnologias e ferramentas",
        icon: "https://media.graphassets.com/tsqge8g9TpyED5o5iVr6", 
        description: "Os membros são expostos a uma variedade de tecnologias e ferramentas relevantes, expandindo suas habilidades e conhecimentos.",
        alt: "imagem de ferramentas",
    },
    {
        title: "Desenvolvimento de hard skills",
        icon: "https://media.graphassets.com/XH5lk8IJQ1Cz1M2AE1Lu", 
        description: "Através de projetos reais, os membros fortalecem suas habilidades técnicas, aumentando sua capacidade de contribuir de forma eficaz em ambientes profissionais.",
        alt: "imagem de um video game",
    },
    {
        title: "Desenvolvimento de soft skills",
        icon: "https://media.graphassets.com/eBMuKBvTLulsEbZySGwt", 
        description: "Além das competências técnicas, os membros aprimoram habilidades interpessoais cruciais, como comunicação eficaz, resolução de conflitos e trabalho em equipe.",
        alt: "imagem de uma estrela",
    },
    {
        title: "Ambiente imersivo",
        icon: "https://media.graphassets.com/2S5Pdk5oShOJUlIz8p7X", 
        description: "O Union oferece uma oportunidade única de aplicar conhecimentos teóricos em cenários do mundo real, proporcionando uma experiência diferenciada e valiosa.",
        alt: "imagem de um planeta",
    },
    {
        title: "Networking ",
        icon: "https://media.graphassets.com/WR1yF2qGRmm8jWLCyw0D", 
        description: "A participação no Union expande sua rede de contatos, abrindo portas para colaborações futuras e oportunidades profissionais.",
        alt: "imagem de um sinal de positivo",
    },
    {
        title: "Domínio de metodologias ágeis",
        icon: "https://media.graphassets.com/KHCFnl40RyKQqOx6Bjuz", 
        description: "Através da vivência prática, os membros aprendem a aplicar metodologias ágeis como Scrum, preparando-os para ambientes de trabalho colaborativos.",
        alt: "imagem de uma lâmpada acessa",
    },
    {
        title: "Mentória",
        icon: "https://media.graphassets.com/sanArFzbQUipTnjRVl78", 
        description: "Os mentores experientes oferecem orientação valiosa, proporcionando uma trajetória de aprendizado mais suave e eficiente.",
        alt: "imagem de um avatar de uma pessoa",
    },
];

    return (
        <section id="beneficios" className="benefits-section">
            <TituloComLinhas 
                title="Benefícios" 
            />
            <p className="subtitle">Conheça os benefícios incríveis que o Union proporciona para seus membros!</p>
            <div className="benefits-container">
                <div className="benefits-grid">
                {BeneficiosData?.map((beneficio, index) => (
                    <DivBeneficios
                    key={index}
                    alt={beneficio.alt}
                    title={beneficio.title}
                    description={beneficio.description}
                    icon={beneficio.icon}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}

export default Beneficios;
