import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to take the next step or have specific inquiries? Our dedicated team is here to help. Contact us through our website, and we'll be happy to assist you. Whether you have questions about our solutions, need technical support, or want to explore partnership opportunities, we're just a click away."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
