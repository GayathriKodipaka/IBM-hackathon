📘 IBM Granite Chatbot Integration

This project demonstrates how to integrate IBM's Granite large language models into a frontend application using a custom backend API interface. The setup allows sending user queries to IBM's LLM and receiving intelligent responses in real time.

🚀 Features

Interactive chat interface with real-time user-bot conversation

API call to IBM Granite model for generating responses

Error handling and message rendering

Basic UI components (cards, badges, chat bubbles)

🧠 Technologies Used

Frontend: React.js (with Tailwind CSS & ShadCN UI components)

Backend: Custom Express/Node.js server or direct integration using IBM API

Model: IBM Granite Language Model

Other Libraries: Axios, useState/useEffect hooks, etc.

📂 File Structure

graphql
Copy
Edit
.
├── ibm_granite.ipynb        # Jupyter notebook with integration example
├── components/              # UI Components (Navigation, ChatInterface, etc.)
├── pages/                   # Main frontend pages
└── utils/                   # IBM query logic (e.g., queryGranite)
⚙️ How to Run
Backend Setup
Create an IBM Cloud account and get access to the Granite model.

Generate API keys and note down the endpoint.

Implement a queryGranite(input, apiKey) method to send input and get model response.

Frontend Setup
bash
Copy
Edit
git clone <this-repo>
cd <repo-folder>
npm install
npm run dev
Edit the API key securely in .env.local or wherever it's configured.

📸 Screenshots

![image](https://github.com/user-attachments/assets/eaa7ae19-9053-4822-9266-6d06062f6bf7)

📝 Sample Usage

js
Copy
Edit
const reply = await queryGranite("What's the weather like?");
console.log(reply); // Model's response
❗ Troubleshooting
Blank responses: Ensure API key and endpoint are correct.

CORS issues: Configure proxy in vite.config.js or next.config.js.

Deployment: 
Use Vercel/Netlify for frontend, and Render/Heroku for backend.
