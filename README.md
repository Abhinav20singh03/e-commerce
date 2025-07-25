# Thrift Treasure E-Commerce Platform

**Thrift Treasure** is a comprehensive full-stack e-commerce platform designed to modernize thrift shopping. Built with React (Vite) for the frontend and powered by Node.js, Express, and MongoDB on the backend, the platform includes dedicated applications for customers, admins, and server APIs.

---

## 🔧 Project Architecture & Structure

| Directory            | Framework         | Purpose            | Key Features                           |
| -------------------- | ----------------- | ------------------ | -------------------------------------- |
| `Project` (Frontend) | React + Vite      | Customer interface | Product catalog, cart, authentication  |
| `Admin`              | React + Vite      | Admin dashboard    | Product management, order tracking     |
| `Backend`            | Node.js + Express | API & server logic | User mgmt, image upload, payment, auth |

---

## 🎯 Features & Functionality

### 🌐 Frontend User Experience

- **Product Catalog**: 50+ curated products
- **Category Navigation**: Men, Women, Kids → Topwear, Bottomwear, Winterwear
- **Advanced Search**: Real-time filtering
- **Shopping Cart**: Add/remove items, quantity management
- **Size Selection**: S, M, L, XL, XXL
- **Price Sorting**: Low → High, High → Low
- **Responsive Design**: Mobile-first layout
- **Dynamic Navbar**: Cart counter, mobile sidebar
- **Product Cards**: Image, price, category
- **Toast Notifications**: Using `react-toastify`

### 🔐 Authentication System

- **Login/Signup**: Complete flow
- **Guest Access**: `guest@gmail.com / guest123`
- **Password Hashing**: With `bcrypt`
- **JWT Tokens**: For secure access

### 🛠️ Admin Dashboard

- **Add/Edit/Delete Products**: CRUD with Cloudinary image support
- **Image Management**: Upload via Cloudinary
- **Product Categorization**: Systematic management

---

## 🧱 Technology Stack

### 📦 Frontend (Project)

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-toastify": "^11.0.2",
  "react-router-dom": "^7.0.2"
}
```

### 📦 Admin Panel

```json
"dependencies": {
  "axios": "^1.7.9",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "react-toastify": "^11.0.3"
}
```

### 📦 Backend

```json
"dependencies": {
  "bcrypt": "^5.1.1",
  "cloudinary": "^2.5.1",
  "cors": "^2.8.5",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.9.2",
  "multer": "^1.4.5-lts.1",
  "razorpay": "^2.9.5",
  "stripe": "^17.5.0",
  "validator": "^13.12.0"
}
```

---

## 🧩 Database Schemas

### 🛍 Product Model

```js
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  subCategory: String,
  sizes: Array,
  bestseller: Boolean,
  date: Number
})
```

### 👤 User Model

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  cartData: { type: Object, default: {} }
}, { minimize: false })
```

---

## ⚙️ Installation & Setup

### 🔍 Prerequisites

- Node.js (14+)
- MongoDB Atlas
- Cloudinary account

### 🖥 Frontend (Project)

```bash
git clone https://github.com/Abhinav20singh03/e-commerce.git
cd e-commerce/Project
npm install
npm run dev
```

### 🖥 Admin Panel

```bash
cd e-commerce/admin
npm install
npm run dev
```

### 🖥 Backend

```bash
cd e-commerce/backend
npm install
npm start     # or: npm run server
```

### 🌱 .env Setup

```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
```

---

## 📡 API Endpoints

### 📦 Product APIs

- `GET /api/products/list` → Fetch all products
- `POST /api/products/add` → Add product (admin)
- `POST /api/products/remove` → Delete product
- `POST /api/products/single` → Get single product details

### 👤 User APIs

- `POST /api/user/register` → Register
- `POST /api/user/login` → Login
- `POST /api/user/admin` → Admin login

---

## 🧠 State Management

Using **React Context API** for:

- Product and cart state
- Authentication
- UI controls (sidebar, sorting)
- Order processing

```js
const AppContext = createContext();
const value = {
  products,
  cartProducts,
  setCartProducts,
  orderedProduct,
  setOrderedProducts,
  sortType,
  setSortType,
  sideNavbarVisible,
  setSideNavbarVisible,
  loggedIn,
  setLoggedIn,
  shipping
}
```

---

## 🗺 Page Routing

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/collection" element={<Collection />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/search" element={<Search />} />
  <Route path="/place-order" element={<PlaceOrder />} />
  <Route path="/orders" element={<Orders />} />
</Routes>
```

---

## 🔐 Security & Middleware

- **JWT Middleware**: Secures private routes
- **bcrypt**: Password encryption
- **Multer + Cloudinary**: Secure image uploads

---

## 💳 Payment Integration

Supports:

- **Stripe**
- **Razorpay**
- **Cash on Delivery (COD)**

---

## 🚀 Build & Deploy

### 🏗 Build Frontend/Admin

```bash
cd Project && npm run build
cd ../admin && npm run build
```


## 📱 Live Demo

🔗 [https://e-commerce-two-cyan-73.vercel.app](https://e-commerce-two-cyan-73.vercel.app)

**Guest Login:**

- Email: `guest@gmail.com`
- Password: `guest123`

---

## 🌱 Future Enhancements

- Real-time inventory updates
- Analytics dashboard
- Multi-vendor support
- AI recommendations
- Mobile app integration
- Social commerce

---

## 🤝 Contributing

```bash
git checkout -b feature/YourFeature
git commit -m "Add new feature"
git push origin feature/YourFeature
```

Submit a pull request.

---

## 🧑‍💻 Support

- Email: [abhinav20singh03@gmail.com](mailto\:abhinav20singh03@gmail.com)
- Phone: 8755880855
- Location: H-225 SRMIST, Ghaziabad, UP

---

Thrift Treasure delivers a seamless and sustainable thrift shopping experience with modern tech and UI/UX practices.

