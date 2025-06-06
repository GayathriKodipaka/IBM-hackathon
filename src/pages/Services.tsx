import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  CreditCard,
  Car,
  Home,
  Users,
  Briefcase,
  Clock,
  Star,
  ArrowRight,
  Filter,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const serviceCategories = [
    { name: "All Services", count: 24, active: true },
    { name: "Permits & Licenses", count: 8, active: false },
    { name: "Tax Services", count: 5, active: false },
    { name: "Transportation", count: 4, active: false },
    { name: "Housing", count: 3, active: false },
    { name: "Business", count: 4, active: false },
  ];

  const services = [
    {
      id: 1,
      title: "Parking Permit Application",
      description: "Apply for residential or business parking permits",
      category: "Transportation",
      icon: Car,
      estimatedTime: "3-5 business days",
      rating: 4.8,
      popular: true,
      online: true,
    },
    {
      id: 2,
      title: "Property Tax Payment",
      description: "Pay annual property taxes online",
      category: "Tax Services",
      icon: CreditCard,
      estimatedTime: "Immediate",
      rating: 4.9,
      popular: true,
      online: true,
    },
    {
      id: 3,
      title: "Business License Renewal",
      description: "Renew your business operating license",
      category: "Business",
      icon: Briefcase,
      estimatedTime: "5-7 business days",
      rating: 4.6,
      popular: false,
      online: true,
    },
    {
      id: 4,
      title: "Building Permit",
      description: "Apply for residential or commercial building permits",
      category: "Housing",
      icon: Home,
      estimatedTime: "10-15 business days",
      rating: 4.4,
      popular: false,
      online: false,
    },
    {
      id: 5,
      title: "Marriage Certificate",
      description: "Request official marriage certificate copies",
      category: "Permits & Licenses",
      icon: Users,
      estimatedTime: "2-3 business days",
      rating: 4.7,
      popular: true,
      online: true,
    },
    {
      id: 6,
      title: "Water Bill Payment",
      description: "Pay monthly water and sewer charges",
      category: "Utilities",
      icon: CreditCard,
      estimatedTime: "Immediate",
      rating: 4.8,
      popular: true,
      online: true,
    },
    {
      id: 7,
      title: "Voter Registration",
      description: "Register to vote or update registration",
      category: "Civic",
      icon: Users,
      estimatedTime: "1-2 business days",
      rating: 4.9,
      popular: false,
      online: true,
    },
    {
      id: 8,
      title: "Trash Collection Schedule",
      description: "View and update trash collection preferences",
      category: "Utilities",
      icon: FileText,
      estimatedTime: "Immediate",
      rating: 4.5,
      popular: false,
      online: true,
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-government-900 mb-2">
            Government Services
          </h1>
          <p className="text-government-600">
            Access all city services in one convenient location
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-government-400 h-4 w-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={
                  category.active ? "bg-civic-600 hover:bg-civic-700" : ""
                }
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Services Banner */}
        <Card className="mb-8 border-civic-200 bg-civic-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-government-900 mb-2">
                  Most Popular Services
                </h2>
                <p className="text-government-600">
                  Quick access to the services citizens use most
                </p>
              </div>
              <Star className="h-8 w-8 text-civic-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {services
                .filter((service) => service.popular)
                .slice(0, 3)
                .map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="flex items-center p-4 bg-white rounded-lg border"
                    >
                      <div className="w-10 h-10 bg-civic-100 rounded-lg flex items-center justify-center mr-3">
                        <Icon className="w-5 h-5 text-civic-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-government-900 text-sm">
                          {service.title}
                        </h3>
                        <p className="text-xs text-government-600">
                          {service.estimatedTime}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-government-400" />
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-civic-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-civic-600" />
                    </div>
                    <div className="flex gap-1">
                      {service.popular && (
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                          Popular
                        </Badge>
                      )}
                      {service.online && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Online
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-government-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.estimatedTime}
                      </div>
                      <div className="flex items-center text-government-600">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                        {service.rating}
                      </div>
                    </div>

                    <Badge variant="outline" className="w-fit">
                      {service.category}
                    </Badge>

                    <Button className="w-full bg-civic-600 hover:bg-civic-700">
                      {service.online ? "Start Online" : "Schedule Appointment"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-government-900 mb-2">
                Need Help Finding a Service?
              </h2>
              <p className="text-government-600 mb-6">
                Our AI assistant can help you find the right service or answer
                questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-civic-600 hover:bg-civic-700">
                  <a href="/chat">
                    Ask AI Assistant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline">Contact Support</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
