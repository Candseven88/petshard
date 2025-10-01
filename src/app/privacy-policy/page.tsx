"use client";

import Layout from "@/components/layout/Layout";

export default function PrivacyPolicyPage() {
  return (
    <Layout title="Privacy Policy">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-pink-500 mb-6">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">1. Introduction</h2>
              <p>
                PetShard ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="mt-2">
                By using PetShard, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">2. Information We Collect</h2>
              <p className="font-medium">2.1 Personal Information</p>
              <p>We may collect personally identifiable information, such as:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Payment information (processed securely through our payment processors)</li>
                <li>Profile information</li>
              </ul>
              
              <p className="font-medium mt-4">2.2 Pet Information</p>
              <p>We collect information about your pets, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Pet photos and videos you upload</li>
                <li>Pet breed information</li>
                <li>Health information you provide about your pets</li>
              </ul>
              
              <p className="font-medium mt-4">2.3 Usage Data</p>
              <p>We may also collect information about how the service is accessed and used, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your computer's Internet Protocol address</li>
                <li>Browser type and version</li>
                <li>Pages of our service that you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">3. How We Use Your Information</h2>
              <p>We use the collected information for various purposes, including to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and maintain our service</li>
                <li>Notify you about changes to our service</li>
                <li>Allow you to participate in interactive features of our service</li>
                <li>Provide customer support</li>
                <li>Gather analysis or valuable information to improve our service</li>
                <li>Monitor the usage of our service</li>
                <li>Detect, prevent and address technical issues</li>
                <li>Process payments and prevent fraud</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">4. Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">5. Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
              </p>
              <p className="mt-2">
                These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">6. Children's Privacy</h2>
              <p>
                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="mt-2">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@petshard.com" className="text-blue-500 hover:underline">privacy@petshard.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
} 