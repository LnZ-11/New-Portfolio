"use client"
import { useState } from "react";
import { useForm,Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { User, Mail, MessageSquare, Phone, Send, Loader2, CheckCircle, XCircle } from "lucide-react";


export default function ContactForm() {
    // Define the schema for the form with zod
    const formSchema = z.object({
      name: z.string().nonempty(),
      email: z.string().email("invalide format").nonempty(),
      phone: z.string().nonempty(),
      message: z.string().nonempty(),
    });
    // typing the form data
  type FormData = z.infer<typeof formSchema>;
    // use react-hook-form
  const { register, handleSubmit, formState:{errors,isSubmitting},control} = useForm<FormData>({resolver:zodResolver(formSchema)});
    // logging results
  const [feedback, setFeedback] = useState("");
  const onSubmit = async (data: FormData) => {
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur d'envoi");
      setFeedback("✅ Email envoyé !");
    } catch (error) {
      setFeedback("❌ Erreur lors de l'envoi");
      console.log(error);
    }
  };
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
            Me Contacter
          </h2>
          <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
            N&apos;hésitez pas à me contacter pour discuter de vos projets ou pour toute question
          </p>
        </div>

        <div className="card max-w-2xl mx-auto p-8 sm:p-12">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-primary-foreground">
                  <User className="w-4 h-4 mr-2" />
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1 flex items-center">
                    <XCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1 flex items-center">
                    <XCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Téléphone
              </label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="fr"
                    inputClassName="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-primary-foreground">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Votre message..."
              />
              <MessageSquare className="absolute left-3 top-12 w-4 h-4 text-muted-foreground pointer-events-none" />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Feedback */}
            {feedback && (
              <div className={`text-center p-4 rounded-lg ${
                feedback.includes("✅")
                  ? "bg-green-500/10 text-green-600 border border-green-500/20"
                  : "bg-red-500/10 text-red-500 border border-red-500/20"
              }`}>
                <p className="font-medium flex items-center justify-center">
                  {feedback.includes("✅") ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 mr-2" />
                  )}
                  {feedback}
                </p>
              </div>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-5 w-5" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}