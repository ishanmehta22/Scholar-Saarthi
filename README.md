# Scholar Saarthi - Digital Scholarship Portal 🎓


🎥 Model Demonstration :https://youtu.be/_LaZSVyyBUw

📋 Table of Contents

About the Project
Features
Tech Stack
Prerequisites
Installation & Setup
Running the Application
Project Structure
API Endpoints
Screenshots
Contributing
Team
License

🚀 About the Project
Scholar Saarthi is a comprehensive digital scholarship portal developed as part of Smart India Hackathon (SIH) 2024, where our team reached the National Finals. The platform aims to streamline the scholarship application process, making it more transparent, accessible, and efficient for both students and administrators.
The portal bridges the gap between scholarship providers and deserving students by providing a centralized platform for scholarship discovery, application, and management.
🎯 Problem Statement
Traditional scholarship processes are often:

Fragmented across multiple platforms
Lack transparency in application status
Time-consuming manual verification processes
Limited accessibility for rural students
Poor tracking and monitoring systems

💡 Solution
Scholar Saarthi provides:

Centralized Platform: Single portal for all scholarship opportunities
Real-time Tracking: Live status updates for applications
Automated Workflows: Streamlined approval processes
Enhanced Accessibility: User-friendly interface for all demographics
Secure Authentication: Role-based access control
Data Analytics: Comprehensive reporting for administrators

✨ Features
For Students

🔐 Secure Registration & Login - JWT-based authentication
📋 Profile Management - Complete academic and personal information
🔍 Scholarship Discovery - Browse available scholarships with filters
📄 Easy Application Process - Step-by-step application workflow
📊 Real-time Status Tracking - Monitor application progress
📱 Responsive Design - Works seamlessly on all devices
🔔 Notifications - Updates on application status changes

For Administrators

🛠️ Admin Dashboard - Comprehensive control panel
📈 Application Management - View, review, and process applications
✅ Approval Workflows - Automated and manual approval processes
📊 Analytics & Reporting - Detailed insights and statistics
👥 User Management - Manage student and admin accounts
🏷️ Scholarship Management - Create and manage scholarship programs
💾 Data Export - Export applications and reports

Technical Features

🔒 Security: Password encryption, input validation, XSS protection
🚀 Performance: Optimized database queries and caching
📱 Responsive: Mobile-first design approach
🔄 RESTful APIs: Well-structured API architecture
📝 Data Validation: Comprehensive input validation
🗄️ Database Management: Efficient MongoDB operations

🛠️ Tech Stack
Frontend

React.js (18.2.0) - User interface library
HTML5 & CSS3 - Markup and styling
JavaScript (ES6+) - Programming language
Axios - HTTP client for API calls
React Router - Client-side routing
Bootstrap/Material-UI - UI components

Backend

Node.js (18.x) - Runtime environment
Express.js (4.18) - Web application framework
MongoDB (6.0) - NoSQL database
Mongoose - MongoDB object modeling
JWT - JSON Web Tokens for authentication
bcrypt - Password hashing
CORS - Cross-origin resource sharing

Development Tools

Git - Version control
GitHub - Code repository
VS Code - Code editor
Postman - API testing
MongoDB Compass - Database GUI

📋 Prerequisites
Before running this project, ensure you have the following installed on your Windows machine:
Required Software

Node.js (v18.0.0 or higher)

Download from: https://nodejs.org/
Verify installation: node --version


MongoDB Community Server

Download from: https://www.mongodb.com/try/download/community
Install with default settings
Verify installation: mongod --version


Git

Download from: https://git-scm.com/download/win
Verify installation: git --version


Code Editor (Recommended: VS Code)

Download from: https://code.visualstudio.com/



Optional Tools

MongoDB Compass - GUI for MongoDB
Postman - API testing tool

🚀 Installation & Setup
Step 1: Clone the Repository
Open Command Prompt or PowerShell as Administrator and run:
bash# Clone the repository
git clone https://github.com/ishanmehta22/Scholar-Saarthi.git

# Navigate to project directory
cd Scholar-Saarthi
Step 2: Backend Setup
bash# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Create environment variables file
copy .env.example .env
Step 3: Frontend Setup
Open a new Command Prompt/PowerShell window:
bash# Navigate to project root (if not already there)
cd Scholar-Saarthi

# Navigate to frontend directory
cd frontend

# Install frontend dependencies
npm install
Step 4: Database Setup

Start MongoDB Service:
bash# Start MongoDB (run as Administrator)
net start MongoDB

Create Database:
bash# Connect to MongoDB
mongosh

# Create database
use scholar_saarthi

# Exit MongoDB shell
exit


Step 5: Environment Configuration
Edit the .env file in the backend directory:
env# Database Configuration
MONGODB_URI=mongodb://localhost:27017/scholar_saarthi
DB_NAME=scholar_saarthi

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_secure
JWT_EXPIRE=30d

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Frontend URL
CLIENT_URL=http://localhost:3000
🏃‍♂️ Running the Application
Method 1: Run Both Frontend and Backend Simultaneously

Start Backend Server:
bash# In Command Prompt/PowerShell (Window 1)
cd Scholar-Saarthi/backend
npm run dev

Start Frontend Server:
bash# In new Command Prompt/PowerShell (Window 2)
cd Scholar-Saarthi/frontend
npm start


Method 2: Using Concurrently (If configured)
bash# From project root directory
npm run dev
🌐 Access the Application

Frontend (React App): http://localhost:3000
Backend API: http://localhost:5000
MongoDB: mongodb://localhost:27017

🔧 Useful Development Commands
bash# Backend commands
cd backend
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm run test        # Run tests

