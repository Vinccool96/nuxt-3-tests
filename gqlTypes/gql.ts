/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment TodoFr on Todo {\n  id\n  text\n}": types.TodoFrFragmentDoc,
    "mutation createTodo($todo: TodoInput!) {\n  createTodo(todo: $todo) {\n    id\n  }\n}": types.CreateTodoDocument,
    "mutation updateTodo($id: Int!, $todo: TodoInput!) {\n  updateTodo(id: $id, changes: $todo) {\n    id\n  }\n}": types.UpdateTodoDocument,
    "query lastTodoQuery {\n  lastTodo {\n    id\n    done\n    text\n  }\n}": types.LastTodoQueryDocument,
    "query todoQuery($id: Int!) {\n  todo(id: $id) {\n    id\n    done\n    text\n  }\n}": types.TodoQueryDocument,
    "query todosQuery {\n  todos {\n    id\n    done\n    text\n  }\n}": types.TodosQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TodoFr on Todo {\n  id\n  text\n}"): (typeof documents)["fragment TodoFr on Todo {\n  id\n  text\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation createTodo($todo: TodoInput!) {\n  createTodo(todo: $todo) {\n    id\n  }\n}"): (typeof documents)["mutation createTodo($todo: TodoInput!) {\n  createTodo(todo: $todo) {\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation updateTodo($id: Int!, $todo: TodoInput!) {\n  updateTodo(id: $id, changes: $todo) {\n    id\n  }\n}"): (typeof documents)["mutation updateTodo($id: Int!, $todo: TodoInput!) {\n  updateTodo(id: $id, changes: $todo) {\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query lastTodoQuery {\n  lastTodo {\n    id\n    done\n    text\n  }\n}"): (typeof documents)["query lastTodoQuery {\n  lastTodo {\n    id\n    done\n    text\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query todoQuery($id: Int!) {\n  todo(id: $id) {\n    id\n    done\n    text\n  }\n}"): (typeof documents)["query todoQuery($id: Int!) {\n  todo(id: $id) {\n    id\n    done\n    text\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query todosQuery {\n  todos {\n    id\n    done\n    text\n  }\n}"): (typeof documents)["query todosQuery {\n  todos {\n    id\n    done\n    text\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;