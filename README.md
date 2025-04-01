# library-system
A simple GraphQL API built with Node.js, TypeScript, MySQL, and Prisma to manage books, authors, and users in a library.

🚀 Features
📖 Manage Books (Add, Update, Delete, List)

✍️ Manage Authors (Add, Update, Delete, List)

👤 Manage Users (Add, List Users)

🔄 Borrow & Return Books

🔎 Fetch Books by Author & Authors by Book

🛠 Tech Stack
Backend: Node.js, TypeScript

Database: MySQL (via Prisma ORM)

API: GraphQL (Apollo Server)

Containerization: Docker

📦 Installation
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/YOUR_USERNAME/library-system.git
cd library-system
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory:

ini
Copy
Edit
DATABASE_URL="mysql://user:password@localhost:3306/library"
4️⃣ Set Up the Database
Run the following command to apply migrations:

sh
Copy
Edit
npx prisma migrate dev --name init
5️⃣ Start the Server
sh
Copy
Edit
npx ts-node src/index.ts
The server will start at: http://localhost:4000

📌 GraphQL API Endpoints
🟢 Queries
📚 Get All Books
graphql
Copy
Edit
query {
  books {
    id
    title
    author {
      name
    }
  }
}
✍️ Get All Authors
graphql
Copy
Edit
query {
  authors {
    id
    name
    books {
      title
    }
  }
}
🔍 Get a Single Book
graphql
Copy
Edit
query {
  book(id: 1) {
    title
    author {
      name
    }
  }
}
🟠 Mutations
➕ Add a Book
graphql
Copy
Edit
mutation {
  addBook(title: "GraphQL Basics", authorId: 1) {
    id
    title
  }
}
🔄 Borrow a Book
graphql
Copy
Edit
mutation {
  borrowBook(userId: 1, bookId: 1)
}
🗑 Delete a Book
graphql
Copy
Edit
mutation {
  deleteBook(id: 1)
}
🐳 Run with Docker
1️⃣ Start MySQL
Create a docker-compose.yml file:

yaml
Copy
Edit
version: "3.8"
services:
  mysql:
    image: mysql:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: library
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
Run:

sh
Copy
Edit
docker compose up -d
2️⃣ Start the Server
sh
Copy
Edit
npx ts-node src/index.ts
📜 License
This project is licensed under the MIT License.
