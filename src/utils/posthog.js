import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init("phc_Xk4yfTZ1ioGYZGbj3wFj6YSf7F0lwF3lCH6OqIX7aLE", {
    api_host: "https://us.i.posthog.com",
    capture_pageview: false,
  })
}

export default posthog