# Frontend commands
cd frontend
npm start           # Start React development server
npm run build       # Build for production
npm run test        # Run React tests
npm run eject       # Eject from Create React App

# Database commands
mongosh                                    # Connect to MongoDB
mongosh --eval "db.adminCommand('listCollections')"  # List collections
📁 Project Structure
Scholar-Saarthi/
├── frontend/                   # React.js frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Dashboard/
│   │   │   └── Forms/
│   │   ├── pages/             # Page components
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Dashboard/
│   │   │   └── Admin/
│   │   ├── services/          # API service functions
│   │   ├── utils/             # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   ├── context/           # React context
│   │   ├── styles/            # CSS/SCSS files
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/                   # Node.js backend
│   ├── controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── scholarshipController.js
│   │   └── applicationController.js
│   ├── models/              # MongoDB models
│   │   ├── User.js
│   │   ├── Scholarship.js
│   │   └── Application.js
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── scholarships.js
│   │   └── applications.js
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── config/              # Configuration files
│   │   └── database.js
│   ├── utils/               # Utility functions
│   ├── uploads/             # File uploads directory
│   ├── server.js            # Main server file
│   ├── package.json
│   └── .env.example
├── docs/                    # Documentation
├── .gitignore
├── README.md
└── LICENSE
🔌 API Endpoints
Authentication Routes
POST   /api/auth/register        # User registration
POST   /api/auth/login           # User login  
POST   /api/auth/logout          # User logout
GET    /api/auth/profile         # Get user profile
PUT    /api/auth/profile         # Update user profile
POST   /api/auth/forgot-password # Forgot password
POST   /api/auth/reset-password  # Reset password
Scholarship Routes
GET    /api/scholarships         # Get all scholarships
GET    /api/scholarships/:id     # Get scholarship by ID
POST   /api/scholarships         # Create scholarship (Admin)
PUT    /api/scholarships/:id     # Update scholarship (Admin)
DELETE /api/scholarships/:id     # Delete scholarship (Admin)
GET    /api/scholarships/search  # Search scholarships
Application Routes
GET    /api/applications         # Get user applications
POST   /api/applications         # Submit new application
GET    /api/applications/:id     # Get application by ID
PUT    /api/applications/:id     # Update application
DELETE /api/applications/:id     # Delete application
GET    /api/applications/admin   # Get all applications (Admin)
PUT    /api/applications/:id/status # Update application status (Admin)
Admin Routes
GET    /api/admin/dashboard      # Admin dashboard data
GET    /api/admin/users          # Get all users
GET    /api/admin/statistics     # Get system statistics
POST   /api/admin/bulk-import    # Bulk import scholarships
GET    /api/admin/reports        # Generate reports

Youtube Video Link : https://youtu.be/_LaZSVyyBUw

🤝 Contributing
We welcome contributions to Scholar Saarthi! Here's how you can help:
Development Setup

Fork the repository
Create a feature branch: git checkout -b feature-name
Make your changes
Test thoroughly
Commit: git commit -m 'Add feature-name'
Push: git push origin feature-name
Create a Pull Request

Code Style Guidelines

Use meaningful variable and function names
Write clear comments for complex logic
Follow ESLint configuration
Maintain consistent indentation (2 spaces)
Use async/await instead of callbacks

Reporting Issues

Use GitHub Issues to report bugs
Provide detailed description and steps to reproduce
Include screenshots if applicable
Mention your operating system and browser version

👥 Team
Scholar Saarthi was developed by a talented team for Smart India Hackathon 2024:

Ishan Mehta - Full Stack Developer & Team Lead

GitHub: @ishanmehta22
LinkedIn: https://www.linkedin.com/in/ishan-mehta-b17890247
Email: mehtaishan310@gmail.com



Add other team members here
🏆 Achievements

🥇 Smart India Hackathon 2024 Finalist
🎯 Successfully represented Maharaja Agrasen Institute of Technology at national level
🌟 Recognized for innovative approach to scholarship management
📈 Positive feedback from industry experts and judges

🔮 Future Enhancements

 Mobile Application (React Native)
 AI-powered scholarship recommendations
 Integration with government scholarship portals
 Multi-language support
 Advanced analytics and reporting
 Blockchain integration for certificate verification
 Payment gateway integration
 Chat support system
 Document verification API
 Social media integration

🐛 Troubleshooting
Common Issues
1. MongoDB Connection Error
bash# Check if MongoDB is running
net start MongoDB

# If service doesn't exist, install MongoDB properly
# Download from: https://www.mongodb.com/try/download/community
2. Port Already in Use
bash# Find process using port 3000 or 5000
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual process ID)
taskkill /PID 1234 /F
3. Dependencies Installation Issues
bash# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rmdir /s node_modules
npm install
4. Environment Variables Not Loading

Ensure .env file is in the correct directory (backend/)
Check file encoding (should be UTF-8)
Restart the server after making changes

5. CORS Issues

Ensure frontend URL is correctly configured in backend
Check CORS middleware configuration
Verify API endpoints are accessible

Getting Help
If you encounter any issues:

Check the Issues section
Search for existing solutions
Create a new issue with detailed description
Contact the development team

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

Smart India Hackathon 2024 for the opportunity
Maharaja Agrasen Institute of Technology for support
Open source community for amazing tools and libraries
All contributors and team members
Industry mentors and judges for valuable feedback


<div align="center">
Made with ❤️ by Team Scholar Saarthi (Ishan Mehta)
⭐ Star this repository if you found it helpful! ⭐
🐛 Report Bug • ✨ Request Feature • 📖 Documentation
</div>