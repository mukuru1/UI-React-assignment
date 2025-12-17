import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const RecentProducts = ({ products = [] }) => {
  return (
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
        {products.map((product, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 mb-1">
                {product.name}
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                {product.category}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                {product.date}
              </p>
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
  );
};

export default RecentProducts;
