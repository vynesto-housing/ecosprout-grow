// About page for EcoSprout Packaging
import { useState, useEffect } from 'react';
import { Leaf, Users, Award, Target, Heart, Globe, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TeamMember } from '@/types';
import { getTeamMembers } from '@/lib/apiClient';
import teamHeroImage from '@/assets/team-hero.jpg';

export const About = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await getTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const values = [
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'We believe in protecting our planet for future generations through sustainable business practices and innovative eco-friendly solutions.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our success is measured by the positive impact we create for our customers, partners, and the communities we serve.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every product meets the highest standards for durability, functionality, and environmental safety.'
    },
    {
      icon: Target,
      title: 'Innovation Leadership',
      description: 'We continuously push the boundaries of sustainable packaging technology to deliver cutting-edge solutions.'
    }
  ];

  const stats = [
    { value: '2019', label: 'Founded' },
    { value: '500+', label: 'Happy Clients' },
    { value: '10M+', label: 'Packages Delivered' },
    { value: '95%', label: 'Carbon Reduction' }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'EcoSprout Packaging was founded with a mission to revolutionize the packaging industry through sustainable solutions.'
    },
    {
      year: '2020',
      title: 'First Product Line',
      description: 'Launched our flagship biodegradable shipping boxes, receiving industry recognition for innovation and sustainability.'
    },
    {
      year: '2021',
      title: 'Major Certifications',
      description: 'Achieved FSC, BPI, and ASTM certifications, establishing ourselves as a trusted leader in sustainable packaging.'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded our team and product line, serving over 300 businesses across North America.'
    },
    {
      year: '2023',
      title: 'Innovation Lab',
      description: 'Opened our dedicated R&D facility to develop next-generation compostable materials.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Launched international operations and partnerships to bring sustainable packaging worldwide.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 hero-bg"
        style={{ backgroundImage: `url(${teamHeroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Pioneering Sustainable Packaging Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Founded in 2019, EcoSprout Packaging is dedicated to transforming the packaging industry 
              through innovative, biodegradable solutions that protect both your products and our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To revolutionize the packaging industry by providing innovative, sustainable solutions 
                that protect products while preserving our environment for future generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that businesses shouldn't have to choose between quality and sustainability. 
                Our products prove that eco-friendly packaging can be both protective and profitable.
              </p>
            </div>
            <div className="gradient-card p-8 rounded-lg shadow-large">
              <div className="flex items-center mb-6">
                <div className="gradient-primary p-3 rounded-full mr-4">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Global Impact
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and shape the way we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="gradient-card p-8 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 text-center group">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup to sustainability leader - here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <div className="gradient-card p-6 rounded-lg shadow-medium hover:shadow-large transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium z-10">
                  </div>
                  
                  <div className="lg:w-1/2">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals dedicated to sustainable innovation.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="gradient-card p-6 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Partner with us to create a more sustainable future through innovative packaging solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Started Today
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};