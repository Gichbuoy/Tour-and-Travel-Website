import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Sign Up"
        btnclass="hide"
      />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUp;
