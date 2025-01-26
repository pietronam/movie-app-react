import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { BrowserRouter, Route, Routes } from 'react-router'
import Detail from './pages/Detail.tsx'
import Home from './pages/Home.tsx'
import Base from './components/Base.tsx'
import "./scrollbar.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Search from './pages/Search.tsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<Base />}>
              <Route index element={<Home />} />
              <Route path="/detail/:content_type/:content_id" element={<Detail />} />
              <Route path="/search/" element={<Search />} />

            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
