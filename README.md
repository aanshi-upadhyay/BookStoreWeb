📁 bookstore-web
│
├── 📁 client             # Frontend Code
│   ├── 📁 public         # Public assets like images, icons, etc.
│   ├── 📁 src
│       ├── 📁 components # Reusable React components
│       ├── 📁 pages      # Pages (Home, Book Details, Profile, etc.)
│       ├── 📁 styles     # CSS and Tailwind CSS files
│       └── 📁 utils      # Utility functions and helpers
│
├── 📁 server             # Backend Code
│   ├── 📁 controllers    # Controllers for handling routes
│   ├── 📁 models         # Database models (MongoDB)
│   ├── 📁 routes         # API routes
│   └── 📁 config         # Configuration files (DB, JWT, etc.)
│
├── 📄 README.md          # Project documentation
└── 📄 package.json       # Dependencies and project metadata
# For the server
cd server
npm start

# For the client
cd client
npm start
