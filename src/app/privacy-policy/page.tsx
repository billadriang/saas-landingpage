export default function Page() {
  return (
    <div className="relative mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2"><strong>Last updated:</strong> May 10, 2024</p>
      <p className="mb-4">
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information 
        when You use the Service. It also tells You about Your privacy rights and how the law protects You. 
        By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
      </p>
      
      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
        <p>
          Words with capitalized initial letters have meanings defined under the following conditions. The definitions apply 
          regardless of whether they are singular or plural.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
        <p>
          For the purposes of this Privacy Policy:
          - <strong>Account:</strong> A unique account created to access our Service.
          - <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.
          - <strong>Company:</strong> Refers to the individual or entity that owns this portfolio website.
          - <strong>Device:</strong> Any device that can access the Service, such as a computer, mobile phone, or tablet.
          - <strong>Service:</strong> Refers to the Portfolio Website.
          - <strong>Service Provider:</strong> Any natural or legal person who processes data on behalf of the Company.
          - <strong>Usage Data:</strong> Data collected automatically through the Service or its infrastructure.
          - <strong>Website:</strong> Refers to this Portfolio, accessible from http://your-portfolio-url.com.
          - <strong>You:</strong> The individual or entity using the Portfolio Website.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Collecting and Using Your Personal Data</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>
        <h3 className="text-lg font-semibold mt-4 mb-2">Personal Data</h3>
        <p>
          While using Our Service, We may ask You to provide certain personally identifiable information, such as an email address, 
          first name, and last name.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Usage Data</h3>
        <p>
          Usage Data is collected automatically when using the Service and may include information like IP address, browser type, 
          and the pages visited.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Tracking Technologies and Cookies</h3>
        <p>
          We use Cookies and other tracking technologies to track activity on the Service and store information. 
          You can refuse Cookies, but it may affect your experience with the Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for purposes like:</p>
        <ul>
          <li>Providing and maintaining the Service</li>
          <li>Managing Your Account</li>
          <li>Contacting You</li>
          <li>Improving and analyzing the Service</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
        <p>
          If You have any questions about this Privacy Policy, You can contact us:
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
