"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,  // nouveau champ
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!     // ta clé publique EmailJS
      );

      alert(`Merci ${formData.name}, votre message a été envoyé !`);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contactez-nous</h1>
      <p className="mb-8 sm:mb-12 text-center max-w-lg text-gray-700">
        Vous avez une question ou voulez vous inscrire à nos cours ? Envoyez-nous un message et nous vous répondrons rapidement.
      </p>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} className="border border-gray-300 p-3 rounded w-full" required />
          <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} className="border border-gray-300 p-3 rounded w-full" required />
          <input
            type="tel"
            name="phone"
            placeholder="Votre téléphone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
            pattern="^\d{10}$"
            title="Veuillez entrer un numéro de téléphone valide à 10 chiffres"
          />

          <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows={5} className="border border-gray-300 p-3 rounded w-full resize-none" required />
          <button type="submit" className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition w-full sm:w-auto">Envoyer</button>
        </form>

        {/* Map */}
        <div className="flex flex-col gap-4 justify-center bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Nous npm trouver</h2>
          <p>Adresse: 95 Bd Mohamed 5 Casablanca</p>
          <div className="w-full h-64 sm:h-80 mt-4 rounded overflow-hidden shadow-inner">
            <iframe
              title="Wijhati Center Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-7.616123!3d33.595029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d30f9523da1d%3A0xb15e2d185ca391ec!2sWijhati%20Center!5e0!3m2!1sfr!2sma!4v1690000000000!5m2!1sfr!2sma"
              width="100%" height="100%" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=33.595029,-7.6140052" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition text-center">
            Voir sur Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
