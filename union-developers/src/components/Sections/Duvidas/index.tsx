"use client";

import { useState } from "react";
import "./index.scss"
import TituloComLinhas from "@/components/TituloComLinhas";

const dataDuvidas = [
  {
    name: "O que é o Union?",
    content: [
      "O Union é um ambiente prático e imersivo que busca simular o mais próximo do que você vai encontrar nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega.",
      "No Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizadas pelas empresas, além de ganhar experiência trabalhando com outras pessoas de diferentes partes do Brasil.",
      "Você vivencia na prática como é o dia a dia de um desenvolvedor em uma empresa e fica mais preparado para conquistar uma vaga."
    ]
  },
  {
    name: "Quanto custa para fazer parte do Union?",
    content: ["Nada! O Union é 100% gratuito."]
  },
  {
    name: "Quem pode participar?",
    content: [
      "Pessoas que ainda não trabalham na área e que não participem de bootcamps ou plataformas de capacitação."
    ]
  },
  {
    name: "Preciso ter experiência na área?",
    content: [
      "Sim. Você precisa ter no mínimo 1 ano de estudo em programação, além disso é necessário que já tenha criado algum projeto sozinho, sem que seja projetos guiados, como de cursos e eventos."
    ]
  },
  {
    name: "Qual a idade mínima para fazer parte do Union?",
    content: ["Você precisa ter no mínimo 18 anos."]
  },
  {
    name: "Como me inscrevo?",
    content: ["Se você se encaixa nos requisitos obrigatórios basta preencher o nosso formulário e fazer sua pré-inscrição."]
  },
  {
    name: "Existe algum processo seletivo? Como funciona?",
    content: [
      "Nosso processo seletivo consiste em algumas etapas, que são: pré-inscrição pelo formulário da página, análise de suas informações no formulário, desafio técnico e uma entrevista com nosso time.",
      "Nosso objetivo é entender seu momento profissional e avaliar se você tem o perfil que buscamos para o Union."
    ]
  },
  {
    name: "O que vou aprender?",
    content: ["Você aprenderá como trabalhar com metodologias e ferramentas utilizadas pelas empresas, desenvolver hard e soft skills, tudo de forma prática e mão na massa!"]
  },
  {
    name: "Quanto tempo por dia preciso me dedicar aos projetos?",
    content: [
      "Você precisa ter disponibilidade de trabalhar no mínimo 1 hora por dia no projeto, é importante também ter disponibilidade para participar das reuniões do time, que acontecem diariamente e aos finais de semana."
    ]
  }
];

function Duvidas() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    }

    return (
    <section id="duvidas" className="duvidas-section">
        <TituloComLinhas
            title="Dúvidas"
        />
        <div className="duvidas-container">
            <dl>
                {dataDuvidas.map((item, index) => (
                <div key={index} className="accordion-item">
                    <dt className="accordion-title" onClick={() => toggleAccordion(index)}>
                    {item.name}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                    </dt>
                    {activeIndex === index && (
                    <dd className="accordion-content">
                        {item.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                        ))}
                    </dd>
                    )}
                </div>
                ))}
            </dl>
        </div>
    </section>
    )
}

export default Duvidas;
