import { createGlobalStyle } from 'styled-components';
// Importação das variantes da fonte Montserrat
import '@fontsource/montserrat/400.css'; // Regular
import '@fontsource/montserrat/500.css'; // Medium
import '@fontsource/montserrat/600.css'; // Semi-bold
import '@fontsource/montserrat/700.css'; // Bold

/**
 * Configurações de tema
 */
const theme = {
  colors: {
    primary: '#05478A',
    background: '#f5f5f5',
    text: '#333',
  },
  breakpoints: {
    desktop: '1024px',
    tablet: '768px',
    mobile: '640px',
    smallMobile: '480px',
  },
};

/**
 * Estilos globais da aplicação
 * Define a tipografia, cores base e estilos de reset
 */
export const GlobalStyles = createGlobalStyle`
  /**
   * Reset CSS
   */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /**
   * Estilos base
   */
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    overflow-x: hidden;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /**
   * Elementos interativos
   */
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /**
   * Tipografia responsiva
   */
  html {
    font-size: 16px; // Base size for desktop
    
    @media (max-width: ${theme.breakpoints.desktop}) {
      font-size: 15px;
    }
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 14.5px;
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 14px;
    }
    
    @media (max-width: ${theme.breakpoints.smallMobile}) {
      font-size: 13px;
    }
  }

  /**
   * Classes utilitárias
   */
  // Container responsivo padrão
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  // Ocultar barras de rolagem
  .no-scrollbar {
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // IE e Edge
    
    &::-webkit-scrollbar {
      display: none; // Chrome, Safari e Opera
    }
  }
  
  // Correção para altura do viewport em navegadores mobile
  .vh-fix {
    height: 100vh;
    
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
  
  // Classe para manter o foco acessível mas visualmente oculto
  .focus-visible:focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
