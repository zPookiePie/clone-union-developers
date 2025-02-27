import Image from "next/image";
import "./index.scss"

interface PropsInscricaoBemSucedida {
  name: string;
  email: string;
}

function InscricaoBemSucedida ({ email, name }: PropsInscricaoBemSucedida) {
  return (
    <div className="success-container">
      <Image
        src="https://media.graphassets.com/05PPTFLdTGWFD091Jes1"
        width={40}
        height={40}
        alt="Ícone de positivo, representando que a inscrição foi realizada com sucesso"
        className="success-icon"
      />
      <h3 className="success-title">Inscrição realizada com sucesso!</h3>
      <p className="success-message">
        Obrigado <strong className="highlight">{name}</strong> por querer fazer parte do Union. 
        Em breve nossa equipe vai entrar em contato pelo seu email{" "}
        <strong className="highlight">{email}</strong>, fique atento.
      </p>
    </div>
  );
};

export default InscricaoBemSucedida;
