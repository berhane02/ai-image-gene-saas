/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "oaidalleapiprodscus.blob.core.windows.net",
        ]
    }
}


module.exports =  {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
