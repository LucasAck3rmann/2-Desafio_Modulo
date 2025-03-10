import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import { GlobalStyles } from './styles/globalStyles';

// Configuração do cliente de consulta para React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Não recarrega dados quando a janela ganha foco
      retry: 1, // Tenta apenas uma vez em caso de falha
    },
  },
});

/**
 * Componente principal da aplicação
 * Configura o React Query, estilos globais e rotas
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles /> {/* Aplicação dos estilos globais */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para página inicial */}
          <Route path="/user/:username" element={<UserDetails />} /> {/* Rota para detalhes do usuário com parâmetro dinâmico */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
