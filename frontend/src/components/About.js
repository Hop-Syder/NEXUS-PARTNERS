import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { teamMembers } from '../mock';
import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en délivrant des solutions de haute qualité qui dépassent les attentes."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous restons à la pointe des technologies et des tendances pour proposer des solutions innovantes et efficaces."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confiance",
      description: "Nous bâtissons des relations durables basées sur la transparence, la fiabilité et l'engagement mutuel."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et co-créer les meilleures solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className={`max-w-7xl mx-auto px-6 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-nexus-blue mb-6 neon-text">
            À Propos de Nexus Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour transformer vos défis en opportunités de croissance
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-nexus-blue mb-6">Notre Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nexus Partners est un cabinet spécialisé dans la mise en relation stratégique entre entreprises et solutions innovantes. 
                  Notre mission : offrir aux particuliers comme aux organisations les ressources humaines, technologiques et techniques 
                  dont ils ont besoin pour atteindre leurs objectifs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Avec une équipe passionnée et multidisciplinaire, nous combinons expertise, innovation et accompagnement personnalisé 
                  pour créer des partenariats durables.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-nexus-blue rounded-lg flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-nexus-blue">Vision</h3>
                        <p className="text-gray-600">
                          Être le leader européen de la mise en relation stratégique
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-nexus-gold rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-nexus-blue">Mission</h3>
                        <p className="text-gray-600">
                          Connecter les talents et propulser les idées innovantes
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-nexus-blue to-nexus-gold rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-nexus-blue">Engagement</h3>
                        <p className="text-gray-600">
                          Excellence, innovation et partenariats durables
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-nexus-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`glass-card hover-lift transform transition-all duration-500 delay-${index * 100}`}>
                <CardContent className="p-8 text-center">
                  <div className="text-nexus-gold mb-6 flex justify-center animate-pulse">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-nexus-blue mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée et multidisciplinaire au service de votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.id} className={`glass-card hover-lift transform transition-all duration-500 delay-${index * 100} group`}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-nexus-gold group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-nexus-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-nexus-blue mb-2 group-hover:text-nexus-gold transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-nexus-gold font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nexus-blue to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Transformer Vos Projets ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous dès aujourd'hui et découvrez comment nous pouvons vous accompagner dans votre réussite
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-nexus-gold text-nexus-blue font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 hover-lift">
              Planifier un Rendez-vous
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-nexus-blue transition-all duration-300 hover-lift">
              Découvrir Nos Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;