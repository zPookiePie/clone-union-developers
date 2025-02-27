"use client"
import InputForm from "@/components/InputForm";
import { useFormContext } from "react-hook-form";


function PrimeiraPagina() {
    const { register, formState: { errors },control } = useFormContext();
    return (
      <>
        <InputForm
          label="Nome Completo"
          placeholder="Qual seu nome completo?"
          required
          control={control}
          error={errors.nomeCompleto?.message?.toString()} 
          {...register("nomeCompleto")} 
        />
        <InputForm
          label="Idade"
          placeholder="Qual sua idade?"
          required
          control={control}
          error={errors.idade?.message?.toString()}
          {...register("idade")}
        />
        <InputForm
          label="Email"
          placeholder="Qual seu email de contato?"
          required
          control={control}
          error={errors.email?.message?.toString()}
          {...register("email")}
        />
        <InputForm
          label="Github"
          placeholder="Qual seu Github?"
          required
          control={control}
          error={errors.github?.message?.toString()}
          {...register("github")}
        />
        <InputForm
          label="Linkedin"
          placeholder="Qual seu Linkedin?"
          required
          control={control}
          error={errors.linkedin?.message?.toString()}
          {...register("linkedin")}
        />
        <InputForm
          type="radio"
          name="developmentSide"
          options={["Frontend", "Backend"]}
          control={control} 
          label="Onde você gosta mais de trabalhar?" />
      </>
    )
}

export default PrimeiraPagina