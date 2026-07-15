import React from 'react';
import { businessInfo } from '../data/siteData';

const Terms = () => {
  return (
    <div className="page-container terms-page">
      <div className="page-header">
        <h1>Terms &amp; Policy</h1>
        <p>Please read these terms carefully before using our services.</p>
      </div>

      <div className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          These Terms &amp; Policy govern your use of services provided by Kreata Designs,
          located on Jogoo Road, Nairobi, Kenya. By using our services, whether in person or
          through our website, you agree to the terms outlined below.
        </p>

        <h2>2. Our Services</h2>
        <p>
          Kreata Designs provides document services, internet and computer services, government
          services, education services, business services, graphic design and marketing, digital
          and online services, mobile and technical services, and other related services as
          listed on our Services page. Availability of specific services may vary from time to
          time.
        </p>

        <h2>3. Pricing &amp; Payment</h2>
        <p>
          Prices for our services are available in-store or on request and are subject to change
          without prior notice. Payment can be made via M-Pesa, cash, or other methods available
          at our premises. For government service applications, official government fees (where
          applicable) are separate from our service charges and are paid directly to the relevant
          government platform.
        </p>

        <h2>4. Turnaround Times</h2>
        <p>
          Most printing, photocopying, and document services are completed while you wait. Larger
          design, typesetting, or bulk printing jobs may require additional time, which we will
          communicate to you in advance.
        </p>

        <h2>5. Government &amp; Third-Party Portal Services</h2>
        <p>
          For services involving third-party or government platforms (such as eCitizen, iTax,
          NTSA, HELB, KUCCPS, SHA, and NSSF), Kreata Designs acts solely as an assistant helping
          you complete applications and submissions. We do not control, and are not responsible
          for, processing times, approvals, rejections, or outcomes determined by these external
          platforms or government bodies. Our charges cover the assistance we provide, not any
          government fees, which remain your responsibility.
        </p>

        <h2>6. Confidentiality &amp; Data Privacy</h2>
        <p>
          We understand that many of the documents and details you share with us are personal or
          sensitive. We handle all client information and documents with confidentiality and do
          not share them with third parties except where necessary to complete the specific
          service you have requested. You are responsible for ensuring the accuracy of the
          information and documents you provide to us.
        </p>

        <h2>7. Printing, Design &amp; Copyright</h2>
        <p>
          When requesting printing, photocopying, or design services, you confirm that you have
          the right to reproduce the material provided. Kreata Designs reserves the right to
          decline any request that appears to infringe on copyright, involve fraudulent
          documents, or breach any applicable law.
        </p>

        <h2>8. Refunds &amp; Corrections</h2>
        <p>
          Completed custom work (such as printed materials, design projects, or completed
          applications) is generally non-refundable once delivered. If an error occurs due to a
          mistake on our part, we will correct it promptly at no additional cost. Please review
          proofs and printed samples carefully before final approval.
        </p>

        <h2>9. Right to Refuse Service</h2>
        <p>
          We reserve the right to refuse service where a request is unlawful, unethical,
          fraudulent, or otherwise inconsistent with our values and business policies.
        </p>

        <h2>10. Website, Gallery &amp; Testimonials</h2>
        <p>
          Images displayed in our online gallery showcase examples of our past work. Testimonials
          reflect genuine feedback shared with us by clients. Where a client's photo or name is
          featured, it is done with their consent, or the material used is general/business-
          related and not tied to an identifiable individual without permission.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          While we take great care in delivering our services, Kreata Designs shall not be held
          liable for indirect, incidental, or consequential damages arising from the use of our
          services, including delays or issues caused by third-party platforms, network
          providers, or factors outside our reasonable control.
        </p>

        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Policy from time to time to reflect changes in our
          services or legal requirements. Continued use of our services after changes are posted
          constitutes acceptance of the updated terms.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These terms are governed by and interpreted in accordance with the laws of the Republic
          of Kenya.
        </p>

        <h2>14. Contact Us</h2>
        <p>
          If you have any questions about these Terms &amp; Policy, please reach out to us at{' '}
          {businessInfo.address}, call or WhatsApp {businessInfo.phone}, or use the contact form
          on our website.
        </p>

        <p className="terms-note">
          This document is provided as a general policy template for Kreata Designs and should be
          reviewed by a qualified professional to ensure full compliance with applicable laws
          before relying on it as a final legal document.
        </p>
      </div>
    </div>
  );
};

export default Terms;