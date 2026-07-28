<template>
  <div class="min-h-screen overflow-x-hidden">
    <LandingNavBar />
    <LandingHeroSection />
    <LandingTrustedBy />
    <LandingProblemSection />
    <LandingSolutionSection />
    <LandingSpecsSection />
    <LandingHowItWorks />
    <LandingVideoSection />
    <LandingAboutPromoters />
    <LandingFooterSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'SmartBin — Intelligent IoT & AI Waste Management Platform',
  description: 'Deploy SmartBin, the AI-powered waste management system by Virginasia eMarketing. Features real-time IoT monitoring, auto-sorting, and optimized routes for smart cities, campuses, and industries.',
  keywords: 'SmartBin, IoT waste management, intelligent waste monitor, Virginasia eMarketing, smart city bin, AI waste sorting, solid waste monitoring, smart recycling bin, real-time waste tracking, smart recycling platform',
  ogTitle: 'SmartBin — Intelligent IoT & AI Waste Management',
  ogDescription: 'Monitor, sort, and optimize waste collection in real time with AI-powered SmartBin technology by Virginasia eMarketing.',
  ogImage: 'https://virginsmartbinai.com/smartbin-hero-dark.png',
  ogUrl: 'https://virginsmartbinai.com/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'SmartBin — Intelligent IoT & AI Waste Management',
  twitterDescription: 'Monitor, sort, and optimize waste collection in real time with AI-powered SmartBin technology by Virginasia eMarketing.',
  twitterImage: 'https://virginsmartbinai.com/smartbin-hero-dark.png',
  robots: 'index, follow'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://virginsmartbinai.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SmartBin",
        "alternateName": "Virginasia SmartBin",
        "url": "https://virginsmartbinai.com",
        "logo": "https://virginsmartbinai.com/assets/images/Logo.jpg",
        "sameAs": [
          "https://github.com/veltrix340-del/SmartBin"
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "SmartBin Intelligent Waste Monitor",
        "image": "https://virginsmartbinai.com/smartbin-hero-dark.png",
        "description": "IoT-powered SmartBin technology for real-time waste monitoring, automated classification, and collection route optimization.",
        "brand": {
          "@type": "Brand",
          "name": "SmartBin"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Virginasia eMarketing Pvt Ltd",
          "url": "https://virginsmartbinai.com"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Contact for pricing",
          "url": "https://virginsmartbinai.com/coming-soon"
        }
      })
    }
  ]
})
</script>
