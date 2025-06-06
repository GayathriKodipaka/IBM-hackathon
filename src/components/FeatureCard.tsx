import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  features,
}: FeatureCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 bg-civic-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-civic-600" />
        </div>
        <CardTitle className="text-xl text-government-900">{title}</CardTitle>
        <CardDescription className="text-government-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-civic-600 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-government-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
