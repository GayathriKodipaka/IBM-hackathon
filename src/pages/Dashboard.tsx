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
  MessageSquare,
  FileText,
  Calendar,
  Bell,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentActivities = [
    {
      id: 1,
      type: "message",
      title: "Response to parking permit inquiry",
      time: "2 hours ago",
      status: "completed",
    },
    {
      id: 2,
      type: "document",
      title: "Tax document submitted",
      time: "4 hours ago",
      status: "processing",
    },
    {
      id: 3,
      type: "appointment",
      title: "DMV appointment scheduled",
      time: "1 day ago",
      status: "upcoming",
    },
    {
      id: 4,
      type: "notification",
      title: "New city council meeting notice",
      time: "2 days ago",
      status: "read",
    },
  ];

  const quickActions = [
    {
      title: "Submit Request",
      description: "File a new service request",
      icon: FileText,
      href: "/services",
      color: "bg-blue-500",
    },
    {
      title: "Schedule Appointment",
      description: "Book time with city services",
      icon: Calendar,
      href: "/services",
      color: "bg-green-500",
    },
    {
      title: "Ask AI Assistant",
      description: "Get instant answers",
      icon: MessageSquare,
      href: "/chat",
      color: "bg-purple-500",
    },
    {
      title: "View Notifications",
      description: "Check latest updates",
      icon: Bell,
      href: "/notifications",
      color: "bg-orange-500",
    },
  ];

  const stats = [
    {
      title: "Active Requests",
      value: "3",
      change: "+2 this month",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Upcoming Appointments",
      value: "1",
      change: "Next: Dec 15",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Avg. Response Time",
      value: "2.3h",
      change: "30% faster",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      title: "Satisfaction Score",
      value: "4.8/5",
      change: "+0.2 this month",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "message":
        return MessageSquare;
      case "document":
        return FileText;
      case "appointment":
        return Calendar;
      case "notification":
        return Bell;
      default:
        return FileText;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Completed
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Processing
          </Badge>
        );
      case "upcoming":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Upcoming
          </Badge>
        );
      case "read":
        return <Badge variant="secondary">Read</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-government-900 mb-2">
            Welcome back, Raju
          </h1>
          <p className="text-government-600">
            Here's what's happening with your government services
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-government-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-government-900">
                        {stat.value}
                      </p>
                      <p className="text-xs text-government-500">
                        {stat.change}
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks you can complete right now
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={index}
                      to={action.href}
                      className="flex items-center p-4 rounded-lg border hover:bg-government-50 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mr-3`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-government-900">
                          {action.title}
                        </h3>
                        <p className="text-sm text-government-600">
                          {action.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-government-400" />
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest interactions with government services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const Icon = getActivityIcon(activity.type);
                    return (
                      <div
                        key={activity.id}
                        className="flex items-center space-x-4 p-4 rounded-lg border"
                      >
                        <div className="w-10 h-10 bg-civic-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-civic-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-government-900">
                            {activity.title}
                          </h3>
                          <p className="text-sm text-government-600">
                            {activity.time}
                          </p>
                        </div>
                        {getStatusBadge(activity.status)}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notifications Banner */}
        <Card className="mt-8 border-civic-200 bg-civic-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-civic-600 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-government-900 mb-1">
                  New City Council Meeting
                </h3>
                <p className="text-government-600">
                  Join the virtual town hall on December 20th to discuss the new
                  community center proposal.
                </p>
              </div>
              <Button asChild>
                <Link to="/notifications">View Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
