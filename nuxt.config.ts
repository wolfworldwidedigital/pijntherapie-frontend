module.exports = {
  modules: [
    "@nuxtjs/sanity",
    "@nuxtjs/tailwindcss" // Add the Tailwind CSS module here
  ],
  sanity: {
    projectId: "t1w2pdpw",
    apiVersion: '2023-12-12'
  },
  css: ["@/assets/css/styles.css"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
}