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

const Chat = () => {
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

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-12rem)]">
              <CardHeader className="border-b border-government-200">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-civic-600" />
                      CitizenAI Assistant
                    </CardTitle>
                    <CardDescription>
                      Your intelligent guide to government services
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Assistant Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-civic-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-civic-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-government-900 text-sm">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-government-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg border border-government-200 hover:bg-government-50 transition-colors text-sm"
                  >
                    {question}
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-civic-600 mb-1">
                    2,847
                  </div>
                  <div className="text-xs text-government-600">
                    Questions Answered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-civic-600 mb-1">
                    1.2s
                  </div>
                  <div className="text-xs text-government-600">
                    Avg Response Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-civic-600 mb-1">
                    96%
                  </div>
                  <div className="text-xs text-government-600">
                    Satisfaction Rate
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="border-civic-200 bg-civic-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-civic-600" />
                  Need Human Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-government-600 mb-4">
                  If the AI can't help, connect with our support team
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Phone:</span> 1-800-CITIZEN
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    support@cityai.gov
                  </div>
                  <div>
                    <span className="font-medium">Hours:</span> Mon-Fri 8AM-6PM
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
