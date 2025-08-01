# Habit-Builder

A personalized habit-formation coach designed to help users build and sustain new habits using a simple, data-driven approach.

## 🌟 Vision

Habit-Builder goes beyond a simple checklist. It's a tool built to guide users through the process of habit formation by focusing on core behavioral science principles. The app provides a clean interface for tracking habits, visualizing progress, and building momentum one day at a time.

## ✨ Features

  * **User Authentication:** Secure user registration and login.
  * **Habit Management:** Create, read, update, and delete habits with a clear, intuitive interface.
  * **Progress Tracking:** Mark habits as completed for each day.
  * **Streak Visualization:** View your current streak for each habit to stay motivated.
  * **Responsive Design:** A seamless user experience on both desktop and mobile devices.

## 🚀 Technology Stack

### Frontend

  * **Framework:** React
  * **Build Tool:** Vite
  * **Language:** JavaScript + SWC
  * **Styling:** Tailwind CSS
  * **Components:** MUI (Material UI)

### Backend

  * **Framework:** Django
  * **API:** Django REST Framework
  * **Authentication:** `djangorestframework-simplejwt`
  * **Database:** SQLite (for development)

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

  * [Python 3.8+](https://www.python.org/downloads/)
  * [Node.js and npm](https://nodejs.org/en/download/)
  * [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### 1\. Backend Setup


```bash
# Navigate into the backend folder
cd backend

# Create a Python virtual environment and activate it
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install Django and other dependencies
pip install  -r requirements.txt

# Run initial database migrations
python manage.py migrate

# Create a superuser to access the Django admin panel
python manage.py createsuperuser

# Start the Django development server
python manage.py runserver
```

The backend server should now be running at `http://127.0.0.1:8000/`.

### 2\. Frontend Setup

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

The frontend server should now be running at `http://127.0.0.1:5173/`.

## 📂 Project Structure

A simplified view of the project's folder structure.

```
habit_builder/
├── backend/
│   ├── habit_builder_backend/
│   └── manage.py
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.