"use client";

import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Definição do esquema Zod
const schema = z.object({
  nomeCompleto: z.string().min(3, "Nome Inválido"),
  idade: z.coerce
    .number({ invalid_type_error: "Valor inválido" })
    .min(18, "É necessário ter no mínimo 18 anos para participar"),
  email: z.string().email("Email inválido"),
  github: z.string().min(3, "Usuário inválido"),
  linkedin: z.string().min(3, "Usuário inválido"),
  developmentSide: z.enum(["Frontend", "Backend"]),
  timeLearning: z.enum(["1 ano", "2 anos", "3 anos", "Mais de 3 anos"]),
  linkRepoBestProject: z.string().min(3, "Link inválido"),
  aboutBestProject: z.string().min(3, "Campo obrigatório"),
  youMotivation: z.string().min(3, "Campo obrigatório"),
  timeManagement: z.string().min(3, "Campo obrigatório"),
  aboutFeedback: z.string().min(3, "Campo obrigatório"),
  howDidYouKnow: z.string().min(3, "Campo obrigatório"),
  becauseParticipate: z.string().min(3, "Campo obrigatório"),
  reasonForSelected: z.string().min(3, "Campo obrigatório"),
  aceitarTermos: z
    .boolean()
    .refine((val) => val === true, {
      message: "Os termos devem ser aceitos",
    }),
});

// Criar um tipo TypeScript baseado no esquema Zod
export type FormData = z.infer<typeof schema>;

export const useFormConfig = (): UseFormReturn<FormData> => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nomeCompleto: "",
      idade: 18,
      email: "",
      github: "",
      linkedin: "",
      developmentSide: "Frontend",
      timeLearning: "1 ano",
      linkRepoBestProject: "",
      aboutBestProject: "",
      youMotivation: "",
      timeManagement: "",
      aboutFeedback: "",
      howDidYouKnow: "",
      becauseParticipate: "",
      reasonForSelected: "",
      aceitarTermos: false,
    },
    mode: "onBlur",
  });

  return methods;
};