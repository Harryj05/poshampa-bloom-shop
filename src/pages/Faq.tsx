
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  // FAQ data
  const faqs = [
    {
      question: "What makes POSHAMPA products natural?",
      answer: "POSHAMPA products are made with 100% natural ingredients, ethically sourced and carefully selected for their effectiveness. We avoid harmful chemicals, synthetic fragrances, parabens, sulfates, and other potentially harmful ingredients commonly found in conventional beauty products."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes, most of our products are formulated with sensitive skin in mind. We clearly label all ingredients and offer specific product lines designed for sensitive skin types. If you have specific allergies or concerns, we recommend checking the ingredient list or contacting our customer service for personalized advice."
    },
    {
      question: "Do you test on animals?",
      answer: "Absolutely not. POSHAMPA is proudly cruelty-free. We do not test our products or ingredients on animals, nor do we work with suppliers who conduct animal testing. Our products are tested on human volunteers to ensure safety and effectiveness."
    },
    {
      question: "How long will it take to see results?",
      answer: "Results vary depending on the product and individual factors such as skin type, consistency of use, and specific concerns being addressed. Generally, you may notice immediate effects like hydration, but more significant improvements in skin texture or specific concerns typically take 4-6 weeks of consistent use, which is the natural cycle for skin cell turnover."
    },
    {
      question: "How should I store POSHAMPA products?",
      answer: "To maintain the integrity and effectiveness of our natural formulations, we recommend storing products in a cool, dry place away from direct sunlight. Some products, particularly those with high vitamin C content, may need refrigeration after opening, which will be indicated on the packaging."
    },
    {
      question: "What is the shelf life of your products?",
      answer: "Our products typically have a shelf life of 12-24 months unopened. Once opened, most products should be used within 6-12 months for optimal effectiveness. Each product is labeled with a Period After Opening (PAO) symbol indicating how long it remains safe to use after opening."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary depending on the destination. You can view shipping options and costs at checkout. Please note that customs duties and taxes may apply for international orders, which are the responsibility of the customer."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee on all products. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Products must be returned in their original packaging, either unused or with minimal use if you're experiencing an issue with the product."
    },
    {
      question: "Are your packaging materials eco-friendly?",
      answer: "Yes, we are committed to sustainable practices, including our packaging. We use recyclable or biodegradable materials whenever possible and are continuously working to reduce our environmental footprint. Our shipping materials are also eco-friendly, and we encourage customers to recycle or reuse packaging."
    },
    {
      question: "Can I use multiple POSHAMPA products together?",
      answer: "Yes, our products are designed to work harmoniously together. We recommend following a basic skincare routine (cleanse, tone, treat, moisturize) and adding targeted treatments as needed. If you need guidance on creating a personalized regimen with our products, our customer service team would be happy to assist you."
    },
    {
      question: "Do you offer samples before purchasing full-size products?",
      answer: "Yes, we offer sample sizes of many of our products, which you can purchase individually or as part of curated trial kits. This allows you to test products before committing to full-size versions. Sample sizes are also included as free gifts with orders over a certain value."
    },
    {
      question: "How can I contact customer service?",
      answer: "Our customer service team is available via email at support@poshampa.com, through the contact form on our website, or by phone at +1 (555) 123-4567 during business hours (Monday to Friday, 9 AM to 5 PM EST). We aim to respond to all inquiries within 24-48 hours."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-poshampa-cream py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about POSHAMPA products and services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-poshampa-cream/50 text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-poshampa-cream">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our customer support team is here to help you with any other questions you might have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Email Us</h3>
              <p className="text-gray-600">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <p className="mt-2 font-medium text-poshampa-amber">
                support@poshampa.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Call Us</h3>
              <p className="text-gray-600">
                Available Monday to Friday, 9 AM to 5 PM EST.
              </p>
              <p className="mt-2 font-medium text-poshampa-amber">
                +1 (555) 123-4567
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Live Chat</h3>
              <p className="text-gray-600">
                Chat with our support team in real-time on our website.
              </p>
              <p className="mt-2 font-medium text-poshampa-amber">
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
