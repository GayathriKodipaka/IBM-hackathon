import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  ThumbsUp,
  AlertCircle,
  BarChart3,
  Calendar,
  Download,
  Filter,
} from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Interactions",
      value: "12,847",
      change: "+18.2%",
      changeType: "positive",
      icon: MessageSquare,
      description: "vs last month",
    },
    {
      title: "Active Citizens",
      value: "8,923",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
      description: "unique users this month",
    },
    {
      title: "Avg Response Time",
      value: "2.3m",
      change: "-24.1%",
      changeType: "positive",
      icon: Clock,
      description: "improvement this month",
    },
    {
      title: "Satisfaction Score",
      value: "4.8/5",
      change: "+0.3",
      changeType: "positive",
      icon: ThumbsUp,
      description: "vs last month",
    },
  ];

  const topServices = [
    { name: "Parking Permits", requests: 1234, satisfaction: 4.9, trend: "up" },
    { name: "Property Tax", requests: 987, satisfaction: 4.7, trend: "up" },
    {
      name: "Business Licenses",
      requests: 756,
      satisfaction: 4.6,
      trend: "stable",
    },
    { name: "Water Bills", requests: 654, satisfaction: 4.8, trend: "up" },
    {
      name: "Building Permits",
      requests: 432,
      satisfaction: 4.4,
      trend: "down",
    },
  ];

  const sentimentData = [
    {
      category: "Very Positive",
      percentage: 45,
      count: 2847,
      color: "bg-green-500",
    },
    {
      category: "Positive",
      percentage: 32,
      count: 2023,
      color: "bg-green-300",
    },
    { category: "Neutral", percentage: 18, count: 1138, color: "bg-gray-300" },
    { category: "Negative", percentage: 4, count: 253, color: "bg-red-300" },
    {
      category: "Very Negative",
      percentage: 1,
      count: 63,
      color: "bg-red-500",
    },
  ];

  const recentAlerts = [
    {
      type: "warning",
      title: "Response Time Spike",
      description: "Building permit responses 15% slower today",
      time: "2 hours ago",
    },
    {
      type: "info",
      title: "High Volume Alert",
      description: "Property tax inquiries up 40% this week",
      time: "4 hours ago",
    },
    {
      type: "success",
      title: "Milestone Reached",
      description: "10,000 AI conversations completed",
      time: "1 day ago",
    },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up")
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === "down")
      return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-government-900 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-government-600">
              Real-time insights into citizen engagement and service performance
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-government-600">
                        {metric.title}
                      </p>
                      <p className="text-2xl font-bold text-government-900">
                        {metric.value}
                      </p>
                      <p className="text-xs text-government-500 mt-1">
                        {metric.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <Icon className="h-8 w-8 text-civic-600 mb-2" />
                      <div
                        className={`text-sm font-medium ${
                          metric.changeType === "positive"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {metric.change}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Top Services */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Most Requested Services</CardTitle>
                <CardDescription>
                  Service popularity and satisfaction ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-government-900">
                            {service.name}
                          </h3>
                          {getTrendIcon(service.trend)}
                        </div>
                        <p className="text-sm text-government-600">
                          {service.requests} requests this month
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-government-900">
                          {service.satisfaction}★
                        </div>
                        <p className="text-xs text-government-600">
                          satisfaction
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>
                  System notifications and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 border rounded-lg"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === "warning"
                          ? "bg-yellow-500"
                          : alert.type === "success"
                            ? "bg-green-500"
                            : "bg-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-government-900 text-sm">
                        {alert.title}
                      </h3>
                      <p className="text-xs text-government-600 mb-1">
                        {alert.description}
                      </p>
                      <p className="text-xs text-government-500">
                        {alert.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Citizen Sentiment Analysis</CardTitle>
            <CardDescription>
              Real-time sentiment tracking across all interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-government-900 mb-4">
                  Sentiment Distribution
                </h3>
                <div className="space-y-3">
                  {sentimentData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-24 text-sm text-government-600">
                        {item.category}
                      </div>
                      <div className="flex-1 bg-government-200 rounded-full h-6 overflow-hidden">
                        <div
                          className={`h-full ${item.color} transition-all duration-500`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <div className="w-16 text-sm text-government-900 text-right">
                        {item.percentage}%
                      </div>
                      <div className="w-16 text-xs text-government-600 text-right">
                        ({item.count})
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-government-900 mb-4">
                  Key Insights
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-900">
                        Positive Trend
                      </span>
                    </div>
                    <p className="text-sm text-green-700">
                      77% of interactions are positive or very positive, up 8%
                      from last month
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-900">
                        Top Keywords
                      </span>
                    </div>
                    <p className="text-sm text-blue-700">
                      "Quick", "Helpful", "Easy" are the most mentioned positive
                      terms
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium text-yellow-900">
                        Areas for Improvement
                      </span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Website navigation and form complexity mentioned in
                      negative feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time-based Analytics */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Peak Usage Hours</CardTitle>
              <CardDescription>When citizens are most active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { time: "9:00 AM", usage: 85, label: "Morning Peak" },
                  { time: "12:00 PM", usage: 95, label: "Lunch Hour" },
                  { time: "3:00 PM", usage: 70, label: "Afternoon" },
                  { time: "6:00 PM", usage: 60, label: "Evening" },
                  { time: "9:00 PM", usage: 25, label: "Night" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-16 text-sm text-government-600">
                      {item.time}
                    </div>
                    <div className="flex-1 bg-government-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full bg-civic-600 transition-all duration-500"
                        style={{ width: `${item.usage}%` }}
                      />
                    </div>
                    <div className="w-20 text-sm text-government-900 text-right">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Categories</CardTitle>
              <CardDescription>Distribution by service type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    category: "Permits & Licenses",
                    percentage: 35,
                    color: "bg-blue-500",
                  },
                  {
                    category: "Tax Services",
                    percentage: 28,
                    color: "bg-green-500",
                  },
                  {
                    category: "Utilities",
                    percentage: 20,
                    color: "bg-purple-500",
                  },
                  {
                    category: "Transportation",
                    percentage: 12,
                    color: "bg-orange-500",
                  },
                  { category: "Other", percentage: 5, color: "bg-gray-500" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-24 text-sm text-government-600">
                      {item.category}
                    </div>
                    <div className="flex-1 bg-government-200 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-sm text-government-900 text-right">
                      {item.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
