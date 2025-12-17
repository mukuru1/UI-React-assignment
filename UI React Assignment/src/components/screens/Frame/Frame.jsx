import {
  BellIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  FileTextIcon,
  PackageIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const recentProducts = [
  {
    name: 'MacBook Pro 16"',
    category: "Laptops",
    date: "Dec 2, 2024",
    status: "In Stock",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    name: "Dell XPS 13",
    category: "Laptops",
    date: "Dec 3, 2024",
    status: "In Stock",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    name: "iPhone 15 Pro",
    category: "Mobile",
    date: "Dec 4, 2024",
    status: "Out of Stock",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    name: "iPad Air",
    category: "Tablets",
    date: "Dec 2, 2024",
    status: "In Stock",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    name: "Surface Pro 9",
    category: "Tablets",
    date: "Dec 5, 2024",
    status: "Out of Stock",
    statusColor: "bg-red-100 text-red-700",
  },
];

const users = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    role: "Admin",
    roleColor: "bg-purple-100 text-purple-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "Manager",
    roleColor: "bg-blue-100 text-blue-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "5 hours ago",
  },
  {
    name: "Michael Brown",
    email: "m.brown@email.com",
    role: "Staff",
    roleColor: "bg-gray-100 text-gray-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "1 day ago",
  },
  {
    name: "Emily Davis",
    email: "emily.d@email.com",
    role: "Staff",
    roleColor: "bg-gray-100 text-gray-700",
    status: "Inactive",
    statusColor: "bg-red-100 text-red-700",
    lastLogin: "3 days ago",
  },
  {
    name: "David Wilson",
    email: "d.wilson@email.com",
    role: "Staff",
    roleColor: "bg-gray-100 text-gray-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "6 hours ago",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    role: "Manager",
    roleColor: "bg-blue-100 text-blue-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "30 min ago",
  },
  {
    name: "Robert Taylor",
    email: "r.taylor@email.com",
    role: "Staff",
    roleColor: "bg-gray-100 text-gray-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "4 hours ago",
  },
  {
    name: "Amanda White",
    email: "amanda.w@email.com",
    role: "Staff",
    roleColor: "bg-gray-100 text-gray-700",
    status: "Inactive",
    statusColor: "bg-red-100 text-red-700",
    lastLogin: "1 week ago",
  },
  {
    name: "Christopher Lee",
    email: "chris.lee@email.com",
    role: "Admin",
    roleColor: "bg-purple-100 text-purple-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    lastLogin: "1 hour ago",
  },
];

const recentActivity = [
  {
    title: "Product added to inventory",
    description: 'MacBook Pro 16" (ID: PRD00000001)',
    time: "2 hours ago",
  },
  {
    title: "New user registered",
    description: "John Doe registered as Staff",
    time: "3 hours ago",
  },
  {
    title: "Product assigned to Michael Brown",
    description: "Dell XPS 13 (ID: PRD00000002)",
    time: "5 hours ago",
  },
  {
    title: "Product sent for maintenance",
    description: "iPhone 15 Pro (ID: PRD00000003)",
    time: "1 day ago",
  },
  {
    title: "New user registered",
    description: "Sarah Smith joined as Manager",
    time: "2 days ago",
  },
];

const quickActions = [
  {
    icon: UsersIcon,
    title: "View Users",
    description: "Manage all system users",
    iconColor: "text-blue-600",
  },
  {
    icon: PackageIcon,
    title: "View Products",
    description: "View all registered products",
    iconColor: "text-green-600",
  },
  {
    icon: ClipboardListIcon,
    title: "View Assignments",
    description: "View all product assignments",
    iconColor: "text-purple-600",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-[1400px] mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome Back, Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <SettingsIcon className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <Card className="bg-blue-600 text-white border-0 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  HUZA INVENTORY - System Overview
                </h2>
                <p className="text-blue-100 text-sm mb-4">
                  Manage your HUZA inventory and process assignments efficiently
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircleIcon className="h-4 w-4" />
                  <span>All Systems Operational</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <PackageIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">116</p>
                  <p className="text-sm text-gray-500">Total Products</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileTextIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100</p>
                  <p className="text-sm text-gray-500">Total Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10</p>
                  <p className="text-sm text-gray-500">Approved Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Added Products
            </h3>
            <Button variant="link" className="text-blue-600">
              View all
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {recentProducts.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    {product.category}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">{product.date}</p>
                  <Badge
                    className={`${product.statusColor} text-xs font-medium`}
                  >
                    {product.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">UsersIcon</h3>
            <Button variant="link" className="text-blue-600">
              View all
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>NAME</TableHead>
                    <TableHead>ROLE</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>LAST LOGIN</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${user.roleColor} text-xs font-medium`}
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${user.statusColor} text-xs font-medium`}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {user.lastLogin}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
              <Button variant="link" className="text-blue-600">
                View all
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg h-fit">
                        <PackageIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">
                          {activity.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <IconComponent
                            className={`h-5 w-5 ${action.iconColor}`}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">
                            {action.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
