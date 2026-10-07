"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Arrow from "@/components/ui/Icon/Arrow";
import { contact } from "@/data/contact";
import styles from "./ConsultModal.module.css";

const MAX_PHOTOS = 10;

// "Book a consultation" popup, shared by /spaces and /hospitality. Any link
// on the page pointing at one of `triggers` opens it instead of navigating.
// Two tabs: an enquiry form (default) that hands the details to WhatsApp,
// and the studio's Calendly booking calendar.
export default function ConsultModal({
  triggers,
  vertical,
  title = "Book a consultation",
  subtitle = "Door to your dream space.",
  image,
  showType = false,
}) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("form");
  const id = useId();

  // Open from any matching link (header CTA, hero, footer, mobile menu…).
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !triggers.includes(url.pathname)) return;
      e.preventDefault();
      setTab("form");
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [triggers]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={`${id}-title`}
      onClose={close}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className={styles.shell}>
        {image && (
          <div className={styles.visual} aria-hidden="true">
            <Image src={image} alt="" fill sizes="(max-width: 900px) 0px, 420px" className={styles.visualImage} />
            <div className={styles.visualText}>
              <span className={styles.visualEyebrow}>{vertical}</span>
              <p className={styles.visualQuote}>{subtitle}</p>
            </div>
          </div>
        )}

        <div className={styles.main}>
          <button type="button" className={styles.close} onClick={close} aria-label="Close">
            <span aria-hidden="true" />
          </button>

          <span className="eyebrow">{vertical}</span>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>

          <div className={styles.tabs} role="tablist" aria-label="How would you like to book?">
            {[
              ["form", "Form"],
              ["calendly", "Calendly"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`${id}-tab-${key}`}
                aria-selected={tab === key}
                aria-controls={`${id}-panel-${key}`}
                className={styles.tab}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
            <span
              className={styles.indicator}
              style={{ transform: tab === "calendly" ? "translateX(100%)" : "none" }}
              aria-hidden="true"
            />
          </div>

          <div
            role="tabpanel"
            id={`${id}-panel-form`}
            aria-labelledby={`${id}-tab-form`}
            hidden={tab !== "form"}
            className={styles.panel}
          >
            {open && <EnquiryForm vertical={vertical} showType={showType} />}
          </div>

          <div
            role="tabpanel"
            id={`${id}-panel-calendly`}
            aria-labelledby={`${id}-tab-calendly`}
            hidden={tab !== "calendly"}
            className={styles.panel}
          >
            {open && tab === "calendly" && <Calendly />}
          </div>
        </div>
      </div>
    </dialog>
  );
}

