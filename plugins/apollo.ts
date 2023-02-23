import { ErrorResponse } from "nuxt-apollo"

export default defineNuxtPlugin((nuxtApp) => {
  // Nuxt Apollo auth hook
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    console.log(client)
    if (client !== "default") {
      return
    }

    console.log(JSON.stringify(token))
    // Pass token to the `todos` client
    token.value = "<secret_token>"
    console.log(JSON.stringify(token))
  })

  // Nuxt Apollo error hook
  nuxtApp.hook("apollo:error", (error: ErrorResponse) => {
    console.log("Apollo Error Handler", error)
  })
})
