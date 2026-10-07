import { contact } from "@/data/contact";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy — Atmosfere",
  description: "How Atmosfere collects, uses and protects the information you share with us.",
};

// Plain-language policy covering what the site actually collects. To be
// reviewed by the client's legal adviser before launch.
export default function PrivacyPolicy() {
  return (
    <article className={styles.article}>
      <span className="eyebrow">Atmosfere</span>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: October 2026</p>

      <h2>What we collect</h2>
      <p>We only collect the information you choose to share with us:</p>
      <ul>
        <li>Your name, phone number and project details when you fill in a consultation or quote form.</li>
        <li>
          Photographs you choose to share with us about your space. Photos added to the enquiry form are stored
          securely with our hosting provider and shared with our team as unlisted, hard-to-guess links.
        </li>
        <li>The details you enter when you book a meeting through our Calendly scheduler.</li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use your details only to respond to your enquiry, prepare for and hold consultations, and — if you
        become a client — to deliver your project. We do not sell or rent your information to anyone.
      </p>

      <h2>Services we use</h2>
      <p>
        Our enquiry form opens WhatsApp with your details filled in, so the message is sent through WhatsApp
        under its own privacy policy. Meeting bookings are handled by Calendly. Images on this site are served
        by third-party image hosts.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry details for as long as needed to respond and follow up, and project records for as
        long as required by law or for warranty and after-care.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to see, correct or delete the information we hold about you at any time by writing to{" "}
        <a href={contact.emailHref}>{contact.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Atmosfere, {contact.city}. Email <a href={contact.emailHref}>{contact.email}</a> or call{" "}
        <a href={contact.phoneHref}>{contact.phone}</a>.
      </p>
    </article>
  );
}
