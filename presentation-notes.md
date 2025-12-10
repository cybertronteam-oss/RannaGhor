# RannaGhor - Presentation Notes

## Project Overview
- **Name:** RannaGhor ("Kitchen" in Bengali)
- **Goal:** A seamless, responsive food ordering platform bringing home-cooked flavors to users.
- **Tech Stack:** React (Frontend), Node.js + Express (Backend), JSON File System (Database).

## Key Features
- **Dynamic Menu:** Fetches real-time data from the backend.
- **Persistent Cart:** Uses React Context + LocalStorage so you don't lose items on refresh.
- **Responsive Design:** Mobile-first approach, looks great on phones, tablets, and desktops.
- **Simple Checkout:** clear, validatable form that posts data to the server.
- **Admin Capability:** Secure endpoint to view orders and manage menu items.

## Demo Script (60 Seconds)

1.  **Intro (0:00-0:10):**
    *   "Hi, I present RannaGhor. It's a full-stack restaurant app designed for speed and simplicity."
    *   *Show Home Page.* "Notice the clean, dark-themed UI and the 'Order Now' CTA."

2.  **The Flow (0:10-0:35):**
    *   *Click Order Now -> Menu.*
    *   "Here we have the menu, fetched dynamically from our Node.js backend. I can filter by category."
    *   *Add 'Biryani' and 'Burger' to cart.*
    *   *Go to Cart.* "In the cart, I can adjust quantities. The total updates instantly."

3.  **Checkout (0:35-0:50):**
    *   *Click Checkout -> Fill Form.*
    *   "I'll enter my details. The form ensures I don't miss anything."
    *   *Place Order.* "Once placed, the backend generates a unique Order ID and saves it."

4.  **Backend & Conclusion (0:50-1:00):**
    *   "Behind the scenes, we use a REST API with a simple admin key security layer."
    *   "RannaGhor is about combining aesthetics with functionality. Thank you!"

## Implementation Highlights
- **State Management:** `CartContext` handles complex state logic cleanly across the app.
- **Styling:** Custom CSS variables for consistent theming (`--accent`, `--bg-secondary`).
- **Architecture:** Separation of concerns with `api.js` client and component-based structure.
