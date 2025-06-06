// Updated Services Page with Category Filtering, Deep Linking, Pagination, and Better UX

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
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const category = searchParams.get("category");
    const query = searchParams.get("search");
    if (category) setSelectedCategory(category);
    if (query) setSearchQuery(query);
  }, [searchParams]);

  const serviceCategories = [
  { name: "All Services", count: 24, active: true },
  { name: "Permits & Licenses", count: 7, active: false },
  { name: "Tax Services", count: 1, active: false },
  { name: "Transportation", count: 3, active: false },
  { name: "Housing", count: 2, active: false },
  { name: "Business", count: 1, active: false },
  { name: "Utilities", count: 3, active: false },
  { name: "Civic", count: 7, active: false }
];
  const services = [
  {
    id: 1,
    title: "PAN Card Application",
    description: "Apply for or update PAN card",
    category: "Tax Services",
    icon: CreditCard,
    estimatedTime: "Immediate",
    rating: 4.8,
    popular: true,
    online: true,
    link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
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
    link: "https://www.igroop.com/property-tax-payment", // Replace with your state's official site
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
    link: "https://services.india.gov.in/service/detail/renewal-of-trade-license",
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
    link: "https://services.india.gov.in/service/detail/application-for-marriage-certificate",
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
    link: "https://www.bbmp.gov.in/home",
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
    link: "https://voters.eci.gov.in/",
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
    link: "https://www.swachhbharatmission.gov.in/",
  },
  {
    id: 9,
    title: "Birth Certificate Application",
    description: "Apply for a certified copy of your birth certificate",
    category: "Permits & Licenses",
    icon: FileText,
    estimatedTime: "2-3 business days",
    rating: 4.7,
    popular: true,
    online: true,
    link: "https://crsorgi.gov.in/web/index.php/auth/login",
  },
  {
    id: 10,
    title: "Death Certificate Request",
    description: "Request an official copy of a death certificate",
    category: "Permits & Licenses",
    icon: FileText,
    estimatedTime: "3-5 business days",
    rating: 4.6,
    popular: false,
    online: true,
    link: "https://crsorgi.gov.in/web/index.php/auth/login",
  },
  {
    id: 11,
    title: "Aadhar Card Update",
    description: "Update name, address or phone on your Aadhar card",
    category: "Civic",
    icon: Users,
    estimatedTime: "7-10 business days",
    rating: 4.2,
    popular: true,
    online: false,
  },
  {
    id: 12,
    title: "Electricity Bill Payment",
    description: "Pay your monthly electricity usage charges online",
    category: "Utilities",
    icon: CreditCard,
    estimatedTime: "Immediate",
    rating: 4.8,
    popular: true,
    online: true,
    link: "https://www.bharatbillpay.com/BillPay.aspx",
  },
  {
    id: 13,
    title: "Passport Application",
    description: "Apply or renew your Indian passport",
    category: "Permits & Licenses",
    icon: FileText,
    estimatedTime: "15-20 business days",
    rating: 4.5,
    popular: false,
    online: false,
  },
  {
    id: 14,
    title: "Driving License Renewal",
    description: "Renew your driver’s license or learner’s license",
    category: "Transportation",
    icon: Car,
    estimatedTime: "7-10 business days",
    rating: 4.3,
    popular: true,
    online: true,
    link: "https://sarathi.parivahan.gov.in/",
  },
  {
    id: 15,
    title: "Senior Citizen ID Card",
    description: "Apply for an ID card for senior citizen benefits",
    category: "Civic",
    icon: Users,
    estimatedTime: "5-7 business days",
    rating: 4.6,
    popular: false,
    online: true,
    link: "https://services.india.gov.in/service/detail/senior-citizen-id-card-1",
  },
  {
    id: 16,
    title: "Ration Card Services",
    description: "Apply or update your family ration card",
    category: "Civic",
    icon: FileText,
    estimatedTime: "10-15 business days",
    rating: 4.4,
    popular: false,
    online: false,
  },
  {
    id: 17,
    title: "Land Record Lookup",
    description: "View ownership details of land/property",
    category: "Housing",
    icon: Home,
    estimatedTime: "Immediate",
    rating: 4.6,
    popular: false,
    online: true,
    link: "https://bhulekh.gov.in/",
  },
  {
    id: 18,
    title: "Income Certificate",
    description: "Generate a certificate for income verification",
    category: "Permits & Licenses",
    icon: FileText,
    estimatedTime: "3-5 business days",
    rating: 4.3,
    popular: false,
    online: true,
    link: "https://services.india.gov.in/service/detail/income-certificate-3",
  },
  {
    id: 19,
    title: "Domicile Certificate",
    description: "Apply for proof of residence for state-level benefits",
    category: "Permits & Licenses",
    icon: FileText,
    estimatedTime: "4-6 business days",
    rating: 4.4,
    popular: false,
    online: true,
    link: "https://services.india.gov.in/service/detail/domicile-certificate-2",
  },
  {
    id: 20,
    title: "Pension Services",
    description: "Manage and apply for pensions and related benefits",
    category: "Civic",
    icon: Briefcase,
    estimatedTime: "5-7 business days",
    rating: 4.5,
    popular: false,
    online: true,
    link: "https://pensionersportal.gov.in/",
  },
  {
    id: 21,
    title: "Public Grievance Portal",
    description: "File complaints or feedback on any public services",
    category: "Civic",
    icon: FileText,
    estimatedTime: "2-3 business days",
    rating: 4.2,
    popular: false,
    online: true,
    link: "https://pgportal.gov.in/",
  },
  {
    id: 22,
    title: "E-Challan Payment",
    description: "Pay traffic fines and challans online",
    category: "Transportation",
    icon: Car,
    estimatedTime: "Immediate",
    rating: 4.7,
    popular: true,
    online: true,
    link: "https://echallan.parivahan.gov.in/",
  },
  {
    id: 23,
    title: "Certificate of Residence",
    description: "Proof of address for official purposes",
    category: "Permits & Licenses",
    icon: FileText,
    estimatedTime: "3-4 business days",
    rating: 4.4,
    popular: false,
    online: true,
    link: "https://services.india.gov.in/service/detail/certificate-of-residence",
  },
  {
    id: 24,
    title: "RTI Filing",
    description: "File a Right to Information (RTI) request",
    category: "Civic",
    icon: FileText,
    estimatedTime: "5-7 business days",
    rating: 4.5,
    popular: false,
    online: true,
    link: "https://rtionline.gov.in/",
  },
];

  const filteredServices = services
    .filter((service) =>
      selectedCategory === "All Services"
        ? true
        : service.category === selectedCategory
    )
    .filter(
      (service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, visibleCount);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category, search: searchQuery });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSearchParams({ category: selectedCategory, search: value });
  };

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-government-900 mb-2">
            Government Services
          </h1>
          <p className="text-government-600">
            Access all city services in one convenient location
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-government-400 h-4 w-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.name)}
                size="sm"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

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
                  <CardTitle className="text-lg cursor-pointer hover:underline">
                    {service.title}
                  </CardTitle>
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
                          {service.online ? (
                        <Button asChild className="w-full bg-civic-600 hover:bg-civic-700">
                          <a href={service.link} target="_blank" rel="noopener noreferrer">
                            Start Online
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button className="w-full bg-civic-600 hover:bg-civic-700">
                          Schedule Appointment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}

                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredServices.length < services.length && (
          <div className="mt-8 text-center">
            <Button onClick={() => setVisibleCount((prev) => prev + 6)}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
