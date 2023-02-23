// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-apollo"],

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
        httpEndpoint: "https://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query",
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
