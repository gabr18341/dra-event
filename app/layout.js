import { Parkinsans } from "next/font/google";
import "./globals.css";

const parkinSans = Parkinsans({
  variable: "--font-parkin-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "DRA Events | We are creative in organizing events for the success of your business",
  description: `
  Event organizers for the future of your business!
  In fact, we are committed to achieving your success by organizing special events that make the difference. Whether you are planning a conference, ceremony, or business event, we offer solutions to ensure an unforgettable experience.
  Our professional team prioritizes enhancing the impact of your events on your brand and achieving your business goals.
  Let's help you organize events that increase your audience's interaction and open up new opportunities for growth and expansion.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${parkinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
