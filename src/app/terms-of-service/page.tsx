"use client";

import Layout from "@/components/layout/Layout";

export default function TermsOfServicePage() {
  return (
    <Layout title="Terms of Service">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-pink-500 mb-6">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using PetShard's website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access the website or use any services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">2. Description of Service</h2>
              <p>
                PetShard provides AI-powered tools for pet owners, including breed identification, virtual breeding analysis, pet video generation, health guides, pet diaries, and pet horoscopes. These services are subject to availability and may change without notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">3. User Accounts</h2>
              <p>
                Some features of the service may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">4. User Content</h2>
              <p>
                Our service allows you to upload, submit, store, and share content, including pet photos and information. By uploading content to PetShard, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with providing and promoting our services.
              </p>
              <p className="mt-2">
                You represent and warrant that you own or have the necessary rights to the content you submit, and that your content does not violate the rights of any third party.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">5. Prohibited Uses</h2>
              <p>You agree not to use the service to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Upload or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Impersonate any person or entity</li>
                <li>Upload or transmit any material that contains software viruses or any other computer code designed to disrupt, damage, or limit the functionality of any computer software or hardware</li>
                <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                <li>Collect or store personal data about other users without their consent</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">6. Payment Terms</h2>
              <p>
                Certain features of our service may require payment. All payments are processed through secure third-party payment processors. By making a purchase, you agree to provide accurate billing information and authorize us to charge your payment method.
              </p>
              <p className="mt-2">
                Prices for services are subject to change without notice. We reserve the right to discontinue or modify any service at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">7. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. PETSHARD MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p className="mt-2">
                PETSHARD DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">8. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL PETSHARD BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mt-2">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-pink-500 mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@petshard.com" className="text-blue-500 hover:underline">legal@petshard.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
} 