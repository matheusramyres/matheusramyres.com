'use client';
import { contactContent } from '@/domains/contact/contact.content';
import {
  contactFormSchema,
  type ContactFormData,
} from '@/domains/contact/contact.schema';
import { HeaderSection } from '@/ui/components/HeaderSection';
import { Icon } from '@/ui/components/Icon';
import { IconLink } from '@/ui/components/IconLink';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    setStatus('idle');
    setErrorMessage('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result?.error || 'Erro ao enviar');
      }
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMessage(msg || 'Erro desconhecido');
    }
  };

  return (
    <section
      className={clsx(
        'min-h-screen pt-16 pb-16 flex flex-col items-center scroll-mt-16',
      )}
      id="contact"
    >
      <HeaderSection
        title={contactContent.title}
        subText={contactContent.description}
      />
      <div className="mt-12 w-full max-w-6xl px-5 md:px-0 flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2 w-full">
          <div className="bg-white p-6 rounded-[14px] border border-border-default shadow-sm">
            <h3 className="text-text-primary font-semibold mb-4">
              Envie uma mensagem
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="text-sm text-text-secondary">
                  Nome
                </label>
                <input
                  id="name"
                  {...register('name')}
                  placeholder="Digite seu nome..."
                  className={clsx(
                    'w-full bg-gray-100 placeholder:opacity-60 rounded-md px-4 py-3 border',
                    errors.name ? 'border-red-500' : 'border-transparent',
                  )}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder="Digite seu email..."
                  className={clsx(
                    'w-full bg-gray-100 placeholder:opacity-60 rounded-md px-4 py-3 border',
                    errors.email ? 'border-red-500' : 'border-transparent',
                  )}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm text-text-secondary"
                >
                  Assunto (opcional)
                </label>
                <input
                  id="subject"
                  {...register('subject')}
                  placeholder="Digite um assunto..."
                  className="w-full bg-gray-100 placeholder:opacity-60 rounded-md px-4 py-3 border border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm text-text-secondary"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder="Digite sua mensagem..."
                  className={clsx(
                    'w-full bg-gray-100 placeholder:opacity-60 rounded-md px-4 py-3 h-40 resize-none border',
                    errors.message ? 'border-red-500' : 'border-transparent',
                  )}
                />
                {errors.message && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-950 text-white py-3 rounded-md font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
                <div className="mt-3">
                  {status === 'success' && (
                    <span className="text-green-600 font-medium">
                      Mensagem enviada com sucesso!
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="text-red-600 font-medium">
                      {errorMessage}
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <div>
            <h3 className="text-text-primary font-semibold text-lg">
              Informações para contato
            </h3>
            <p className="text-text-secondary mt-3">
              Aberto a novos desafios e oportunidades. Entre em contato e vamos
              criar algo juntos!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactContent.emailLink && (
              <a
                href={contactContent.emailLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 bg-white border border-border-default rounded-md p-4"
              >
                <div className="w-12 h-12 rounded-md bg-gray-950 text-white flex items-center justify-center">
                  <Icon icon="Mail" size={18} color="#fff" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Email</p>
                  <p className="text-text-primary">{contactContent.email}</p>
                </div>
              </a>
            )}

            {contactContent.whatsapp && (
              <a
                href={contactContent.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 bg-white border border-border-default rounded-md p-4"
              >
                <div className="w-12 h-12 rounded-md bg-gray-950 text-white flex items-center justify-center">
                  <Icon icon="Phone" size={18} color="#fff" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Whatsapp</p>
                  <p className="text-text-primary">{contactContent.phone}</p>
                </div>
              </a>
            )}

            {contactContent.location && (
              <a
                href={contactContent.location}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 bg-white border border-border-default rounded-md p-4"
              >
                <div className="w-12 h-12 rounded-md bg-gray-950 text-white flex items-center justify-center">
                  <Icon icon="MapPin" size={18} color="#fff" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Localização</p>
                  <p className="text-text-primary">Aurora, CE</p>
                </div>
              </a>
            )}
          </div>

          <div>
            <p className="text-text-primary font-semibold mb-3">Me siga</p>
            <div className="flex items-center gap-3">
              {contactContent.github && (
                <IconLink
                  icon="Github"
                  size={20}
                  href={contactContent.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-gray-100 p-3 rounded-md"
                />
              )}
              {contactContent.linkedin && (
                <IconLink
                  icon="Linkedin"
                  size={20}
                  href={contactContent.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-gray-100 p-3 rounded-md"
                />
              )}
              {contactContent.instagram && (
                <IconLink
                  icon="Instagram"
                  size={20}
                  href={contactContent.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-gray-100 p-3 rounded-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
