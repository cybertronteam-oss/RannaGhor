# RannaGhor - Taste the Home

RannaGhor is a minimal, responsive restaurant website built with React and Node.js. It features a modern dark-themed design, a full ordering flow (Menu -> Cart -> Checkout), and a simple file-based backend for managing menu items and orders.

## Technologies Used

- **Frontend:** React (Vite), Axios, React Router DOM, CSS3 (Custom Properties)
- **Backend:** Node.js, Express, LowDB-style JSON storage
- **Design:** Modern dark mode with #ff6b3d accent, glassmorphism effects, and responsive grid layouts.

## Project Structure

```
/resturant
  /backend
    /data          # JSON data storage
    index.js       # API server
  /frontend
    /public        # Static assets
    /src
      /components  # Reusable UI components
      /contexts    # State management (Cart)
      /pages       # Route components
      App.jsx      # Main app component
      api.js       # Axios configuration
      index.css    # Global styles & variables
```

## How to Run

### 1. Start the Backend
Open a terminal:
```bash
cd backend
npm install
npm start
```
The server will start on `http://localhost:5000`.

### 2. Start the Frontend
Open a **new** terminal:
```bash
cd frontend
npm install
npm run dev
```
The application will open at `http://localhost:5173` (or similar).

## Features & Usage

1. **Browse Menu:** Visit the "Menu" page to filter and view food items.
2. **Cart Management:** Add items, adjust quantities, or remove them in the Cart.
3. **Checkout:** Fill in your details and place an order.
4. **Order Tracking:** Receive a unique Order ID upon success.

## Admin API Examples

**Get All Orders**
```bash
curl -H "x-admin-key: ranna-secret-2025" http://localhost:5000/api/orders
```

**Add New Menu Item**
```bash
curl -X POST http://localhost:5000/api/admin/menu \
  -H "Content-Type: application/json" \
  -H "x-admin-key: ranna-secret-2025" \
  -d '{
    "name": "Spicy Pasta",
    "description": "Fiery tomato sauce with fresh basil.",
    "price": 11.99,
    "imageUrl": "/images/starter.jpg",
    "category": "Main"
  }'
```
