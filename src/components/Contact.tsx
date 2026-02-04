"use client";

import { FunctionComponent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Contact: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "thiago-dosantos@outlook.com",
      href: "mailto:thiago-dosantos@outlook.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "(43) 99179-0068",
      href: "tel:+5543991790068"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+55 43 99179-0068",
      href: "https://wa.me/5543991790068"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Londrina, Paraná - Brazil",
      href: "https://maps.google.com/?q=Londrina+Paraná+Brazil"
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-16 md:py-24"
      style={{
        background: `linear-gradient(
          to bottom,
          transparent 0%,
          rgba(249, 250, 251, 0.3) 10%,
          rgba(249, 250, 251, 0.6) 20%,
          rgba(249, 250, 251, 0.8) 30%,
          rgba(249, 250, 251, 0.9) 40%,
          rgba(249, 250, 251, 1) 50%,
          rgba(249, 250, 251, 0.9) 60%,
          rgba(249, 250, 251, 0.8) 70%,
          rgba(249, 250, 251, 0.6) 80%,
          rgba(249, 250, 251, 0.3) 90%,
          transparent 100%
        )`
      }}
    >
      {/* Versão para modo escuro */}
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(17, 24, 39, 0.3) 10%,
            rgba(17, 24, 39, 0.6) 20%,
            rgba(17, 24, 39, 0.8) 30%,
            rgba(17, 24, 39, 0.9) 40%,
            rgba(17, 24, 39, 1) 50%,
            rgba(17, 24, 39, 0.9) 60%,
            rgba(17, 24, 39, 0.8) 70%,
            rgba(17, 24, 39, 0.6) 80%,
            rgba(17, 24, 39, 0.3) 90%,
            transparent 100%
          )`
        }}
      />
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects,
              or potential collaborations. Don't hesitate to get in touch!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-[#F63D3C] text-white p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{item.title}</h4>
                    <a
                      href={item.href}
                      target={item.title === "WhatsApp" || item.title === "Location" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-[#F63D3C] transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5543991790068"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Message me on WhatsApp</span>
            </a>

            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-2">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM (BRT)
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#F63D3C] hover:bg-[#d63433]"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};