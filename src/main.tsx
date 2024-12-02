import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import { Provider } from './components/ui/provider'
import { BrowserRouter, Route, Routes } from 'react-router'
import DetailLayout from './pages/DetailLayout.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path="/detail/:id" element={<DetailLayout/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
