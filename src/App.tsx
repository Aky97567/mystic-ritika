import styled from "@emotion/styled";
import { theme } from "./theme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackgroundStars } from "./components/BackgroundStars";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Courses } from "./sections/Courses";
import { About } from "./sections/About";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";

// Import data
import servicesData from "./data/services.json";
import coursesData from "./data/courses.json";
import testimonialsData from "./data/testimonials.json";
import type { Service, Course, Testimonial } from "./data/types";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${theme.colors.primary[900]},
    ${theme.colors.indigo[900]},
    ${theme.colors.black}
  );
  color: ${theme.colors.white};
  position: relative;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

export const App = () => {
  const services = servicesData as Service[];
  const courses = coursesData as Course[];
  const testimonials = testimonialsData as Testimonial[];

  const handleBookingClick = (): void => {
    // TODO: Replace with actual booking system (contact form -> Firebase)
    alert("Booking system coming soon! Please use the contact form below.");
  };

  const handleEnrollClick = (courseId: string): void => {
    // TODO: Implement course enrollment
    console.log("Enrolling in course:", courseId);
    alert(
      "Course enrollment will be available soon! Please contact us for more information."
    );
  };

  return (
    <AppContainer>
      <BackgroundStars />
      <Header />
      <MainContent>
        <Hero onBookingClick={handleBookingClick} />
        <Services services={services} />
        <Courses courses={courses} onEnrollClick={handleEnrollClick} />
        <About />
        <Testimonials testimonials={testimonials} />
        <Contact onBookingClick={handleBookingClick} />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;
