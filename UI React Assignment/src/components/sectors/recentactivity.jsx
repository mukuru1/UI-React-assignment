import React from "react";
import { Card, CardContent } from "../../components/ui structure/card";
import { Button } from "../../components/ui structure/button";
import { PackageIcon } from "lucide-react";

const RecentActivity = ({ activities = [] }) => {
  return (
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
        {activities.map((activity, index) => (
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
                  <p className="text-xs text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
