# **Infinity Panel**  

## **About**  
Infinity Panel is a powerful and user-friendly management panel designed for seamless server deployment and control. It provides an intuitive interface for users to efficiently manage their services.  

## **Features**  
- 🚀 **Easy Server Management**  
- 🔐 **Secure Authentication**  
- 📊 **Real-Time Monitoring**  
- 🐳 **Docker Support**  
- 🔗 **API Integrations**  

---

## **Installation Guide**  

### **Prerequisites**  
Before installing Infinity Panel, ensure you have the following installed on your system:  
- **Git**  
- **Docker & Docker Compose**  
- **Node.js & npm**  
- **PHP & Composer**  
- **MySQL or PostgreSQL**  

---

### **Installation Steps**  

#### **1️⃣ Clone the Repository**  
<details>
<summary>Click to Copy</summary>

```bash
git clone https://github.com/GlitchBoyopyt/Infinity_Links.git
cd Infinity_Links
```

#### 2. Set Up Environment Variables
Copy the example environment file and configure it according to your setup:
```bash
cp .env.example .env
nano .env  # Edit database credentials and other settings
```

#### 3. Install Backend Dependencies
```bash
cd backend
composer install
php artisan key:generate
php artisan migrate --seed
```

#### 4. Set Up Frontend
```bash
cd ../frontend
npm install
npm run build
```

#### 5. Run Docker Containers (Optional)
If you prefer using Docker for deployment:
```bash
docker-compose up -d
```

#### 6. Start the Panel
```bash
php artisan serve  # Start Laravel backend
npm run dev        # Start Vue frontend
```

## Deployment
For production deployment, consider using:
- **Vercel / Netlify** for the frontend
- **DigitalOcean / AWS / VPS** for the backend
- **Nginx / Apache** as a reverse proxy

## Contributing
Pull requests are welcome! Feel free to fork the repository and submit improvements.

## License
This project is licensed under the MIT License.

## Contact
For support, reach out via GitHub Issues or contact the project owner.

