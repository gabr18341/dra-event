import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const reviews = [
  {
    title: "Exhibition & Conference Planning",
    des: "Comprehensive event planning to ensure flawless execution.",
    img: "/services/Exhibition & Conference Planning.png",
  },
  {
    title: "Venue Selection & Setup",
    des: "Strategic venue selection and meticulous setup management.",
    img: "/services/Venue Selection & Setup.png",
  },
  {
    title: "Event Branding & Promotion",
    des: "Tailored branding and promotional strategies to elevate your event.",
    img: "/services/Event Branding & Promotion.png",
  },
  {
    title: "Guest & Speaker Management",
    des: "Efficient coordination of guest and speaker arrangements.",
    img: "/services/Guest & Speaker Management.png",
  },
  {
    title: "Logistics & Technical Support",
    des: "Seamless logistics coordination and expert technical assistance.",
    img: "/services/Logistics & Technical Support.png",
  },
  {
    title: "On-Site Coordination",
    des: "Professional on-site management to ensure smooth operations.",
    img: "/services/On-Site Coordination.png",
  },
  {
    title: "Photography & Videography",
    des: "We provide professional photography and videography services to capture every important moment of your event, ensuring lasting memories and high-quality content.",
    img: "/services/Photography & Videography.png",
  },
  {
    title: "Ticketing & Registration",
    des: "Streamlined ticketing and registration processes for attendees.",
    img: "/services/Ticketing & Registration.png",
  },
  
];

const Services = () => {

  const ReviewCard = ({
    img,
    title,
    des,
  }) => {
    return (
      <Card className="ser-card w-[300px] h-[400px]" style={{ backgroundImage: `url('${img}')` }} >
        <div className="content">
          <CardContent className="pt-6 pb-3">
            <h6>{title}</h6>
          </CardContent>
          <CardFooter>
            <p>{des}</p>
          </CardFooter>
        </div>
      </Card>
    
    );
  };

  return (
    <section className=" services-section py-10 md:py-20 px-8 md:px-20">
      <div className="container px-4 md:px-12 ">
        <div className="head">
          <h6>Services</h6>
          <h4 className="max-w-[40%]">
            Get A New Experience With DRA Services
          </h4>
        </div>
        <div className="services-container mt-8">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:100s]">
              {reviews.map((review , index) => (
                <ReviewCard key={review.title + index} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f4f3f8]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f4f3f8]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
