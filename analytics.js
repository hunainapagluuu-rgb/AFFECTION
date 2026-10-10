// Vercel Web Analytics initialization
// This script sets up the analytics queue for Vercel Web Analytics
(function() {
  'use strict';
  
  // Initialize the analytics queue
  // Vercel will inject the actual analytics script when deployed
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Track the initial pageview
  window.va('pageview');
})();
