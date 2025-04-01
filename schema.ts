import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
    borrowed: Boolean!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    borrowedBooks: [Book!]!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addBook(title: String!, authorId: ID!): Book!
    updateBook(id: ID!, title: String): Book!
    deleteBook(id: ID!): String!
    
    addAuthor(name: String!): Author!
    updateAuthor(id: ID!, name: String): Author!
    deleteAuthor(id: ID!): String!

    borrowBook(userId: ID!, bookId: ID!): String!
    returnBook(userId: ID!, bookId: ID!): String!
  }
`;
