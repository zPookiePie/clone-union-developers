import Image from "next/image";
import "./index.scss";
import LinksToSocialMedia from "@/components/LinksToSocialMedia";

export interface PropsDivDepoimentos {
    src: string;
    name: string;
    description: string;
    Linkedin: string;
    Github: string;
}

function DivDepoimentos({
    src,
    name,
    description,
    Linkedin,
    Github,
}: PropsDivDepoimentos) {
  return (
    <div className="card-depoimento">
      <div className="imagem-container">
        <div className="imagem-borda">
          <Image
            src={src || "https://placehold.co/90x90"}
            alt={name}
            className="imagem-perfil"
            width={90}
            height={90}
          />
        </div>
      </div>
      <h2 className="nome-depoente">{name}</h2>
      <p className="descricao-depoimento">{description}</p>
      <div className="redes-sociais">

        <LinksToSocialMedia isDepoimento href={Linkedin} linkImage="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU" nameLink="Linkedin" />
        <LinksToSocialMedia isDepoimento href={Github} linkImage="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx" nameLink="Github" />
      </div>
    </div>
  );
};

export default DivDepoimentos;
