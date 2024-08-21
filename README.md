# ToxiScan

ToxiScan is a full-stack web application designed to analyze, manage, and improve the quality of online comments and text. It leverages Google's Perspective API to detect toxicity, spam, and other harmful content, enabling users to maintain a positive digital environment. ToxiScan allows users to analyze text, fetch and filter YouTube comments, and even reply directly to comments through the platform.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Comment Analysis](#comment-analysis)
- [Text Input and File Upload](#text-input-and-file-upload)
- [Replying to YouTube Comments](#replying-to-youtube-comments)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Demo

ToxiScan provides an interactive platform to analyze and manage online comments and text. You can try out the live demo to see how ToxiScan detects and filters toxic, spammy, and harmful content. The demo also showcases how users can fetch YouTube comments, analyze them, and reply directly from the application.

[Try the Live Demo](https://toxi-scan.vercel.app/)

## Features

- **Toxicity and Spam Detection**: Analyze comments and text for harmful content using the Perspective API.
- **YouTube Comment Fetching**: Fetch and analyze comments from YouTube videos.
- **Direct Comment Reply**: Reply to YouTube comments directly from the application and post responses back to YouTube.
- **Text Input and File Upload**: Analyze custom text inputs or upload `.txt` files for analysis.
- **Real-Time Feedback**: Get real-time toxicity feedback as you type.
- **User Authentication**: Secure user login and authentication with NextAuth.js.
- **Responsive Design**: Clean and modern UI designed with Tailwind CSS and Shadcn.

## Tech Stack

- **Frontend**:
  - **Next.js**: A React framework with built-in server-side rendering and API routes.
  - **TypeScript**: Strongly-typed JavaScript to enhance code quality and maintainability.
  - **Tailwind CSS**: Utility-first CSS framework for fast and efficient styling.
  - **Shadcn**: Component library for consistent and accessible UI design.

- **Backend**:
  - **Bun**: A fast all-in-one JavaScript runtime that serves as the application’s backend, replacing Node.js.
  - **Next.js API Routes**: For handling server-side logic and API requests.
  - **Google Perspective API**: For analyzing the sentiment, toxicity, and other attributes of text.
  - **YouTube Data API**: For fetching and managing YouTube comments.

- **Authentication**:
  - **NextAuth.js**: Flexible authentication solution supporting multiple providers, including Google.

- **Database**:
  - **PostgreSQL**: For storing user data, analysis results, and other persistent information. Integrated via Prisma or Supabase.

- **Deployment**:
  - **Vercel**: Cloud platform for static sites and serverless functions, ideal for deploying Next.js applications.

## Installation

To get started with ToxiScan, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/KashifKhn/Toxi_Scan.git
   cd toxiscan
   ```

2. **Install Dependencies**:
   Make sure you have [Bun](https://bun.sh/) installed. Then, install the required packages:

    ```bash
   bun install
   ```

3. **Set Up Environment Variables**:
   Copy the `.env.local.example` file to `.env` in the root directory and add the following environment variables:

```bash
   cp .env.local.example .env


4. **Run the Development Server**:
   ```bash
   bun run dev
   ```

   The application should now be running at `http://localhost:3000`.

## Usage

### Authentication

ToxiScan uses NextAuth.js for authentication. Users can sign in using their Google account. The authentication system ensures that only authorized users can access features such as posting replies to YouTube comments.

### Comment Analysis

Users can analyze the sentiment and toxicity of comments from YouTube videos or custom text inputs. The analysis is powered by the Perspective API, which provides scores for various attributes such as toxicity, spam, and more.

### Text Input and File Upload

Users can enter text directly into the application for analysis or upload a `.txt` file. The application will process the text, analyze it using the Perspective API, and display the results.

### Replying to YouTube Comments

ToxiScan allows users to reply to YouTube comments directly from the application. Users can fetch comments from a video, analyze them for toxicity, and then post replies to the selected comments. The replies are sent back to YouTube using the YouTube Data API.

## Deployment

ToxiScan is designed to be deployed on Vercel. To deploy your application, follow these steps:

1. **Connect to GitHub**:
   Link your GitHub repository to Vercel.

2. **Set Environment Variables**:
   In the Vercel dashboard, configure the environment variables as outlined in the installation section.

3. **Deploy**:
   Vercel will automatically build and deploy your application when you push changes to your GitHub repository.

## Contributing

Contributions are welcome! If you have any ideas, issues, or improvements, feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.
