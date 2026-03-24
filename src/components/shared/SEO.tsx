"use client";

import { useEffect } from 'react';


interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  path?: string;
}

export function SEO({ 
  title, 
  description, 
  ogImage = 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&h=630&fit=crop',
  ogType = 'website',
  path = ''
}: SEOProps) {
  const fullTitle = title.includes('STTB') ? title : `${title} - STTB`;
  const baseUrl = 'https://sttb.ac.id';
  const fullUrl = `${baseUrl}${path}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:site_name', 'Sekolah Tinggi Teologi Bandung', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

  }, [fullTitle, description, ogImage, ogType, fullUrl]);

  return null;
}