import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users,
  BarChart3,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      title: "AI-Powered Communication",
      description:
        "Intelligent chatbots and automated responses for citizen queries",
      icon: MessageSquare,
      features: [
        "24/7 automated support",
        "Multi-language processing",
        "Context-aware responses",
        "Escalation to human agents",
      ],
    },
    {
      title: "Citizen Engagement Portal",
      description: "Centralized platform for all government interactions",
      icon: Users,
      features: [
        "Service request tracking",
        "Document submission",
        "Appointment scheduling",
        "Community feedback",
      ],
    },
    {
      title: "Smart Analytics",
      description: "Data-driven insights for better governance decisions",
      icon: BarChart3,
      features: [
        "Sentiment analysis",
        "Engagement metrics",
        "Performance dashboards",
        "Predictive insights",
      ],
    },
    {
      title: "Multi-Language Support",
      description: "Inclusive access for all citizens regardless of language",
      icon: Globe,
      features: [
        "Real-time translation",
        "Cultural adaptation",
        "Accessibility features",
        "Voice recognition",
      ],
    },
    {
      title: "Enterprise Security",
      description: "Government-grade security and compliance",
      icon: Shield,
      features: [
        "End-to-end encryption",
        "GDPR compliance",
        "Audit trails",
        "Role-based access",
      ],
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native platform built for government scale",
      icon: Zap,
      features: [
        "Auto-scaling",
        "99.9% uptime SLA",
        "Global deployment",
        "Disaster recovery",
      ],
    },
  ];

  const benefits = [
    "Reduce response times by up to 80%",
    "Improve citizen satisfaction scores",
    "Automate routine administrative tasks",
    "Enable proactive governance",
    "Increase transparency and accountability",
    "Support multiple communication channels",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-government-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-government-600 max-w-3xl mx-auto">
              Comprehensive tools to transform how governments engage with
              citizens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-government-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-government-900 mb-6">
                Transform Your Government Operations
              </h2>
              <p className="text-lg text-government-600 mb-8">
                CitizenAI empowers governments to meet modern citizen
                expectations through intelligent automation, data-driven
                insights, and seamless digital experiences.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-civic-600 mt-0.5 flex-shrink-0" />
                    <span className="text-government-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-civic-600 hover:bg-civic-700"
              >
                <Link to="/dashboard">
                  Explore Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-government-900 mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-civic-600 mb-2">
                    80%
                  </div>
                  <div className="text-sm text-government-600">
                    Faster Response
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-civic-600 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-government-600">
                    Satisfaction Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-civic-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-government-600">
                    Availability
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-civic-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-government-600">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-civic-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Citizen Engagement?
          </h2>
          <p className="text-xl text-civic-100 mb-8">
            Join forward-thinking governments already using CitizenAI to build
            stronger relationships with their citizens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/dashboard">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-civic-600"
            >
              <Link to="/analytics">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-government-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-civic-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CA</span>
                </div>
                <span className="text-xl font-bold">CitizenAI</span>
              </div>
              <p className="text-government-400">
                Intelligent citizen engagement platform for modern governments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-government-400">
                <li>
                  <Link to="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/chat" className="hover:text-white">
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="hover:text-white">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-government-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-government-400">
                <li>support@citizenai.gov</li>
                <li>1-800-CITIZEN</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-government-800 mt-8 pt-8 text-center text-government-400">
            <p>&copy; 2024 CitizenAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
