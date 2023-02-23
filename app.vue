<template>
  <div>
    {{ todos }}
  </div>
</template>

<script lang="ts">
import todosQuery from "~/graphql/queries/todosQuery.gql"
import { TodosQueryDocument, TodosQueryQuery } from "~/gqlTypes/graphql"

type DataType = {
  todos: Record<string, unknown> | null
}

export default {
  data(): DataType {
    return {
      todos: null,
    }
  },
  apollo: {
    todos() {
      return {
        query: TodosQueryDocument,
        update: (data: TodosQueryQuery) => {
          return data.todos
        },
      }
    },
  },
}
</script>
