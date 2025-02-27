import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sections/Sobre";
import Pilares from "@/components/Sections/Pilares";
import Beneficios from "@/components/Sections/Beneficios";
import Etapas from "@/components/Sections/Etapas";
import DivParaSeInscrever from "@/components/DivParaSeInscrever";
import Depoimentos from "@/components/Sections/Depoimentos";
import Duvidas from "@/components/Sections/Duvidas";
import Footer from "@/components/Footer";
import Formulario from "@/components/Sections/Form";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Sobre/>
      <Pilares/>
      <Beneficios/>
      <Etapas/>
      <DivParaSeInscrever/>
      <Depoimentos/>
      <Formulario/>
      <Duvidas/>
      <Footer/>
    </>
  )
}
