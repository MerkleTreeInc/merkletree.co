import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At MerkleTree, we are passionate about building secure and trustworthy digital ecosystems. Our team of experts brings decades of experience in cryptography, security, and SaaS solutions to the table, enabling us to deliver cutting-edge technology that addresses the most pressing challenges facing businesses today."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
