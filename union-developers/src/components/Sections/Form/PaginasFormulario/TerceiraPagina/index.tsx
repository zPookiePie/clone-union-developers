import InputForm from "@/components/InputForm";
import CheckBoxInput from "@/components/InputForm/CheckBoxInput";
import { useFormContext } from "react-hook-form";

function TerceiraPagina() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <>
        <InputForm
        type="textarea"
        label="Por que você gosta de programar? Qual sua maior motivação?"
        placeholder="Qual é a sua maior motivação para fazer o que faz?"
        required
        control={control}
        error={errors.youMotivation?.message?.toString()}
        {...register("youMotivation")}
        />
        <InputForm
        type="textarea"
        label="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?"
        placeholder="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?"
        required
        control={control}
        error={errors.timeManagement?.message?.toString()}
        {...register("timeManagement")}
        />
        <InputForm
        type="textarea"
        label="Quando você recebe um feedback, como é para você?"
        placeholder="Nos conte como é para você receber feedback?"
        required
        control={control}
        error={errors.aboutFeedback?.message?.toString()}
        {...register("aboutFeedback")}
        />
        <InputForm
        type="textarea"
        label="Como você ficou sabendo sobre o Union?"
        placeholder="Como você ficou sabendo sobre o Union?"
        required
        control={control}
        error={errors.howDidYouKnow?.message?.toString()}
        {...register("howDidYouKnow")}
        />
        <InputForm
        type="textarea"
        label="Por que você quer fazer parte do Union?"
        placeholder="Por que você quer fazer parte do Union?"
        required
        control={control}
        error={errors.becauseParticipate?.message?.toString()}
        {...register("becauseParticipate")}
        />
        <InputForm
        type="textarea"
        label="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
        placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
        required
        control={control}
        error={errors.reasonForSelected?.message?.toString()}
        {...register("reasonForSelected")}
        />
      <CheckBoxInput
        control={control}
        error={errors.aceitarTermos?.message?.toString()}
        {...register("aceitarTermos")}
      />

    </>
  );
};

export default TerceiraPagina;