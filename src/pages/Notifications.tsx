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
import { Input } from "@/components/ui/input";
import {
  Bell,
  Calendar,
  AlertTriangle,
  Info,
  CheckCircle,
  Settings,
  Search,
  Filter,
  MoreVertical,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

const Notifications = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const notifications = [
    {
      id: 1,
      type: "meeting",
      title: "City Council Meeting Tomorrow",
      description:
        "The monthly city council meeting is scheduled for December 20th at 6:00 PM. Agenda includes community center proposal and budget amendments.",
      time: "2 hours ago",
      read: false,
      priority: "high",
      icon: Calendar,
      category: "Civic Events",
    },
    {
      id: 2,
      type: "service",
      title: "Parking Permit Application Approved",
      description:
        "Your parking permit application #PP-2024-1234 has been approved. You can pick up your permit at City Hall or request delivery.",
      time: "4 hours ago",
      read: false,
      priority: "medium",
      icon: CheckCircle,
      category: "Service Updates",
    },
    {
      id: 3,
      type: "alert",
      title: "Water Service Interruption",
      description:
        "Scheduled water service interruption on Maple Street from 10 AM to 2 PM tomorrow for maintenance work.",
      time: "6 hours ago",
      read: true,
      priority: "high",
      icon: AlertTriangle,
      category: "Service Alerts",
    },
    {
      id: 4,
      type: "info",
      title: "New Online Tax Payment Portal",
      description:
        "We've launched a new online portal for property tax payments with enhanced security and mobile-friendly design.",
      time: "1 day ago",
      read: true,
      priority: "low",
      icon: Info,
      category: "System Updates",
    },
    {
      id: 5,
      type: "reminder",
      title: "Property Tax Payment Due Soon",
      description:
        "Your property tax payment of $2,847.50 is due on December 31st. Pay online to avoid late fees.",
      time: "2 days ago",
      read: false,
      priority: "high",
      icon: Clock,
      category: "Payment Reminders",
    },
    {
      id: 6,
      type: "community",
      title: "Community Volunteer Opportunity",
      description:
        "Join us for the annual city cleanup event on January 15th. Register online and help make our city beautiful.",
      time: "3 days ago",
      read: true,
      priority: "low",
      icon: Users,
      category: "Community",
    },
  ];

  const filterOptions = [
    { value: "all", label: "All Notifications", count: notifications.length },
    {
      value: "unread",
      label: "Unread",
      count: notifications.filter((n) => !n.read).length,
    },
    {
      value: "high",
      label: "High Priority",
      count: notifications.filter((n) => n.priority === "high").length,
    },
    {
      value: "service",
      label: "Service Updates",
      count: notifications.filter((n) => n.type === "service").length,
    },
    {
      value: "meeting",
      label: "Meetings",
      count: notifications.filter((n) => n.type === "meeting").length,
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && !notification.read) ||
      (filter === "high" && notification.priority === "high") ||
      notification.type === filter;

    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            High
          </Badge>
        );
      case "medium":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Medium
          </Badge>
        );
      case "low":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Low
          </Badge>
        );
      default:
        return <Badge variant="outline">Normal</Badge>;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "text-blue-600 bg-blue-100";
      case "service":
        return "text-green-600 bg-green-100";
      case "alert":
        return "text-red-600 bg-red-100";
      case "info":
        return "text-purple-600 bg-purple-100";
      case "reminder":
        return "text-orange-600 bg-orange-100";
      case "community":
        return "text-cyan-600 bg-cyan-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-government-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-government-900 mb-2">
              Notifications
            </h1>
            <p className="text-government-600">
              Stay updated with important city announcements and your service
              requests
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button className="bg-civic-600 hover:bg-civic-700">
              Mark All Read
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-government-400 h-4 w-4" />
                  <Input
                    placeholder="Search notifications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Filter Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                      filter === option.value
                        ? "bg-civic-100 border-civic-300 text-civic-700"
                        : "border-government-200 hover:bg-government-50"
                    }`}
                  >
                    <span className="text-sm font-medium">{option.label}</span>
                    <Badge variant="secondary">{option.count}</Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-civic-600 mb-1">
                    {notifications.filter((n) => !n.read).length}
                  </div>
                  <div className="text-sm text-government-600">Unread</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-civic-600 mb-1">
                    {notifications.filter((n) => n.priority === "high").length}
                  </div>
                  <div className="text-sm text-government-600">
                    High Priority
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-civic-600 mb-1">
                    {notifications.length}
                  </div>
                  <div className="text-sm text-government-600">Total</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredNotifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card
                    key={notification.id}
                    className={`hover:shadow-md transition-shadow ${
                      !notification.read
                        ? "border-l-4 border-l-civic-600 bg-civic-50/30"
                        : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(notification.type)}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3
                              className={`font-semibold text-government-900 ${
                                !notification.read
                                  ? "text-government-900"
                                  : "text-government-700"
                              }`}
                            >
                              {notification.title}
                            </h3>
                            <div className="flex items-center space-x-2 ml-4">
                              {getPriorityBadge(notification.priority)}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <p
                            className={`text-sm mb-3 ${
                              !notification.read
                                ? "text-government-700"
                                : "text-government-600"
                            }`}
                          >
                            {notification.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-government-500">
                              <span>{notification.time}</span>
                              <Badge variant="outline" className="text-xs">
                                {notification.category}
                              </Badge>
                            </div>

                            {!notification.read && (
                              <Button size="sm" variant="outline">
                                Mark as Read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {filteredNotifications.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Bell className="w-12 h-12 text-government-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-government-900 mb-2">
                      No notifications found
                    </h3>
                    <p className="text-government-600">
                      {searchQuery
                        ? "Try adjusting your search or filter criteria"
                        : "You're all caught up! Check back later for updates."}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {filteredNotifications.length > 0 && (
              <Card className="mt-6">
                <CardContent className="p-6 text-center">
                  <Button variant="outline" className="w-full">
                    Load More Notifications
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
