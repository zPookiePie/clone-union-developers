"use client";

import { useEffect, useState } from "react";

import PrimeiraPagina from "./PaginasFormulario/PrimeiraPagina";
import SegundaPagina from "./PaginasFormulario/SegundaPagina";
import TerceiraPagina from "./PaginasFormulario/TerceiraPagina";
import { useFormConfig } from "@/components/hooks/ValidationForm";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import useStorage from "@/components/hooks/useStorage";
import InscricaoBemSucedida from "./MensagemInscricaoBemSucedida";
import styles from "./Formulario.module.scss";
import ComponenteDeInformacao from "./ComponenteDeInformação";
import LinkButton from "@/components/LinkButton";
import ComponenteInicial, { PropsComponenteInicial } from "./ComponenteInicial";
import { FormData } from "@/components/hooks/ValidationForm";


const dataInitialComponent: PropsComponenteInicial[] = [
  {
      src:"https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      title:"Ter mais que 18 anos"
  },
  {
      src:"https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      title:"Ter 1 ano ou mais de estudo em programação"
  },
  {
      src:"https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      title:"Já ter criado projetos sozinho que não sejam de cursos ou eventos"
  },
  {
      src:"https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      title:"Não participar de bootcamps ou programas de capacitação"
  },
  {
      src:"https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      title:"Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto"
  },
  {
      src:"https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      title:"Ter disponibilidade para participar das reuniões do time, durante a semana e finais de semana"
  },
]

const formSteps: Record<number, string[]> = {
  1: ["nomeCompleto", "idade", "email", "github", "linkedin", "developmentSide"],
  2: ["timeLearning", "linkRepoBestProject", "aboutBestProject"],
  3: [
    "youMotivation",
    "timeManagement",
    "aboutFeedback",
    "howDidYouKnow",
    "becauseParticipate",
    "reasonForSelected",
    "aceitarTermos",
  ],
};

const Formulario = () => {
  const [isActiveForm, setIsActiveForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepFields, setStepFields] = useState<string[]>(formSteps[1]);
  const [formData, setFormData] = useState<FieldValues | null>(null);
  const methods = useFormConfig();
  useStorage(methods);

  useEffect(() => {
    setStepFields(formSteps[currentStep] || []);
  }, [currentStep]);

  const isCurrentStepValid = stepFields.every(
    (field) =>
      methods.getValues(field as keyof FormData) && 
      !Object.prototype.hasOwnProperty.call(methods.formState.errors, field)
  );

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData(data);
  };

  const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
    if (currentStep === 1) setIsActiveForm(false);
  };

  return (
    <div className={styles.form_content}>
    <section id="formulario" className={styles.form_section}>
      <h2 className={styles.title}>Junte-se ao time!</h2>
      {isActiveForm ? (
        <>
          <p className={styles.form_description}>
            Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário.
          </p>
          <nav className={styles.nav}>
            <ul className={styles.stepsList}>
              {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
                <ComponenteDeInformacao key={index} title={title} id={index + 1} isActive={currentStep >= index + 1} />
              ))}
            </ul>
          </nav>

          <FormProvider {...methods}>
            <form className={`${styles.form} ${currentStep >= 1 ? "animate-moveText" : ""}`} onSubmit={methods.handleSubmit(handleSubmit)}>
              {currentStep === 1 && <PrimeiraPagina />}
              {currentStep === 2 && <SegundaPagina />}
              {currentStep === 3 && <TerceiraPagina />}
              {currentStep === 4 && <InscricaoBemSucedida name={formData?.nomeCompleto || ""} email={formData?.email || ""} />}
              {currentStep <= 3 && (
                <div className={styles.buttonsContainer}>
                  <LinkButton
                    name="Voltar"
                    isButton
                    type="button"
                    className={styles.buttonInvert}
                    onClick={handlePrevStep}
                  />
                  <LinkButton
                    name="Próximo"
                    isButton
                    disabled={!isCurrentStepValid}
                    type={currentStep > 2 ? "submit" : "button"}
                    className={styles.nextButton}
                    onClick={handleNextStep}
                  />
                </div>
              )}
            </form>
          </FormProvider>
        </>
      ) : (
        <>
          <p className={styles.initialDescription}>
            Tem interesse em participar do Union? Confira abaixo os requisitos para participar.
          </p>
          <ul className={styles.requirementsList}>
            {dataInitialComponent.map((requisitos, index) => (
              <ComponenteInicial key={index} src={requisitos.src} title={requisitos.title} />
            ))}
          </ul>
          <LinkButton
            name="Inscrever-se"
            isButton
            className={styles.subscribeButton}
            onClick={() => setIsActiveForm(true)}
          />
        </>
      )}
    </section>
    </div>
  )
}

export default Formulario;