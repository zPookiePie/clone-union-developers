"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";
import TituloComLinhas from "@/components/TituloComLinhas";
import DivDepoimentos, { PropsDivDepoimentos } from "./DivDepoimentos";

function Depoimentos() {

    const dataDepoimentos: PropsDivDepoimentos[] = [
        {
            src: "https://avatars.githubusercontent.com/u/75648386?v=4",
            name: "Luiz Meraki",
            description:
                "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais. No momento que você entra no Union, você mergulha a fundo nas tecnologias e vai aprendendo e aprimorando durante o dia a dia.",
            Linkedin: "https://www.linkedin.com/in/luizmeraki/",
            Github: "https://media.graphassets.com/y4KMQdygSH6uZx46pxjU",
        },
        {
            src: "https://avatars.githubusercontent.com/u/78116908?v=4",
            name: "Matheus Oliveira",
            description:
                "Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência. Durante a participação, consegui desenvolver soft skills importantes para o mercado de trabalho, como organização, atenção e trabalho em equipe. ",
            Linkedin: "https://www.linkedin.com/in/matheushenrioliveira//",
            Github: "https://github.com/matheusOliv23",
        },
        {
            src: "https://avatars.githubusercontent.com/u/83667469?v=4",
            name: "José Ronaldo",
            description:
                "O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra um ambiente muito profissional, onde é cobrado que você tenha padrão de commit, testes e uma alta qualidade de escrita de código, aumentando muita sua qualidade técnica.",
            Linkedin: "https://www.linkedin.com/in/devjoseronaldo",
            Github: "https://github.com/Dev-JoseRonaldo",
        },
        {
            src: "https://avatars.githubusercontent.com/u/105453766?v=4",
            name: "Petrus Borges",
            description:
                "No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código. Eu percebi o quanto a parte de soft skills é importante para o mercado de tecnologia, como ter inteligência emocional, comunicação efetiva e resolução de problemas.",
            Linkedin: "https://www.linkedin.com/in/petrusborgesmachado/",
            Github: "https://github.com/PetrusBorges",
        },
        {
            src: "https://avatars.githubusercontent.com/u/90845572?v=4",
            name: "Salomão Leal",
            description:
                "Eu estava preso em cursos e não sabia como que era o fluxo de trabalho de uma empresa, com o Union eu consegui aprender isso e hoje me sinto muito mais preparado para o mercado. Durante a experiência no Union, eu aprendi a como pesquisar e se virar para resolver minhas task.",
            Linkedin: "https://www.linkedin.com/in/salomaosilval/",
            Github: "https://github.com/salomaosilval",
        },
    ]

    return (
        <section id="depoimentos" className="section-depoimentos">
            <TituloComLinhas
                title="Depoimentos"
            />
            <p className="subtitle">Veja o que quem já passou por essa experiência fala</p>
            <div className="depoimentos-container">
                <Swiper
                className="swiper-custom"
                spaceBetween={50}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                    slidesPerView: 1,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                }}
                >
                {dataDepoimentos.map((depoimento, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                    <DivDepoimentos {...depoimento} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Depoimentos;
