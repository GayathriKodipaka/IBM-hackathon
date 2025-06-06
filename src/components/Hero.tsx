import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-civic-50 to-civic-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-government-900 mb-6">
            Intelligent Citizen
            <span className="text-civic-600"> Engagement</span>
          </h1>
          <p className="text-xl text-government-600 mb-8 max-w-3xl mx-auto">
            CitizenAI transforms government-citizen interactions through
            AI-powered communication, smart notifications, and personalized
            responses. Building trust through transparency and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-civic-600 hover:bg-civic-700"
            >
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/chat">
                Try AI Assistant
                <MessageSquare className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-civic-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-government-900 mb-2">
                AI-Powered Chat
              </h3>
              <p className="text-government-600">
                Get instant answers to government queries with our intelligent
                chatbot
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-civic-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-government-900 mb-2">
                Smart Analytics
              </h3>
              <p className="text-government-600">
                Real-time sentiment analysis and engagement metrics for better
                governance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-civic-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-government-900 mb-2">
                Secure & Trusted
              </h3>
              <p className="text-government-600">
                Enterprise-grade security with transparent and accountable
                processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
