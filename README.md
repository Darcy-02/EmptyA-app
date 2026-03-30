# EmptyArt

An artwork social platform where users upload their artworks, discover other artists, and interact through likes, comments, bookmarks, and follows.

## Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS 4, React Router 7, Motion (Framer Motion), React Hot Toast  
**Backend:** Flask 3, Flask-SQLAlchemy, SQLite, PyJWT, Flask-CORS  
**Auth:** JWT-based (stored in localStorage)
**Nginx**
**Gunicorn**


## Project Structure

```
EmptyArt/
├── backend/          
│   ├── app.py         
│   ├── database.py    
│   ├── helpers.py     
│   ├── routes/
│   │   ├── auth.py   
│   │   ├── uploads.py
│   │   ├── reactions.py
│   │   ├── users.py  
│   │   └── admin.py   
│   ├── static/       
│   ├── instance/     
│   ├── .env          
│   └── requirements.txt
├── frontend/         
│   ├── src/
│   │   ├── App.jsx    
│   │   ├── api.js     
│   │   ├── components/
│   │   │   ├── Landing.jsx  
│   │   │   ├── Feed.jsx       
│   │   │   ├── Explore.jsx    
│   │   │   ├── Profile.jsx    
│   │   │   ├── Upload.jsx     
│   │   │   ├── Bookmarks.jsx  
│   │   │   ├── PostDetail.jsx 
│   │   │   ├── AppNav.jsx    
│   │   │   ├── AdminDashboard.jsx 
│   │   │   └── ...
│   │   └── index.css
│   ├── .env          
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm

### Clone the project

```bash
git clone https://github.com/Darcy-02/EmptyA-app.git
cd EmptyA-app
```

### Backend Setup

```bash
cd backend

# Create and activate a virtual environment
python3 -m venv .venv

#Linux/Mac:
source .venv/bin/activate

#Windows:
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
SECRET_KEY=your-secret-key
DATABASE_URI=sqlite:///emptyart.db

# Run the server
python3 app.py
```

The API runs at **http://localhost:5000**. Visit it in your browser to use the built-in API tester.

### Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at **http://localhost:5173**.

### How I deployed it on my server
User -> Nginx -> React + Flask

### Run flask using Gunicorn
```
gunicorn -w 4 -b 127.0.0.1:5000 app:app
(can only be accessed inside server)
```
### Build the app
bash
```
npm run build
```

### Edit Nginx Config
Nginx
```
server {
    listen 80;
    server_name _;

    location / {
        root /home/lin/EmptyA-app/frontend/dist;
        index index.html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```
This call "http://localhost:5000" won't work in production, instead change the frontend environment to this "VITE_API_URL=https://howler-01.tail595d00.ts.net"

### then rebuild
bash
```
npm run build
```
### Access the live app on "https://howler-01.tail595d00.ts.net" thanks to Tailscale

### Problems I faced and how I fixed them:
1. Images not working: fixed the API URL
2. Nginx not working: fixed the config folder
3. Frontend not connecting: rebuilt after env change

### Next Steps:
1. Improve UI and
2. add games
3. add digital museum
4. add a Calender for physical exhibitions taking place
5. add direct messages and buying artwork
6. add job openings for artists 

## Existing features

- **Auth** 
- **Upload** 
- **Feed** 
- **Explore** 
- **Profiles** 
- **About**
- **Reactions** 
- **Follow System**  
- **Admin Panel** 
- **Dark Mode**

### References

Frontend
React — https://react.dev/
Vite — https://vitejs.dev/
Tailwind CSS — https://tailwindcss.com/
React Router — https://reactrouter.com/
Framer Motion — https://www.framer.com/motion/

Backend
Flask — https://flask.palletsprojects.com/
Flask-SQLAlchemy — https://flask-sqlalchemy.palletsprojects.com/
SQLite — https://www.sqlite.org/
PyJWT — https://pyjwt.readthedocs.io/
Flask-CORS — https://flask-cors.readthedocs.io/

Deployment & Server
Nginx — https://nginx.org/
Gunicorn — https://gunicorn.org/
Tailscale — https://tailscale.com/

Inspiration
Pinterest - https://www.pinterest.com/

