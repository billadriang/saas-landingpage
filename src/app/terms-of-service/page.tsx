export default function Page() {
  return (
    <div className="relative p-6 rounded-md shadow">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-2"><strong>Last updated:</strong> May 10, 2024</p>
      <p className="mb-4">Please read these terms and conditions carefully before using Our Portfolio Website.</p>
      
      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          Words with capitalized initial letters have meanings defined in the following conditions. The definitions 
          apply regardless of whether they are singular or plural.
        </p>
        <h3>Definitions</h3>
        <p>
          For these Terms and Conditions:
          - <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party. 
          - <strong>Country:</strong> Refers to: Ontario, Canada.
          - <strong>Company:</strong> Refers to the individual or entity that owns this portfolio website.
          - <strong>Device:</strong> Any device that can access the website, such as a computer, mobile phone, or tablet.
          - <strong>Service:</strong> Refers to the Portfolio Website.
          - <strong>Terms and Conditions:</strong> These Terms form the entire agreement regarding the use of the Portfolio Website.
          - <strong>Third-party Content:</strong> Services or content from third parties, including articles o tools displayed on the Portfolio Website.
          - <strong>Website:</strong> Refers to this Portfolio, accessible from http://billgaize.com.
          - <strong>You:</strong> The individual or entity using the Portfolio Website.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Acknowledgment</h2>
        <p>
          These Terms govern your use of this Portfolio Website and constitute the agreement between You and the Company.
          Your access to the Portfolio Website is conditioned on Your acceptance of these Terms.
          By accessing or using the Portfolio Website, You agree to be bound by these Terms. If You do not agree, stop using the Portfolio Website.
          You represent that You are over 18 years old.
        </p>
      </section>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">Links to Third-Party Websites</h2>
      <p>
        This Portfolio Website may contain links to third-party websites that are not controlled by the Company. 
        The Company is not responsible for third-party content, privacy policies, or practices. 
        We strongly advise You to read the Terms and Privacy Policies of any third-party websites You visit.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">Termination</h2>
      <p>
        We may terminate or suspend Your access immediately for any reason, including breach of these Terms. 
        Upon termination, Your right to use the Portfolio Website will cease immediately.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, the Company shall not be liable for any damages arising from the use of the Portfolio Website.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">Governing Law</h2>
      <p>
        The laws of the Country will govern these Terms and the use of the Portfolio Website.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. By continuing to access or use the Portfolio Website, You agree to the updated Terms.
      </p>
      
      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
        <p>
          If You have any questions about these Terms, You can contact us:
        </p>
        <ul className="list-inside">
          <li>By email: <a href="mailto:me@billgaize.com" className="text-blue-600 hover:underline">me@billgaize.com</a></li>
        </ul>
      </section>
      
      {/* Microscope Emoji in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl">
        🔬
      </div>
    </div>
  );
}
