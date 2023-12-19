import { Description } from "@radix-ui/react-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PlayCircle } from "lucide-react";

export const LandingContent = () => {
  const testimonials = [
    {
      name: "Luciy",
      avatar: "Y",
      title: "Software Engineer",
      description: "This is the best application I've used for generative ai",
    },{
        name: "John",
        avatar: "J",
        title: "DevOps Engineer",
        description: "I like it how I can promt from one endpoint",
      },{
        name: "Yemane",
        avatar: "Y",
        title: "FullStack Engineer",
        description: "This application is help speed up my development",
      },{
        name: "Nasa",
        avatar: "N",
        title: "Software Engineer",
        description: "It was fun generation solary system pic",
      }
  ];
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                    <p className="text-lg">
                        {item.name}
                    </p>
                    <p className="text-zinc-400 text-sm">
                        {item.title}
                    </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
