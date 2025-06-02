# 📧 Smart Email Generator (Frontend)

This is the **frontend** of the Smart Email Generator — a React-based application designed to help users generate professional or casual emails using AI. It was built to practice and apply concepts of **Generative AI**, using **OpenAI's ChatGPT** API at the backend.

---

## 🚀 Features

- ✍️ **Text + Voice Input**  
  Use either keyboard input or voice commands (powered by the Web Speech API) to provide your email prompt.

- 🎛️ **Dropdown Selectors**  
  Choose the email **type** (e.g., Job Application, Thank You, Meeting Request) and **tone** (e.g., Formal, Casual, Polite, Direct) for a more tailored email.

- ♻️ **Email Regeneration Support**  
  All generated emails are saved locally for easy access and potential reuse.

- 📜 **Email History View**  
  View all previously generated emails through a dedicated history page, powered by **localStorage** or optionally **MongoDB** (if connected in backend).

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Voice Recognition**: Web Speech API
- **State Management**: React Hooks
- **Storage**: localStorage (client-side)
- **API Integration**: Axios → Backend (Express + OpenAI API)

---