;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK
  if (!GOVUK) {
    return
  }

    // Load Google Analytics libraries
  GOVUK.Analytics.load()

    // Use document.domain in dev, preview and staging so that tracking works
    // Otherwise explicitly set the domain as www.gov.uk (and not gov.uk).
  var cookieDomain = (document.domain === 'www.gov.uk') ? '.www.gov.uk' : document.domain

    // Configure profiles and make interface public
    // for custom dimensions, virtual pageviews and events
  GOVUK.analytics = new GOVUK.Analytics({
    universalId: window.GA_TRACKING_ID,
    cookieDomain: cookieDomain
  })

    // Set custom dimensions before tracking pageviews
    // GOVUK.analytics.setDimension(…)

    // Activate any event plugins eg. print intent, error tracking
    // GOVUK.analyticsPlugins.error();
    // GOVUK.analyticsPlugins.printIntent();

    // Track initial pageview
  GOVUK.analytics.trackPageview()

  GOVUK.analyticsPlugins.externalLinkTracker()
})(window)
