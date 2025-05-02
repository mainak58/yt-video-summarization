# YouTube Video Summarizer

A Node.js application that uses Google's Gemini AI to generate summaries of YouTube videos.

## 📝 Overview

This tool allows you to quickly extract key information from YouTube videos without having to watch them in their entirety. Simply provide a YouTube video ID, and the application will return a concise summary of the video content.

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher recommended)
-   npm (comes with Node.js)
-   Google Gemini API key

### Installation

1. Clone this repository

    ```bash
    git clone https://github.com/mainak58/yt-video-summarization.git
    cd youtube-video-summarizer
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Configure your Gemini API key

    - Open the main application file
    - Replace the placeholder API key with your own:
        ```javascript
        const ai = new GoogleGenAI({
            apiKey: "YOUR_GEMINI_API_KEY",
        });
        ```

4. Specify the YouTube video to summarize
    - Find the video ID from the YouTube URL (the part after `v=`)
    - Update the videoId variable:
        ```javascript
        const videoId = "YOUTUBE_VIDEO_ID";
        ```

### Usage

Run the application to generate a summary:

```bash
npm run dev
```

The application will process the video and output a summary in the console.

## 🛠️ How It Works

1. The application extracts the transcript from the specified YouTube video
2. It processes and cleans the transcript data
3. The prepared transcript is sent to Google's Gemini AI
4. Gemini analyzes the content and generates a concise summary
5. The summary is returned and displayed

## 📋 Dependencies

-   Node.js
-   Google Generative AI (@google/generative-ai)
-   YouTube transcript extraction libraries

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

-   LinkedIn: [https://www.linkedin.com/in/mainak58](https://www.linkedin.com/in/mainak58)
-   GitHub: [mainak58](https://github.com/mainak58)

---

Made with ❤️ by Mainak
