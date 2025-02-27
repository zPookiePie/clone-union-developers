import Image from "next/image";
import "./index.scss"

interface PropsLinksToSocialMedia {
    isDepoimento?: boolean;
    href: string;
    linkImage: string;
    nameLink: string;
}

function LinksToSocialMedia({
    isDepoimento,
    href,
    linkImage,
    nameLink,
}: PropsLinksToSocialMedia) {
    return (
        <div className="social-media">
        {isDepoimento ? (
            <a
            href={href}
            className="social-media-depoimento"
            target="_blank"
            aria-label={nameLink}
            >
            <Image src={linkImage} alt="Linkedin" width={24} height={24} />
            <span className="social-media-name">{nameLink}</span>
            </a>
        ) : (
            <a
            href={href}
            className="social-media-link"
            target="_blank"
            >
            <Image src={linkImage} alt={nameLink} title={nameLink} width={24} height={24}  />
            <span className="social-media-name">{nameLink}</span>
            </a>
        )}
        </div>
    )
}

export default LinksToSocialMedia;