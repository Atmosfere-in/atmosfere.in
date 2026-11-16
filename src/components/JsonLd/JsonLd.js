// Structured data for search engines, as a JSON-LD script tag. "<" is
// escaped so text from the data files can never close the tag.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
