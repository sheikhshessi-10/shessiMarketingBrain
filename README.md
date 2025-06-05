# Sheikh Shessi's Marketing Brain

A personalized AI Chat Interface built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui, powered by the Gemini API.

This application is designed to provide strategic marketing intelligence and resources specifically for Sheikh Shessi.

## Setup and Running

1.  **Clone the repository:**

    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd shessiMarketingBrain
    ```
    Replace `<YOUR_REPOSITORY_URL>` with the HTTPS URL of your GitHub repository.

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of your project and add your Gemini API key:

    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```
    Replace `your_gemini_api_key_here` with your actual Gemini API key.

    **Important:** Make sure to add `.env` to your `.gitignore` file to prevent committing your API key.

4.  **Run the application:**

    ```bash
    npm run dev
    ```

    The application should now be running, typically accessible at `http://localhost:8080/` or another port indicated in your terminal.

## Technologies Used

*   React
*   TypeScript
*   Vite
*   Tailwind CSS
*   shadcn-ui
*   Google Generative AI SDK (for Gemini API)

## Customization

*   **Personalization:** The welcome messages and input placeholder can be easily updated in `src/components/ChatInterface.tsx`.
*   **API Key:** Ensure your `.env` file is correctly configured with a valid Gemini API key.
*   **Quick Actions (Removed):** The original Quick Actions feature was removed for a simplified chat experience. If you wish to re-implement it, you can refer to previous versions of the code.
