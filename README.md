# CRUD Task Manager 📝
**Full-Stack Task Management Application with Node.js & Express**

A simple yet powerful task management web application built with **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates full CRUD (Create, Read, Update, Delete) operations with a clean, responsive frontend using vanilla HTML, CSS, and JavaScript.
<br/>

<img width="1919" height="999" alt="image" src="https://github.com/user-attachments/assets/c1eab004-acb3-49e2-b2b5-70023b239470" />
<img width="1919" height="1006" alt="image" src="https://github.com/user-attachments/assets/bbbc5d65-8578-4fda-a2aa-e0a3a2b125df" />

---

## 📋 Features

- ✅ **Create** new tasks with descriptions
- 📖 **Read** and display all tasks in an organized list
- ✏️ **Update** task details and mark tasks as complete/incomplete
- 🗑️ **Delete** unwanted tasks permanently
- 💾 **Persistent Storage** using MongoDB
- 🎨 **Responsive Design** with clean HTML/CSS interface
- ⚡ **Real-time Updates** with vanilla JavaScript

---

## 🧱 Tech Stack

| Frontend       | Backend       | Database        | Runtime          |
|----------------|---------------|-----------------|------------------|
| HTML5          | Node.js       | MongoDB         | Node.js          |
| CSS3           | Express.js    | Mongoose ODM    |                  |
| Vanilla JS     | RESTful APIs  |                 |                  |

---

## 🗂️ Project Structure

```bash
CRUD-NodeANDExpress-MongoDB/
├── public/              # Frontend files
│   ├── index.html       # Main HTML page where tasks are displayed
│   ├── task.html        # HTML page where you can edit the tasks
│   ├── main.css         # Main Styling
│   ├── normalize.css    # Additional Styling
│   ├── browser-app.js   # JavaScript for managing tasks in home page
│   ├── edit-task.js     # JavaScript for task page
│   └── favicon.ico      # Icon for application
├── models/              # MongoDB schemas
│   └── Task.js          # Task model
├── routes/              # API routes
│   └── tasks.js         # Task CRUD routes
├── db/                  # Database files
│   └── connect.js       # Connection to mongoDB file
├── controllers/         # Controller files
│   └── tasks.js         # API controllers
├── app.js               # Main app file
├── package.json         # Dependencies
└── README.md            # You are here!
```

---

## 🚀 How It Works

### 📝 Task Management Flow
1. **Create**: User enters task description and clicks "Add Task"
2. **Display**: All tasks are fetched from MongoDB and displayed
3. **Update**: Users can edit task details or toggle completion status
4. **Delete**: Remove tasks with a single click confirmation

### 🔄 API Endpoints
- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a task
- `PUT /api/tasks/:id` - Update existing task
- `DELETE /api/tasks/:id` - Delete a task

---

## 🛠️ Installation & Setup

### 📦 Prerequisites
- Node.js v14+ installed
- MongoDB installed locally or MongoDB Atlas account
- Git for version control

---

### 🔌 Clone the Repository

```bash
git clone https://github.com/TiwariAry/CRUD-NodeANDExpress-MongoDB.git
cd CRUD-NodeANDExpress-MongoDB
```

---

### ⚙️ Setup Instructions

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Configure Database
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
```

#### 3. Start the Application
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

#### 4. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🎨 Frontend Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive UI**: Real-time task status updates without page refresh
- **Status Indicators**: Visual cues for completed vs pending tasks

---

## 🧠 Learning Outcomes

- Implemented full CRUD operations with REST API design
- Mastered MongoDB integration with Mongoose ODM
- Built responsive frontend with vanilla JavaScript
- Learned asynchronous JavaScript (Promises, async/await)
- Practiced Express.js middleware and routing
- Gained experience with database schema design

---

## 📈 Future Enhancements

- 🔐 **User Authentication**: Login/register functionality
- 🏷️ **Task Categories**: Organize tasks by categories or tags
- 📅 **Due Dates**: Add deadline functionality with reminders
- 🔍 **Search & Filter**: Find tasks quickly with search functionality
- 📱 **Mobile App**: React Native or Flutter mobile version
- 🌙 **Dark Mode**: Theme switching capability

---

## 🐛 Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB is running locally (`mongod` command)
- Check connection string in `.env` file
- Verify network access for MongoDB Atlas

**Port Already in Use:**
- Change PORT in `.env` file
- Kill existing process:
  - `npx kill-port <port>`
    OR
  - Open task manager, search Node.js, end all the processes.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/TiwariAry/CRUD-NodeANDExpress-MongoDB/blob/main/LICENSE).<br/>
Feel free to use, modify, and distribute as needed.

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/aryan-tiwari-6844a9250)  
💻 [GitHub](https://github.com/TiwariAry)

---

## 🙏 Acknowledgments

- MongoDB documentation for database integration guidance
- Express.js community for excellent middleware examples
- Node.js ecosystem for robust backend development tools

---

*Built with ❤️ using Node.js, Express, and MongoDB*
