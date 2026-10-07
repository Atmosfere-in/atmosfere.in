import { contact } from "@/data/contact";
import styles from "../legal.module.css";

export const metadata = {
  title: "Terms of Service — Atmosfere",
  description: "The terms that apply when you use the Atmosfere website.",
};

// General website terms. Project work is governed by each client's signed
// agreement. To be reviewed by the client's legal adviser before launch.
export default function TermsOfService() {
  return (
    <article className={styles.article}>
      <span className="eyebrow">Atmosfere</span>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.updated}>Last updated: October 2026</p>

      <h2>Using this website</h2>
      <p>
        This website introduces Atmosfere Spaces, Atmosfere Hospitality and Atmosfere Living. By using it, you
        agree to these terms. If you don&rsquo;t agree, please don&rsquo;t use the site.
      </p>

      <h2>Information on the site</h2>
      <p>
        We take care to keep the content accurate, but project descriptions, figures, timelines and prices
        are indicative. A proposal or quote only becomes binding once it is confirmed in a signed agreement.
      </p>

      <h2>Projects and consultations</h2>
      <p>
        Booking a consultation or requesting a quote does not create a contract. The scope, fees, timeline and
        responsibilities for any project are set out in a separate written agreement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Designs, drawings, text and images on this site belong to Atmosfere or are used with permission. Please
        don&rsquo;t copy or reuse them without our written consent.
      </p>

      <h2>Links to other services</h2>
      <p>
        Some features use third-party services such as WhatsApp and Calendly. Their own terms apply when you use
        them, and we aren&rsquo;t responsible for their content or availability.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Write to <a href={contact.emailHref}>{contact.email}</a> or call{" "}
        <a href={contact.phoneHref}>{contact.phone}</a>.
      </p>
    </article>
  );
}
