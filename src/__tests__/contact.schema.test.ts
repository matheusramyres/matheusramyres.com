import { describe, expect, it } from 'vitest';
import { contactFormSchema } from '../domains/contact/contact.schema';

describe('contactFormSchema', () => {
  it('accepts valid data', () => {
    const data = {
      name: 'Matheus Ramyres',
      email: 'matheus@example.com',
      subject: 'Teste',
      message: 'Mensagem de teste com mais de 10 caracteres',
    };
    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('rejects missing name', () => {
    const data = {
      email: 'matheus@example.com',
      message: 'Mensagem de teste com mais de 10 caracteres',
    } as any;
    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const data = {
      name: 'Matheus',
      email: 'matheus@example.com',
      message: 'curta',
    };
    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