function EnquiryForm({ vertical, showType }) {
  const [photos, setPhotos] = useState([]);
  const [sent, setSent] = useState(null);
  const [values, setValues] = useState({});

  // Thumbnails use object URLs; release them when photos change or unmount.
  useEffect(() => () => photos.forEach((p) => URL.revokeObjectURL(p.url)), [photos]);

  const addPhotos = (files) => {
    const images = [...files].filter((f) => f.type.startsWith("image/"));
    setPhotos((current) =>
      [...current, ...images.map((file) => ({ file, url: URL.createObjectURL(file) }))].slice(
        0,
        MAX_PHOTOS,
      ),
    );
  };

  const removePhoto = (index) => setPhotos((current) => current.filter((_, i) => i !== index));

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setValues(Object.fromEntries(data));
    const lines = [
      `New consultation request — ${vertical}`,
      "",
      `Name: ${data.get("name").trim()}`,
      `Number: ${data.get("phone").trim()}`,
      `Area: ${data.get("area").trim()}`,
    ];
    if (showType) lines.push(`Project type: ${data.get("type")}`);
    if (photos.length) lines.push(`Photos: ${photos.length} (attaching in this chat)`);

    const href = `https://wa.me/${contact.consultWhatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(href, "_blank", "noopener");
    setSent(href);
  };

  if (sent) {
    return (
      <div className={styles.sent}>
        <span className={styles.sentMark} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className={styles.sentTitle}>Your details are ready in WhatsApp.</h3>
        <p className={styles.sentText}>
          Tap send in WhatsApp to share them with our team
          {photos.length > 0 && ", and attach the photos you picked in the same chat"}. We
          usually reply within a few hours.
        </p>
        <div className={styles.sentActions}>
          <a href={sent} target="_blank" rel="noopener" className={styles.submit}>
            <span>Open WhatsApp again</span>
            <Arrow size={14} />
          </a>
          <button type="button" className={styles.textButton} onClick={() => setSent(null)}>
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input name="name" type="text" defaultValue={values.name} required autoComplete="name" placeholder="Your full name" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Number</span>
          <input
            name="phone"
            type="tel"
            defaultValue={values.phone}
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[+0-9 ()-]{10,16}"
            title="Enter a 10-digit mobile number"
            placeholder="+91 98765 43210"
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Area</span>
        <input
          name="area"
          type="text"
          defaultValue={values.area}
          required
          placeholder="Size and location, e.g. 2,400 sq ft · Sector 150, Noida"
        />
      </label>

      {showType && (
        <fieldset className={styles.field}>
          <legend className={styles.label}>Residential / Commercial</legend>
          <div className={styles.segment}>
            {["Residential", "Commercial"].map((type, i) => (
              <label key={type} className={styles.option}>
                <input type="radio" name="type" value={type} defaultChecked={values.type ? values.type === type : i === 0} />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className={styles.field}>
        <span className={styles.label}>Upload images</span>
        <label
          className={styles.drop}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            addPhotos(e.dataTransfer.files);
          }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            className="visually-hidden"
            onChange={(e) => {
              addPhotos(e.target.files);
              e.target.value = "";
            }}
          />
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
            <path d="M12 16V4m0 0l-4.5 4.5M12 4l4.5 4.5M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            <strong>Choose photos</strong> or drag them here
          </span>
          <small>Site, floor plan or inspiration · up to {MAX_PHOTOS}</small>
        </label>

        {photos.length > 0 && (
          <ul className={styles.thumbs}>
            {photos.map((photo, i) => (
              <li key={photo.url} className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element -- local preview of an upload */}
                <img src={photo.url} alt={photo.file.name} />
                <button type="button" onClick={() => removePhoto(i)} aria-label={`Remove ${photo.file.name}`}>
                  <span aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" className={styles.submit}>
        <span>Submit</span>
        <Arrow size={14} />
      </button>
      <p className={styles.note}>Submitting opens WhatsApp with your details filled in.</p>
    </form>
  );
}

function Calendly() {
  if (contact.calendlyUrl) {
    const src = `${contact.calendlyUrl}?hide_gdpr_banner=1&background_color=f7f4ef&text_color=2b2825&primary_color=8c6a43`;
    return <iframe src={src} title="Book a time on Calendly" className={styles.calendly} />;
  }

  // Shown until the studio's Calendly link is added to src/data/contact.js.
  const whatsapp = `https://wa.me/${contact.consultWhatsapp}?text=${encodeURIComponent(
    "Hi Atmosfere, I'd like to book a 30-minute consultation. Which slots are free this week?",
  )}`;
  return (
    <div className={styles.calendlyFallback}>
      <span className={styles.calIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
        </svg>
      </span>
      <h3 className={styles.sentTitle}>Pick a 30-minute slot.</h3>
      <p className={styles.sentText}>
        Our online calendar is being connected. Until then, message us and we&rsquo;ll fix a
        time that suits you — usually the same day.
      </p>
      <div className={styles.sentActions}>
        <a href={whatsapp} target="_blank" rel="noopener" className={styles.submit}>
          <span>Request a slot on WhatsApp</span>
          <Arrow size={14} />
        </a>
        <a href={contact.phoneHref} className={styles.textButton}>
          Call {contact.phone}
        </a>
      </div>
    </div>
  );
}
