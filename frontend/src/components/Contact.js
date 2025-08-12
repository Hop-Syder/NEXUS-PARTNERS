import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normale'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const required = ['name', 'email', 'service', 'message'];
    const missing = required.filter(field => !formData[field].trim());
    
    if (missing.length > 0) {
      toast({
        title: "Champs manquants",
        description: `Veuillez remplir: ${missing.join(', ')}`,
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez saisir une adresse email valide",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulation d'envoi EmailJS (remplacer par vraie intégration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // PLACEHOLDER: EmailJS integration
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons sous 24h maximum",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normale'
      });

    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: "Veuillez réessayer ou nous contacter directement",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Recrutement & Placement de Talents",
    "Création de Sites Web & Applications",
    "Installation Électrique & Maintenance",
    "Intelligence Artificielle & Solutions Technologiques",
    "Consultation Stratégique",
    "Autre (préciser dans le message)"
  ];

  const budgets = [
    "< 5 000 €",
    "5 000 - 15 000 €",
    "15 000 - 50 000 €",
    "50 000 - 100 000 €",
    "> 100 000 €",
    "À discuter"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className={`max-w-7xl mx-auto px-6 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-nexus-blue mb-6 neon-text">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prêt à transformer vos idées en réalité ? Notre équipe d'experts vous accompagne dans votre projet
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-nexus-blue flex items-center">
                    <Send className="w-6 h-6 mr-3 text-nexus-gold" />
                    Demande de Projet
                  </CardTitle>
                  <p className="text-gray-600">
                    Décrivez-nous votre projet et recevez un devis personnalisé sous 24h
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-nexus-blue mb-2">
                          Nom complet *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Votre nom complet"
                          className="form-input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-nexus-blue mb-2">
                          Email professionnel *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre.email@entreprise.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-nexus-blue mb-2">
                          Téléphone
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+33 1 23 45 67 89"
                          className="form-input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-nexus-blue mb-2">
                          Entreprise
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Nom de votre entreprise"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Détails du projet */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-nexus-blue mb-2">
                          Service souhaité *
                        </label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="form-input">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-nexus-blue mb-2">
                          Budget estimé
                        </label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="form-input">
                            <SelectValue placeholder="Sélectionnez une fourchette" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-nexus-blue mb-2">
                        Urgence du projet
                      </label>
                      <div className="flex gap-4">
                        {[
                          { value: 'faible', label: 'Faible', color: 'bg-green-100 text-green-800' },
                          { value: 'normale', label: 'Normale', color: 'bg-blue-100 text-blue-800' },
                          { value: 'elevee', label: 'Élevée', color: 'bg-orange-100 text-orange-800' },
                          { value: 'urgente', label: 'Urgente', color: 'bg-red-100 text-red-800' }
                        ].map((urgency) => (
                          <Badge
                            key={urgency.value}
                            onClick={() => handleInputChange('urgency', urgency.value)}
                            className={`cursor-pointer transition-all duration-200 ${
                              formData.urgency === urgency.value 
                                ? urgency.color 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {urgency.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-nexus-blue mb-2">
                        Description du projet *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                        rows={6}
                        className="form-input"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full neon-button py-4 text-lg group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl text-nexus-blue">
                    Informations de Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-nexus-blue rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-nexus-blue">Email</p>
                      <p className="text-gray-600">contact@nexuspartners.fr</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-nexus-gold rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-nexus-blue">Téléphone</p>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-nexus-blue rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-nexus-blue">Adresse</p>
                      <p className="text-gray-600">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-nexus-gold rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-nexus-blue">Horaires</p>
                      <p className="text-gray-600">
                        Lun - Ven : 9h - 18h<br />
                        Sam : 10h - 16h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <CheckCircle className="w-8 h-8 text-nexus-gold" />
                    <div>
                      <p className="font-semibold text-nexus-blue">Réponse Garantie</p>
                      <p className="text-sm text-gray-600">Sous 24h maximum</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Notre équipe s'engage à vous répondre dans les plus brefs délais avec un devis détaillé.
                  </p>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-nexus-gold">98%</div>
                    <p className="text-sm text-gray-600">
                      de nos clients recommandent nos services
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-nexus-gold rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-nexus-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions les plus courantes de nos prospects
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Combien de temps faut-il pour recevoir un devis ?",
                answer: "Nous nous engageons à vous fournir un devis détaillé sous 24h maximum. Pour les projets complexes, nous pouvons organiser un appel de découverte dans les 48h."
              },
              {
                question: "Proposez-vous un accompagnement post-livraison ?",
                answer: "Oui, tous nos projets incluent une période de garantie et nous proposons des contrats de maintenance adaptés à vos besoins."
              },
              {
                question: "Comment se déroule le processus de collaboration ?",
                answer: "Nous commençons par une phase de découverte, puis nous établissons un planning détaillé avec des points d'étape réguliers pour assurer votre satisfaction."
              },
              {
                question: "Travaillez-vous avec des entreprises de toutes tailles ?",
                answer: "Absolument ! Nous adaptons notre approche et nos solutions aux besoins spécifiques des TPE, PME et grandes entreprises."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-nexus-blue mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-nexus-gold" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;