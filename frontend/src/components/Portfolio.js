import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioProjects } from '../mock';
import { ExternalLink, Calendar, User, Code } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['Tous', 'Développement Web', 'Développement Mobile', 'Intelligence Artificielle', 'Électricité'];

  useEffect(() => {
    if (selectedCategory === 'Tous') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className={`max-w-7xl mx-auto px-6 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-nexus-blue mb-6 neon-text">
            Notre Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos réalisations et projets marquants qui témoignent de notre expertise
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`
                  ${selectedCategory === category 
                    ? 'neon-button' 
                    : 'glass-button'
                  }
                  transition-all duration-300 hover-lift
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-nexus-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className={`glass-card hover-lift transform transition-all duration-500 delay-${index * 100} group overflow-hidden`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nexus-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <Button size="sm" className="m-4 bg-nexus-gold text-nexus-blue hover:bg-yellow-400">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-nexus-blue/10 text-nexus-blue">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-nexus-blue mb-2 group-hover:text-nexus-gold transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {project.client}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center mb-2">
                      <Code className="w-4 h-4 mr-2 text-nexus-gold" />
                      <span className="text-sm font-medium text-nexus-blue">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun projet trouvé pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Nos Réalisations en Chiffres</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats concrets qui témoignent de notre engagement envers l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1200+', label: 'Projets Livrés', description: 'Sites web, applications et installations' },
              { number: '98%', label: 'Taux de Satisfaction', description: 'Clients satisfaits de nos services' },
              { number: '500+', label: 'Clients Actifs', description: 'Entreprises qui nous font confiance' },
              { number: '24h', label: 'Temps de Réponse', description: 'Réactivité garantie sur tous projets' }
            ].map((stat, index) => (
              <Card key={index} className="glass-card hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-nexus-gold mb-2 counter-animation">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-nexus-blue mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-nexus-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Études de Cas Détaillées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plongez dans les détails de nos projets les plus innovants
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-nexus-blue rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-nexus-blue group-hover:text-nexus-gold transition-colors">
                      Transformation Digitale ComplèteTechCorp
                    </h3>
                    <p className="text-gray-500">Étude de cas complète</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Découvrez comment nous avons accompagné TechCorp dans sa transformation digitale complète, 
                  de la refonte de leur infrastructure à la création d'une nouvelle plateforme e-commerce.
                </p>
                <Button variant="outline" className="glass-button group">
                  Lire l'étude complète
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-nexus-gold rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-nexus-blue group-hover:text-nexus-gold transition-colors">
                      Recrutement Stratégique pour StartupX
                    </h3>
                    <p className="text-gray-500">Success story</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Comment nous avons aidé StartupX à construire une équipe technique de 20 personnes 
                  en moins de 6 mois, avec un taux de rétention de 95%.
                </p>
                <Button variant="outline" className="glass-button group">
                  Découvrir le processus
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nexus-blue to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Votre Projet, Notre Prochaine Réussite
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les entreprises qui nous font confiance et transformons ensemble vos idées en réalité
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nexus-gold text-nexus-blue hover:bg-yellow-400 px-8 py-4">
              Démarrer Mon Projet
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nexus-blue px-8 py-4">
              Planifier une Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;