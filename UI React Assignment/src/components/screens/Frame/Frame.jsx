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

export const Frame = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-[1400px] mx-auto p-6">
        {/* --- HEADER --- */}
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

        {/* --- OVERVIEW CARD --- */}
        <Card className="bg-blue-600 text-white border-0 mb-6">
          <CardContent className="p-6">
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
          </CardContent>
        </Card>

      </div>
    </div>
  );
};
