// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-apollo", "@nuxt/ui"],

  apollo: {
    autoImports: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
    clients: {
      default: {
        tokenName: "spacex-token",
        httpEndpoint: "http://localhost:3000/graphql ",
        wsEndpoint: "ws://localhost:3000/graphql ",
        httpLinkOptions: {
          credentials: "same-origin",
          headers: {
            "X-CUSTOM-HEADER": "123",
          },
        },

        // Specify if the client should solely use WebSocket.
        // requires `wsEndpoint`.
        websocketsOnly: false,
      },
    },
  },
})
