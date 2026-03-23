export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const jsonLd = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.map(({ "@context": _, ...rest }) => rest) }
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
