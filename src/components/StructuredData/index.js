import React from 'react';

const StructuredData = () => {
  return (
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ShiniUnicorns",
        "url": "https://www.shiniunicorns.com",
        "logo": "https://www.shiniunicorns.com/images/logo.jpg",
        "description": "Revolutionizing agriculture and industrial heating with state-of-the-art solar solutions.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919789757178",
          "contactType": "customer service"
        }
      }
      `}
    </script>
  );
};

export default StructuredData;
