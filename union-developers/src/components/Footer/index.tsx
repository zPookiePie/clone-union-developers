import Image from "next/image";
import LinksToSocialMedia from "../LinksToSocialMedia";
import "./index.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <Image
                    src="/logo-union-developers.svg"
                    alt="Logo Union Developers"
                    width="263"
                    height={37}
                    className="logo-image"
                />
                <div className="footer-description">
                <p>
                    O Union proporciona experiência para desenvolvedores juniors,
                    transformando-os em profissionais preparados para o mercado.
                </p>
                </div>
            </div>
            <nav className="footer-nav" aria-label="Navegação rodapé">
                <div className="footer-nav-section">
                <h2>Saiba mais</h2>
                <ul>
                    <li>
                    <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                    <a href="#depoimentos">Depoimentos</a>
                    </li>
                </ul>
                </div>
                <div className="footer-nav-section">
                <h2>Dúvidas</h2>
                <ul>
                    <li>
                    <a href="#duvidas">FAQ</a>
                    </li>
                    <li>
                    <a href="#etapas">Como funciona</a>
                    </li>
                </ul>
                </div>
            </nav>
            <div className="footer-social-media">
                <LinksToSocialMedia
                href="mailto:contato.uniongroup@gmail.com"
                linkImage="https://media.graphassets.com/4AjPcOSSuK4kIKUv8Mdg"
                nameLink="Email"
                />
                <LinksToSocialMedia
                href="https://www.linkedin.com/company/union-developers-group"
                linkImage="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                nameLink="Linkedin"
                />
                <LinksToSocialMedia
                href="https://github.com/union-developers-group"
                linkImage="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                nameLink="Github"
                />
            </div>
        </div>
    )
}

export default Footer;
