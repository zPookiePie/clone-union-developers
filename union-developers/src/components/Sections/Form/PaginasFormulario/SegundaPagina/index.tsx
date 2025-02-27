import { useFormContext } from "react-hook-form";
import InputForm from "@/components/InputForm";

const SegundaPagina = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <>
      <InputForm
        type="radio"
        name="timeLearning"
        options={["1 ano", "2 anos", "3 anos", "Mais de 3 anos"]}
        control={control}
        label="Quanto tempo você estuda programação?"
      />
      <InputForm
        label="Link do repositório do seu melhor projeto"
        placeholder="Qual o link para o repositório do seu melhor projeto?"
        required
        control={control}
        error={errors.linkRepoBestProject?.message?.toString()}
        {...register("linkRepoBestProject")}
      />
      <InputForm
        type="textarea"
        label="Fale sobre como foi construir esse projeto? Quais foram os aprendizados e dificuldades que teve durante o desenvolvimento?"
        placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?"
        required
        control={control}
        error={errors.aboutBestProject?.message?.toString()}
        {...register("aboutBestProject")}
      />
    </>
  );
};

export default SegundaPagina;