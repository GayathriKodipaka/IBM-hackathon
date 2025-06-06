import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  suggestions?: string[];
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your CitizenAI assistant. I can help you with government services, answer questions about city policies, and guide you through various processes. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
      suggestions: [
        "How do I apply for a parking permit?",
        "What are the property tax rates?",
        "When is the next city council meeting?",
        "How do I report a pothole?",
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse.content,
        sender: "ai",
        timestamp: new Date(),
        suggestions: aiResponse.suggestions,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (
    userMessage: string,
  ): { content: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();

    if (message.includes("parking permit")) {
      return {
        content:
          "To apply for a parking permit, you can:\n\n1. Visit our online portal in the Services section\n2. Fill out the parking permit application form\n3. Upload required documents (proof of residency, vehicle registration)\n4. Pay the application fee ($25 for residential, $75 for business)\n5. Processing typically takes 3-5 business days\n\nWould you like me to direct you to the application form?",
        suggestions: [
          "Take me to the parking permit form",
          "What documents do I need?",
          "How much does it cost?",
          "How long does approval take?",
        ],
      };
    }

    if (message.includes("property tax")) {
      return {
        content:
          "Property tax information:\n\n• Current rate: 1.2% of assessed value\n• Due dates: April 30th and October 31st\n• Payment methods: Online, mail, or in-person\n• Assessment appeals: Must be filed by March 1st\n• Senior citizen discount: Available for residents 65+\n\nYou can view your current property tax bill and payment history in the Services section.",
        suggestions: [
          "View my property tax bill",
          "How to appeal assessment",
          "Senior citizen discount info",
          "Payment options",
        ],
      };
    }

    if (message.includes("city council") || message.includes("meeting")) {
      return {
        content:
          "Next City Council Meeting:\n\n📅 Date: December 20, 2024\n🕕 Time: 6:00 PM\n📍 Location: City Hall (Main Chamber)\n💻 Virtual option: Available via Zoom\n\nAgenda items:\n• Community center proposal\n• Budget amendments\n• Public comments (6:30-7:00 PM)\n\nYou can access meeting materials and join virtually through our platform.",
        suggestions: [
          "Join virtual meeting",
          "View meeting agenda",
          "Submit public comment",
          "Past meeting minutes",
        ],
      };
    }

    if (message.includes("pothole") || message.includes("report")) {
      return {
        content:
          "To report a pothole or street issue:\n\n1. Use our online reporting form\n2. Provide the exact location (address or intersection)\n3. Upload a photo if possible\n4. Include description of the issue\n5. You'll receive a tracking number for follow-up\n\nAverage response time: 2-3 business days for assessment, 5-10 days for repair depending on severity.",
        suggestions: [
          "Report a pothole now",
          "Track existing report",
          "Emergency road issues",
          "Other infrastructure problems",
        ],
      };
    }

    return {
      content:
        "I can help you with various government services including:\n\n• Permits and licenses\n• Tax payments and information\n• City meetings and events\n• Service requests and reporting\n• General city information\n\nCould you tell me more specifically what you're looking for? I'm here to make your interaction with city services as smooth as possible!",
      suggestions: [
        "Apply for permits",
        "Pay taxes online",
        "Report an issue",
        "Find city contact info",
      ],
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.sender === "user" ? "justify-end" : "justify-start",
            )}
          >
            {message.sender === "ai" && (
              <div className="w-8 h-8 bg-civic-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}

            <div
              className={cn(
                "max-w-[80%] space-y-2",
                message.sender === "user" ? "items-end" : "items-start",
              )}
            >
              <Card
                className={cn(
                  "p-4",
                  message.sender === "user"
                    ? "bg-civic-600 text-white"
                    : "bg-white border-government-200",
                )}
              >
                <p className="whitespace-pre-line text-sm leading-relaxed">
                  {message.content}
                </p>
              </Card>

              {message.suggestions && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {message.suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs h-8"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}

              {message.sender === "ai" && (
                <div className="flex items-center gap-2 text-xs text-government-500">
                  <span>{message.timestamp.toLocaleTimeString()}</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ThumbsUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ThumbsDown className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>

            {message.sender === "user" && (
              <div className="w-8 h-8 bg-government-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-civic-600 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <Card className="p-4 bg-white border-government-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-government-400 rounded-full animate-bounce" />
                <div
                  className="w-2 h-2 bg-government-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="w-2 h-2 bg-government-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-government-200 p-4">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me anything about city services..."
            onKeyPress={(e) =>
              e.key === "Enter" && handleSendMessage(inputMessage)
            }
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage(inputMessage)}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-civic-600 hover:bg-civic-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 mt-2 text-xs text-government-500">
          <Sparkles className="w-3 h-3" />
          <span>
            AI-powered responses • Available 24/7 • Multilingual support
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
