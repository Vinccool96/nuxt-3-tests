import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["graphql/**/*.gql"],
  generates: {
    "./gqlTypes/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  hooks: { afterAllFileWrite: ["eslint --fix"] },
}

export default config
