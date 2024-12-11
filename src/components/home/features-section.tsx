import { Card, CardContent } from "@/components/ui/card";
import { Package, CreditCard, ArrowLeft, Headphones } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: "Free Shipping",
      description: "You will love at great low prices",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Pay with Multiple Credit Cards",
    },
    {
      icon: ArrowLeft,
      title: "14 Day Returns",
      description: "Within 30 days for an exchange",
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "Outstanding premium support",
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="border border-gray-200 shadow-sm">
            <CardContent className="flex flex-col items-center text-center p-6">
              <feature.icon className="w-8 h-8 mb-4" />
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p
                className="text-xs
               text-muted-foreground"
              >
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
