# RAG-Based Document Chatbot

A cloud-based document chatbot that allows users to upload documents and interact with them using natural language. The application uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from uploaded documents and generate accurate responses using Amazon Bedrock.

## Project Overview

Large Language Models are powerful, but they often lack knowledge of private or custom documents. This project addresses that problem by combining semantic search with generative AI.

When a user uploads a document, the content is processed, split into chunks, converted into vector embeddings, and stored in a vector database. During a conversation, the system retrieves the most relevant document sections and provides them as context to the language model before generating a response.

## Features

* User authentication with JWT
* Upload PDF documents
* Store files securely in Amazon S3
* Extract and process document content
* Generate embeddings using Amazon Bedrock
* Store vectors in Amazon OpenSearch
* Semantic search for relevant document chunks
* Context-aware question answering
* Chat history management
* Responsive web interface

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### AWS Services

* Amazon S3
* Amazon Bedrock
* Amazon OpenSearch
* DynamoDB

### Authentication

* JWT

## Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Express API
 │
 ├── Authentication
 │
 ├── Document Upload
 │       │
 │       ▼
 │     Amazon S3
 │
 ├── Document Processing
 │       │
 │       ▼
 │  Text Extraction
 │       │
 │       ▼
 │   Chunking
 │       │
 │       ▼
 │  Bedrock Embeddings
 │       │
 │       ▼
 │ Amazon OpenSearch
 │
 └── Chat Service
         │
         ▼
  Similarity Search
         │
         ▼
   Amazon Bedrock
         │
         ▼
      Response
```

## Folder Structure

```text
project-root/

frontend/
│
├── src/
├── public/
└── package.json

backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── app.js
├── server.js
└── package.json
```

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd rag-document-chatbot
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

JWT_SECRET=your_secret

AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=ap-south-1

S3_BUCKET_NAME=your_bucket_name

BEDROCK_MODEL_ID=your_model

OPENSEARCH_ENDPOINT=your_endpoint
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Workflow

### Uploading Documents

1. User uploads a PDF document.
2. File is stored in Amazon S3.
3. Text is extracted from the document.
4. Content is divided into smaller chunks.
5. Embeddings are generated.
6. Embeddings are stored in OpenSearch.

### Asking Questions

1. User enters a question.
2. Question embedding is generated.
3. Similar chunks are retrieved from OpenSearch.
4. Retrieved context is sent to Bedrock.
5. Bedrock generates a response.
6. Response is returned to the user.

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Documents

```http
POST   /api/documents/upload
GET    /api/documents
DELETE /api/documents/:id
```

### Chat

```http
POST /api/chat
GET  /api/chat/history
```

## Future Improvements

* Multi-document querying
* Document summarization
* Voice-based interaction
* Role-based access control
* OCR support for scanned PDFs
* Citation and source references
* Multi-language support

## Security Considerations

* JWT-based authentication
* Protected API routes
* Environment variables for secrets
* IAM roles with least-privilege access
* Secure file storage in S3

## Status

Currently under development as a cloud-native RAG application built on AWS services with a focus on scalability, maintainability, and real-world document intelligence use cases.
