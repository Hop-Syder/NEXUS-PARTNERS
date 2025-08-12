import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { testimonials } from '../mock';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-nexus-gold fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className={`max-w-7xl mx-auto px-6 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-nexus-blue mb-6 neon-text">
            Ce Que Disent Nos Clients
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos clients satisfaits qui ont fait confiance à notre expertise
          </p>
        </div>
      </section>

      {/* Main Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <Card className="glass-card mx-4">
                      <CardContent className="p-12 text-center">
                        {/* Quote Icon */}
                        <div className="text-nexus-gold mb-6 flex justify-center">
                          <Quote className="w-12 h-12" />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center space-x-1 mb-6">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Content */}
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto italic">
                          "{testimonial.content}"
                        </p>

                        {/* Client Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-nexus-gold"
                          />
                          <div className="text-center md:text-left">
                            <h3 className="text-xl font-semibold text-nexus-blue">
                              {testimonial.name}
                            </h3>
                            <p className="text-nexus-gold font-medium">
                              {testimonial.role}
                            </p>
                            <Badge variant="secondary" className="mt-2 bg-nexus-blue/10 text-nexus-blue">
                              {testimonial.company}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-nexus-blue/20"
              variant="outline"
            >
              <ChevronLeft className="w-6 h-6 text-nexus-blue" />
            </Button>

            <Button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-nexus-blue/20"
              variant="outline"
            >
              <ChevronRight className="w-6 h-6 text-nexus-blue" />
            </Button>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-nexus-gold scale-125'
                      : 'bg-gray-300 hover:bg-nexus-blue/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-nexus-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Tous Nos Témoignages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection complète des retours de nos clients sur nos différents services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className={`glass-card hover-lift transform transition-all duration-500 delay-${index * 100} group h-full`}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 italic mb-6 flex-grow text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center space-x-4 border-t border-gray-200 pt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-nexus-blue group-hover:text-nexus-gold transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nexus-blue mb-6">Ils Nous Font Confiance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des entreprises de tous secteurs qui témoignent de notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '98%', label: 'Taux de satisfaction', description: 'Client recommandent nos services' },
              { metric: '4.9/5', label: 'Note moyenne', description: 'Basée sur 500+ avis clients' },
              { metric: '500+', label: 'Clients actifs', description: 'Entreprises partenaires' },
              { metric: '95%', label: 'Taux de rétention', description: 'Clients qui renouvellent' }
            ].map((stat, index) => (
              <Card key={index} className="glass-card hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-nexus-gold mb-2">
                    {stat.metric}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nexus-blue to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Faites l'expérience de notre expertise et rejoignez les centaines d'entreprises qui nous font confiance
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nexus-gold text-nexus-blue hover:bg-yellow-400 px-8 py-4 group">
              Commencer Mon Projet
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nexus-blue px-8 py-4">
              Demander un Devis Gratuit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;