export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://aexoweb.com',
    name: 'Aexo',
    url: 'https://aexoweb.com',
    email: 'contact@aexoweb.com',
    description:
      'Agence web spécialisée en création de sites web sur mesure, design UI/UX, intégration IA et référencement SEO.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Aexo',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création Web' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design UI/UX' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intégration IA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Performance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Support & Évolution' } },
      ],
    },
    priceRange: '€€',
    inLanguage: 'fr-FR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
