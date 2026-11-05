# Product Dashboard (Week 2)

A React dashboard that fetches products from a public REST API and supports search, filtering, detail view, add, update and delete. Built for the AUREX Full-Stack Internship (Month 2, Week 2).

## Live Demo
PASTE-LIVE-LINK

## API Used
DummyJSON Products API: https://dummyjson.com/products

DummyJSON is a public mock API. It accepts POST, PUT and DELETE requests and returns a response, but it does not store the changes permanently. After a page refresh the original data comes back. The app updates its own state after each successful response so the UI reflects the change.

## API Explanation
An API lets the frontend talk to a server. This app sends HTTP requests with `fetch()` and receives JSON data:

Frontend -> API Request -> Server -> Response -> React State -> UI

## Implemented API Operations
| Operation | HTTP Method | Endpoint |
|---|---|---|
| List products | GET | `/products?limit=30` |
| View one product | GET | `/products/{id}` |
| Add product | POST | `/products/add` |
| Update product | PUT | `/products/{id}` |
| Delete product | DELETE | `/products/{id}` |

## Features
- Products loaded from an API (no hardcoded data)
- Navigation bar (Products and Add Product)
- Search by product title
- Filter by category
- Product detail view
- Add, edit and delete products
- Form validation with error messages
- Loading state, error state and empty state
- Responsive layout (grid, flexbox)
- Reusable components

## Component Structure
```
App
├── Navbar
├── SearchBar
├── CategoryFilter
├── ProductList
│   └── ProductCard
├── ProductDetail
└── ProductForm
```

- **App**: holds the main state (products, search, category, selected product, form mode) and all API calls
- **Navbar**: switches between the product list and the add form
- **SearchBar / CategoryFilter**: controlled inputs that send values to App
- **ProductList / ProductCard**: render the filtered products with View, Edit and Delete buttons
- **ProductDetail**: fetches and shows a single product
- **ProductForm**: one form used for both adding and editing, with validation

## Technologies Used
- React.js (useState, useEffect)
- Vite
- Fetch API
- CSS (Grid and Flexbox)
- Git and GitHub
- Vercel

## Setup
1. Clone the repository
   ```
   git clone https://github.com/maryam00420/Aurex-month2-internship.git
   ```
2. Go into the project folder
   ```
   cd Aurex-month2-internship/week-2-api-dashboard
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the development server
   ```
   npm run dev
   ```

## What I Learned
- What REST APIs are and how HTTP methods (GET, POST, PUT, DELETE) work
- Fetching data with `fetch()` and reading JSON responses
- Using `useEffect` to load data when a component mounts
- Handling loading, error and empty states
- Lifting state up and passing functions through props
- Reusing one form component for both create and update

## Blockers / Issues
- The `components` folder was created outside `src`, which caused import errors. Fixed by moving it inside `src`.
- DummyJSON does not save changes, so added, edited and deleted products reset on refresh. Handled by updating local state after each successful response.

## Screenshots
![Products](screenshots/products.png)
![Search](screenshots/search.png)
![Form](screenshots/form.png)

## Author
Maryam | AUREX Full-Stack Internship