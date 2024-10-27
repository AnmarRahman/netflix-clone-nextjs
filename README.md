# Netflix Clone 🎬

This is a Netflix clone website built with **Next.js** and styled with **Tailwind CSS**. It features a user-friendly interface for browsing and viewing movies, as well as a subscription model using **Stripe** in test mode to mimic Netflix's subscription system.

## Features ✨

- **Browse Movies and TV Shows**: Explore a variety of content categories, just like on Netflix.
- **Movie Details**: Click on any movie to view its description, release date, and other details.
- **Subscription Model**: Users can subscribe to access premium content, with Stripe used for handling payments in test mode.
- **Responsive Design**: Optimized for desktop and mobile viewing.
- **User Authentication**: Secure authentication system (optional).

## Tech Stack 🛠️

- **Next.js** - For server-side rendering, fast routing, and optimized performance.
- **Tailwind CSS** - For responsive and modern styling.
- **Stripe API** - Used in test mode for handling subscription payments.

## Getting Started 🚀

Follow these instructions to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm.
- **Stripe Account** - Sign up at [Stripe](https://stripe.com/) and get API keys from the dashboard (set to test mode).
- **Firebase Project** - Create a project in [Firebase Console](https://console.firebase.google.com/) and set up your web app to get your Firebase configuration.


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
2. **Install dependencies:**
   ```bash
   npm install
3. ** Configure environment variables:**
- Create a .env.local file in the root directory.
- Add your API keys as environment variables:
  ```bash
  NEXT_PUBLIC_API_KEY = your-next-api-key
  ```
- Then replace these variables in the firebase.ts file :
  ```bash
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  ```
4. **Run the development server:**
  ```bash
  npm run dev
  ```
Open http://localhost:3000 to view the project in your browser.
