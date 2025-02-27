import './index.scss'
import LinkButton from "../LinkButton"
import ImageFloating from '../ImageFloating'

function Hero() {
    return (
            <section className="container">
                <div className="espace">
                    <div className="grid">
                        <div className="content">
                            <div className="title">
                                <h1>
                                    Ganhe <strong>experiência</strong> como <br/> desenvolvedor júnior
                                </h1>
                            </div>

                            <p>
                                Descubra como o Union oferece um ambiente prático e imersivo para
                                desenvolvedores juniors ganharem experiência de mercado, mesmo sem
                                estar em uma empresa. Participe dessa experiência única e impulsione
                                sua carreira como desenvolvedor!
                            </p>
                            <LinkButton name="Quero participar" href="#formulario" className="cta-button" />
                        </div>
                        <ImageFloating className="hidden" />
                    </div>
                </div>
            </section>
          )
}

export default Hero