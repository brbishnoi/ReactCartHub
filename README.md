# React E-commerce Application using token authentication

Welcome to the React E-commerce Application! This application provides a full-fledged e-commerce experience with user authentication, product browsing, and a shopping cart.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js: [Download Node.js](https://nodejs.org/)
- npm: Included with Node.js installation

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/react-e-commerce-app.git
    cd react-e-commerce-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

    The application will be accessible at `http://localhost:3000`.

## Project Structure

- **`src/App.js`:** Main component handling routing using React Router.
- **`src/AuthService.js`:** Manages user authentication, login, logout, and token retrieval.
- **`src/Cart.js`:** Displays the shopping cart, allows item removal, and calculates the total price.
- **`src/CartItem.js`:** Represents an individual item in the shopping cart.
- **`src/Home.js`:** Displays the product catalog, with filtering options, and allows users to add products to their cart.
- **`src/Login.js`:** Handles user login, redirecting users to the home page upon successful login.
- **`src/Logout.js`:** Provides a logout button to log users out of the application.
- **`src/Product.js`:** Represents a product, allowing users to add it to their cart.
- **`src/Protected.js`:** A higher-order component (HOC) ensuring only authenticated users can access certain routes.

## Application Flow

1. Users start on the login page where they enter their credentials.
2. Upon successful login, users are redirected to the home page.
3. The home page displays products with options to filter by name and price range.
4. Users can add products to their shopping cart.
5. The cart page shows the added items, allows users to remove items, and displays the total price.
6. Users can log out from any page using the logout button.

## Dummy Credentials for Testing

- **Username:** kminchelle
- **Password:** 0lelplR

## Customize and Contribute

Feel free to explore the code and customize the application based on your needs. If you encounter any issues or have suggestions, please open an issue or submit a pull request.

Happy coding!