# Funding Pips Frontend Assessment - Completed


This project is completed as part of the Funding Pips Frontend Assessment. The goal of this project was to build a Stock Price Tracker Dashboard using modern frontend technologies. React, Redux Toolkit, Tailwind CSS, TypeScript, and Testing Library were used in this project. Additionally, optimizations for performance and responsive design were implemented.

---

## **Features**


1. Stock Price Tracker Dashboard:
   - **Data Fetching**: The stock list is taken from a static data set.
   - **Sorting and Filtering**: The table supports sorting and filtering for easy data search.
Pagination: For better performance, data is paginated.

2. Favorites List:
   - **Add/Remove from Favorites**: Users can add or remove stocks from their favorites list and view them in a separate list.
   - **State Management with Redux Toolkit**: The state of stocks and the favorites list is managed using Redux Toolkit.

3. **Responsive Design**:
   - **Fully Responsive**: The fully responsive app provides an optimized user experience across different devices (mobile, tablet, desktop).
   - **Tailwind CSS:**: Tailwind CSS styles the UI, providing a flexible and fast design implementation.
  
4. **Performance Optimizations**:
   - **Lazy Loading**: Lazy loading is implemented for the stock table to improve the initial load time of the app.
   - **Memoization:**:  Memoization techniques are used in React to reduce unnecessary re-renders.
  
  5. **Testing**:
   - **Unit Tests**: Unit tests are written for various parts of the application, including Redux slices and individual components.
  
---



## **Getting Started**

Install all dependencies using the following command:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   
3. Open http://localhost:3000 with your browser to see the result.

4. Run Test:
   ```bash
   npm test
   ```
---

## **Design Decisions**


   - State Management with Redux Toolkit: Redux Toolkit was chosen for state management because of its simplicity and optimized features.
   - Tailwind CSS: Tailwind CSS was used for styling the UI because of its flexibility and speed in design.
   - ag-Grid for Table: ag-Grid was used for displaying the stock table because it provides advanced features like sorting, filtering, and pagination.

---

## **Performance Optimizations**

   - Lazy Loading: Lazy loading for the stock table enhances the initial load speed of the app.
   - Memoization: React's useMemo was used to prevent unnecessary re-renders.


