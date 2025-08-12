import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { services } from '../mock';
import { Users, Monitor, Zap, Brain, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users className="w-8 h-8" />;
      case 'Monitor': return <Monitor className="w-8 h-8" />;
      case 'Zap': return <Zap className="w-8 h-8" />;
      case 'Brain': return <Brain className="w-8 h-8" />;
      default: return <Users className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className={`max-w-7xl mx-auto px-6 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-nexus-blue mb-6 neon-text">
            Nos Services d'Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos quatre domaines d'expertise pour propulser votre entreprise vers le succès
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.id} className={`glass-card hover-lift transform transition-all duration-500 delay-${index * 100} group`}>
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-nexus-gold group-hover:text-nexus-blue transition-colors duration-300 group-hover:scale-110 transform">
                      {getIcon(service.icon)}
                    </div>
                    <CardTitle className="text-2xl text-nexus-blue group-hover:text-nexus-gold transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-nexus-blue mb-3">Nos Spécialités :</h4>
                    <div className="grid gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-nexus-gold flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="process">
                      <AccordionTrigger className="text-nexus-blue font-medium">
                        Notre Processus
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pt-2">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-nexus-gold rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-gray-700 text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Button className="w-full neon-button group">
                    Demander un devis
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-nexus-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Notre Approche Méthodique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de chaque projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analyse & Audit',
                description: 'Compréhension approfondie de vos besoins et contraintes'
              },
              {
                step: '02',
                title: 'Stratégie & Planification',
                description: 'Élaboration d\'une stratégie sur mesure et planification détaillée'
              },
              {
                step: '03',
                title: 'Exécution & Suivi',
                description: 'Mise en œuvre rigoureuse avec suivi temps réel des progrès'
              },
              {
                step: '04',
                title: 'Livraison & Support',
                description: 'Livraison de qualité avec accompagnement post-projet'
              }
            ].map((phase, index) => (
              <Card key={index} className="glass-card hover-lift text-center group">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-nexus-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-nexus-blue mb-3 group-hover:text-nexus-gold transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-nexus-blue mb-8">
                Pourquoi Choisir Nexus Partners ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expertise Multidisciplinaire',
                    description: 'Une équipe d\'experts couvrant tous les domaines technologiques et techniques'
                  },
                  {
                    title: 'Approche Personnalisée',
                    description: 'Solutions sur mesure adaptées à vos besoins spécifiques et contraintes'
                  },
                  {
                    title: 'Qualité Garantie',
                    description: 'Engagement sur la qualité avec garanties et support post-livraison'
                  },
                  {
                    title: 'Réactivité Exceptionnelle',
                    description: 'Réponse sous 24h et accompagnement réactif tout au long du projet'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-nexus-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-nexus-blue mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-gold mb-2">98%</div>
                    <p className="text-nexus-blue font-medium">Taux de satisfaction client</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-gold mb-2">1200+</div>
                    <p className="text-nexus-blue font-medium">Projets livrés avec succès</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-gold mb-2">24h</div>
                    <p className="text-nexus-blue font-medium">Temps de réponse garanti</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nexus-blue to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Lancer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez nos experts pour un audit gratuit et un devis personnalisé
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nexus-gold text-nexus-blue hover:bg-yellow-400 px-8 py-4">
              Consultation Gratuite
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nexus-blue px-8 py-4">
              Télécharger Notre Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;