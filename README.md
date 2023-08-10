# Testing out ChatGPT API

## Overview

The goal of this project is to explore and test the capabilities of the ChatGPT API provided by OpenAI. The ChatGPT API allows developers to integrate the powerful language model into their applications and services.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node 18.17.0 or above

## Getting Started

To start using the ChatGPT API for testing, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/IamPranit/chat-gpt.git
cd chat-gpt
```

2. Set up your ChatGPT API key:

   - Sign up for an account on the [OpenAI website](https://openai.com) if you haven't already.
   - Generate an API key from your OpenAI account dashboard.
   - Create a new file `.env` in the project directory.
   - Paste your API key inside the `.env` file as `OPENAI_API_KEY=<API_KEY>` and `PORT=<DESIRED_PORT>`.

3. Install and start:

```bash
npm install
npm start
```

## Usage

In the `public` folder, you can access `index.html` file which will serve as the frontend.

## Documentation

For detailed information on the available API endpoints, request formats, and response structures, please refer to the [OpenAI API documentation](https://platform.openai.com/docs/api-reference).

## Important Note

Please be aware of the potential costs associated with using the ChatGPT API. Ensure you are aware of the pricing details on the [OpenAI Pricing page](https://openai.com/pricing) before making extensive use of the API.

## Contributing

Contributions to this project are welcome. If you find any issues or want to suggest improvements, feel free to create a pull request.
