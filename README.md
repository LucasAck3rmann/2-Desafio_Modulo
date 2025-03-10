# GitHub User Search Documentation

## About the Project

This repository contains a comprehensive application developed during the Front-End module in the 3035Teach course. The project demonstrates advanced concepts of React and TypeScript development, focusing on creating a responsive, accessible, and feature-rich interface for interacting with the GitHub API.

## Purpose of Documentation

This documentation is maintained in English to practice technical writing skills and to make the project accessible to a global audience. The documentation aims to provide clear instructions and insights into the project's structure and functionality.

## Features

- **User Search:** Intuitive interface to search for GitHub users by username with real-time validation
- **Profile View:** Comprehensive display of user profile information including avatar, name, bio, and statistics
- **Repository Carousel:** Interactive carousel displaying user repositories with responsive design for all devices
- **Dynamic Repository Cards:** Cards showing key repository information with hover effects and optimized layout
- **Advanced Repository Modal:** Detailed modal with comprehensive repository information including language, stars, forks, and description
- **Responsive Design:** Fully adaptive interface for desktop, tablet, and mobile devices with optimized layouts
- **Enhanced User Experience:** Smooth transitions, loading indicators, and informative error messages
- **Accessibility Features:** Screen reader support, keyboard navigation, and appropriate contrast ratios

## Technologies Used

- **React 18:** Latest version of the React library with improved performance and features
- **TypeScript 5:** Static typing with advanced type safety features
- **React Query:** Sophisticated data fetching, caching, and state management
- **React Router DOM v6:** Modern routing with improved performance and features
- **Styled Components:** Component-level styling with theme support and dynamic styling
- **React Hook Form:** Efficient form handling with validation and error management
- **GitHub REST API v3:** Integration with GitHub's public API for data retrieval
- **LocalStorage:** Persistent user preferences and search history
- **CSS Grid & Flexbox:** Advanced layout techniques for responsive design
- **Custom Hooks:** Reusable logic for common functionality

## Code Structure

### Main Components

- **Header:** Application header with responsive navigation
- **SearchForm:** Enhanced search form with validation and error handling
- **ErrorMessage:** User-friendly error notifications with automatic dismissal
- **UserProfile:** Comprehensive user profile display with responsive layout
- **RepositoryCarousel:** Interactive carousel with responsive controls
- **RepositoryCard:** Interactive cards with optimized information display
- **RepoModal:** Detailed modal with comprehensive repository information
- **Loading:** Animated loading indicators with fallback states

### Pages

- **Home:** Landing page with search functionality and user-friendly instructions
- **UserDetails:** Dynamic user details page with profile and interactive repository carousel

### Services and Utilities

- **api.ts:** Comprehensive API service with error handling and request optimization
- **types.ts:** Complete TypeScript interfaces for type safety
- **globalStyles.ts:** Theme-based global styling with responsive design
- **hooks/:** Custom React hooks for shared functionality
- **utils/:** Utility functions for common operations

## Responsive Design System

The application implements an advanced responsive design system:

- **Desktop (≥ 1024px):** Full three-column layout with interactive carousel showing 3 repositories
- **Tablet (640px - 1024px):** Adapted two-column layout with repositioned elements and 2 repositories per view
- **Mobile (< 640px):** Optimized single-column layout with enhanced touch targets and 1 repository per view
- **Container queries:** Component-level responsiveness for more flexible layouts

## Performance Optimizations

- **Code splitting:** Lazy loading components for faster initial load times
- **Memoization:** Preventing unnecessary re-renders with useCallback and useMemo
- **Image optimization:** Properly sized images with lazy loading
- **Caching:** Strategic API request caching with React Query
- **CSS optimizations:** Efficient styling with CSS-in-JS

## Accessibility Features

- **Semantic HTML:** Proper use of HTML5 semantic elements
- **ARIA attributes:** Enhanced screen reader support
- **Keyboard navigation:** Full functionality without requiring a mouse
- **Color contrast:** WCAG AA compliance for text readability
- **Focus management:** Visible focus indicators and proper tab order

## Extensions, Tools, and Standards

### Extensions

- **EditorConfig:** Maintains consistent coding styles between different editors and IDEs
- **Prettier:** Code formatter to ensure consistent code style
- **ESLint:** Code quality and style checking with custom rules

### Standards

- **Code Formatting:** Prettier is used to enforce consistent code formatting
- **Linting:** ESLint is configured to follow recommended rules for React, TypeScript, and Prettier
- **Type Safety:** TypeScript is used to ensure type safety and reduce runtime errors
- **Component Structure:** Standardized component organization for better maintainability

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/2-Desafio_Modulo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd desafio-github
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open in the browser:
   ```
   http://localhost:3000
   ```

<div align="center">
  <a href="https://www.3035tech.com/" target="_blank"
  ><img
    src="https://d9hhrg4mnvzow.cloudfront.net/lp.3035tech.com/96c1669d-logo-teach-horiz-branco_1000000000000000000028.png"
    style="
      width: 100px;
      padding: 10px;
      border-radius: 10px;
    "
     target="_blank"
  /></a>
</div>
