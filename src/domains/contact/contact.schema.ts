import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.email('Email inválido'),
  subject: z.string().default('Contato').optional(),
  message: z
    .string()
    .min(10, 'Mensagem deve ter no mínimo 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
