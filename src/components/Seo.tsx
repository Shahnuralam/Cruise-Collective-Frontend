import React, { useContext } from 'react';
import SeoContext from '../pages/api/SeoContext';
import Head from 'next/head';

const Seo = ({data}) => {
 
    const {
      title,
      description,
      url,
      shareImage,
      keywords,
      preventIndexing,
      metaTitle,
      metaDescription,
      metaImage,
      metaSocial,
      canonicalURL,
      metaRobots,
      structuredData,
      metaViewport,
     
    } = data;
  
    
      
   
  

  return (
    
    <head>
      
      <title>{metaTitle || title}</title>
      <meta name="description" content={metaDescription || description} key="description" />
      <meta name="keywords" content={keywords || ''} />
     {/* Loop through each social component in metaSocial */}
     {metaSocial.map((socialComponent, index) => (
  <React.Fragment key={index}>
    <meta name={`og:locale:${index}`} content={socialComponent.socialNetwork} />
    <meta name={`og:title:${index}`} content={socialComponent.title} />
    <meta name={`og:description:${index}`} content={socialComponent.description} />
    <meta name={`og:image:${index}`} content={socialComponent.image} />
  </React.Fragment>
))}

      <meta property="og:url" content={canonicalURL || url} key="og:url" />
      <meta property="og:title" content={metaTitle || title} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription || description}
        key="og:description"
      />
      <meta property="og:image" content={metaImage || shareImage} key="og:image" />
      <link rel="canonical" href={canonicalURL || url} />

      {preventIndexing && (
        <>
          <meta name="robots" content={metaRobots || 'noindex'} />
          <meta name="googlebot" content={metaRobots || 'noindex'} />
        </>
      )}

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}

{metaViewport && <meta name="viewport" content={metaViewport} />}


     
    </head>
  );
};

export default Seo;
