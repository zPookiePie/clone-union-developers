import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "./index.scss";

export interface PropsDivBeneficios {
  icon: string | StaticImport;
  title: string;
  description: string;
  alt: string;
}

function DivBeneficios ({ icon, title, description, alt }: PropsDivBeneficios) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">
        <Image src={icon} width={80} height={80} alt={alt} />
      </div>
      <div className="benefit-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DivBeneficios;
