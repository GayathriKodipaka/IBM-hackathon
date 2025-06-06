import React, { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import ChatInterface from "@/components/ChatInterface";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Globe, Clock, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get help anytime, day or night",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support in 50+ languages",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Get answers in seconds",
  },
];

const commonQuestions = [
  "How do I apply for a business license?",
  "What are the current property tax rates?",
  "When is the next city council meeting?",
  "How do I report a code violation?",
  "Where can I pay my water bill?",
  "How do I register to vote?",
];

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="w-8 h-8 bg-civic-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-4 h-4 text-civic-600" aria-hidden="true" />
    </div>
    <div>
      <h3 className="font-medium text-government-900 text-sm">{title}</h3>
      <p className="text-xs text-government-600">{description}</p>
    </div>
  </div>
);

const QuestionButton = ({ question, isSelected, onClick }) => (
  <button
    type="button"
    aria-pressed={isSelected}
    onClick={onClick}
    className={`w-full text-left p-3 rounded-lg border border-government-200 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-civic-600 ${
      isSelected ? "bg-government-100" : "hover:bg-government-50"
    }`}
  >
    {question}
  </button>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-civic-600 mb-1">{value}</div>
    <div className="text-xs text-government-600">{label}</div>
  </div>
);

const Chat = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = useCallback((question) => {
    setSelectedQuestion(question);
    // TODO: Connect this to ChatInterface to prefill/send question
    console.log("Question clicked:", question);
  }, []);

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <section className="lg:col-span-3" aria-label="Chat with CitizenAI Assistant">
            <Card className="h-[calc(100vh-12rem)] flex flex-col">
              <CardHeader className="border-b border-government-200">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-civic-600" aria-hidden="true" />
                      CitizenAI Assistant
                    </CardTitle>
                    <CardDescription>
                      Your intelligent guide to government services
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      aria-label="Online status indicator"
                    />
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Online
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <div className="flex-1 overflow-hidden">
                <ChatInterface />
              </div>
            </Card>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6" aria-label="Sidebar with features, questions, stats and support">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Assistant Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </CardContent>
            </Card>

            {/* Common Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Questions</CardTitle>
                <CardDescription>
                  Popular topics other citizens ask about
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {commonQuestions.map((question, index) => (
                  <QuestionButton
                    key={index}
                    question={question}
                    isSelected={selectedQuestion === question}
                    onClick={() => handleQuestionClick(question)}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 grid grid-cols-3">
                <StatItem value="2,847" label="Questions Answered" />
                <StatItem value="1.2s" label="Avg Response Time" />
                <StatItem value="96%" label="Satisfaction Rate" />
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="border-civic-200 bg-civic-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-civic-600" aria-hidden="true" />
                  Need Human Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-government-600 mb-4">
                  If the AI can't help, connect with our support team
                </p>
                <address className="space-y-2 text-sm not-italic">
                  <div>
                    <span className="font-medium">Phone:</span> 1-800-CITIZEN
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:support@cityai.gov" className="underline hover:text-civic-600">
                      support@cityai.gov
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">Hours:</span> Mon-Fri 8AM-6PM
                  </div>
                </address>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chat;
