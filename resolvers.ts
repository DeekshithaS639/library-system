import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    books: () => prisma.book.findMany({ include: { author: true } }),
    book: (_: any, { id }: { id: number }) => prisma.book.findUnique({ where: { id }, include: { author: true } }),
    authors: () => prisma.author.findMany({ include: { books: true } }),
    author: (_: any, { id }: { id: number }) => prisma.author.findUnique({ where: { id }, include: { books: true } }),
    users: () => prisma.user.findMany({ include: { borrowedBooks: true } }),
    user: (_: any, { id }: { id: number }) => prisma.user.findUnique({ where: { id }, include: { borrowedBooks: true } }),
  },

  Mutation: {
    addBook: async (_: any, { title, authorId }: { title: string; authorId: number }) => {
      return await prisma.book.create({ data: { title, authorId } });
    },
    updateBook: async (_: any, { id, title }: { id: number; title?: string }) => {
      return await prisma.book.update({ where: { id }, data: { title } });
    },
    deleteBook: async (_: any, { id }: { id: number }) => {
      await prisma.book.delete({ where: { id } });
      return "Book deleted successfully";
    },

    addAuthor: async (_: any, { name }: { name: string }) => {
      return await prisma.author.create({ data: { name } });
    },
    updateAuthor: async (_: any, { id, name }: { id: number; name?: string }) => {
      return await prisma.author.update({ where: { id }, data: { name } });
    },
    deleteAuthor: async (_: any, { id }: { id: number }) => {
      await prisma.author.delete({ where: { id } });
      return "Author deleted successfully";
    },

    borrowedBook: async (_: any, { userId, bookId }: { userId: number; bookId: number }) => {
      
      return "Book borrowed successfully";
    },

    returnBook: async (_: any, { userId, bookId }: { userId: number; bookId: number }) => {
      
      return "Book returned successfully";
    },
  },
};
