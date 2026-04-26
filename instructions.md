# Web Technologies: MERN Stack Lab Test

## Instructions

You are provided with a starter MERN (MongoDB, Express, React, Node.js) **Item Manager** project. Your task is to complete the application, add new features, deploy it, and submit the final artifacts.

**Time Limit**: 2 Hours
**Total Marks**: 100

---

## Part 1: Backend Completion (30 Marks)

The provided backend code is incomplete. You need to fix it and extend the data model.

1.  **Database Connection (5 Marks)**
    *   Create a MongoDB Atlas cluster (if you haven't already).
    *   Set up an environment variable file (`.env`) in the `backend` directory.
    *   Connect the backend to your MongoDB Atlas database.

2.  **Model Extension (10 Marks)**
    *   Open `backend/models/Item.js`.
    *   The current model only has `name` (String, required) and `price` (Number, required).
    *   **Task**: Add two new fields to the schema:
        *   `description` (String, required)
        *   `category` (String, required, enum: ['Electronics', 'Clothing', 'Food', 'Other'])

3.  **API Routes Completion (15 Marks)**
    *   Open `backend/routes/items.js`.
    *   The `GET /` (fetch all) and `POST /` (create) routes are provided.
    *   **Task**: Implement the missing `DELETE /:id` route to allow deleting an item by its ID.
    *   **Task**: Update the `POST /` route to handle the new `description` and `category` fields you added to the model.

---

## Part 2: Frontend Completion (30 Marks)

The frontend is a Vite + React application. It currently can fetch and create items, but it is missing the new fields and the delete functionality.

1.  **UI Modification (15 Marks)**
    *   Open `frontend/src/App.jsx`.
    *   **Task**: Update the "Add Item" form to include input fields for `description` (textarea or text input) and `category` (dropdown/select).
    *   **Task**: Ensure these new fields are properly sent to the backend when the form is submitted.

2.  **Displaying New Data (10 Marks)**
    *   Update the item list display in `App.jsx` to show the `description` and `category` of each item along with the `name` and `price`.

3.  **Delete Functionality (5 Marks)**
    *   **Task**: Add a "Delete" button next to each item in the list.
    *   **Task**: Implement the frontend logic to call your `DELETE` backend API when the button is clicked, and remove the item from the UI state.

---

## Part 3: Deployment (25 Marks)

You must deploy your completed application.

1.  **Backend Deployment (10 Marks)**
    *   Deploy your backend to a free service like **Render** or **Railway**.
    *   Ensure you configure the environment variables (`MONGO_URI`) on the deployment platform.
    *   Note down your deployed backend URL.

2.  **Frontend Deployment (10 Marks)**
    *   Update your frontend `.env` (or config file) to point API requests to your *deployed* backend URL instead of `http://localhost:5000`.
    *   Deploy your frontend to a free service like **Vercel** or **Netlify**.

3.  **Cross-Origin Verification (5 Marks)**
    *   Ensure your backend CORS configuration allows requests from your deployed frontend URL.
    *   Verify that you can add and delete items from the deployed frontend.

---

## Part 4: Submission (15 Marks)

1.  **GitHub Repository (5 Marks)**
    *   Initialize a Git repository for your project.
    *   Commit your completed frontend and backend code.
    *   Push the code to a **Public GitHub Repository**.

2.  **Documentation & Screenshots (10 Marks)**
    *   Create a `SUBMISSION.md` file in the root of your GitHub repository.
    *   Include the following in your `SUBMISSION.md`:
        *   Link to your deployed Frontend.
        *   Link to your deployed Backend.
        *   **Screenshot 1**: The working UI showing items with the new `description` and `category` fields.
        *   **Screenshot 2**: The MongoDB Atlas collection view showing data has been successfully saved to the cloud database.
        *   **Screenshot 3**: Proof of successful deployment (e.g., Render/Vercel dashboard showing "Live" or "Success").

**Good Luck!**
