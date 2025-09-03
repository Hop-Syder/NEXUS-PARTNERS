import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Users, Award, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  const slogan = "Connecter les talents, propulser les idées.";

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < slogan.length) {
        setTypedText(slogan.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Clients satisfaits' },
    { icon: <Award className="w-8 h-8" />, number: '1200+', label: 'Projets réalisés' },
    { icon: <Star className="w-8 h-8" />, number: '98%', label: 'Taux de satisfaction' },
    { icon: <Target className="w-8 h-8" />, number: '24h', label: 'Temps de réponse' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - FOND BLANC/NOIR SELON MODE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-light">
        {/* Animated background elements - SUBTILS */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-lg"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-yellow-300/15 rounded-full blur-lg"></div>
          <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-lg"></div>
          <div className="floating-element absolute bottom-40 right-1/3 w-28 h-28 bg-yellow-400/12 rounded-full blur-lg"></div>
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto text-center px-6 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Titre principal - NEXUS EN NOIR/BLANC, PARTNERS EN JAUNE */}
          <h1 className="page-title mb-8">
            <span className="text-black dark:text-white">Nexus</span>
            <span className="text-yellow-500"> Partners</span>
          </h1>
          
          {/* Slogan avec animation typing - PARAGRAPHE */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-medium mb-4 min-h-[3rem] flex items-center justify-center">
              "{typedText}<span className="blinking-cursor">|</span>"
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Votre cabinet spécialisé dans la mise en relation stratégique entre entreprises et solutions innovantes
            </p>
          </div>

          {/* Boutons CTA - STYLE SIMPLE */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="neon-button group px-8 py-4 text-lg font-medium">
              <Link to="/contact" className="flex items-center gap-2">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="glass-button group px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Voir la présentation
            </Button>
          </div>

          {/* Stats - CARDES SIMPLES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="text-yellow-500 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-yellow-500 counter-animation mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Preview - SECTION MUTED */}
      <section className="py-20 section-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Nos Domaines d'Excellence
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Découvrez comment nous transformons vos défis en opportunités avec nos services spécialisés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Recrutement & Talents',
                description: 'Profils qualifiés en développement, data science et gestion',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Création Digitale', 
                description: 'Sites web, applications et solutions sur mesure',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Installation Électrique',
                description: 'Installations, mise en conformité et maintenance',
                icon: <Award className="w-8 h-8" />
              },
              {
                title: 'Intelligence Artificielle',
                description: 'Automatisation et solutions technologiques innovantes',
                icon: <Star className="w-8 h-8" />
              }
            ].map((service, index) => (
              <Card key={index} className="glass-card hover-lift service-card group">
                <CardContent className="p-6 text-center">
                  <div className="text-yellow-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="card-title mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="neon-button">
              <Link to="/services" className="flex items-center gap-2">
                Découvrir tous nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;