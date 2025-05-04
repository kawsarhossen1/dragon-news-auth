import Header from "../components/Header";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="text-2xl font-semibold text-purple-600 text-center">
      <h1 className="font-bold mb-4">About Us</h1>
      <p className="mb-3 text-xl text-gray-500">
        Welcome to our Online News Portal, your trusted source for the latest
        updates, breaking news, and insightful stories from around the world. We
        are committed to delivering accurate, unbiased, and timely news across a
        range of topics — including politics, entertainment, technology, sports,
        and lifestyle.
      </p>
      <p className="mb-3 text-xl text-gray-500">
        Our team of experienced journalists and content creators work 24/7 to
        ensure that our readers stay informed and engaged. Whether you're
        reading on mobile, tablet, or desktop, we provide a seamless and
        reliable news experience.
      </p>
      <p className="text-xl ">
        Thank you for choosing us as your daily news companion. Stay informed,
        stay ahead.
      </p>
    </div>
  );
};

export default About;
