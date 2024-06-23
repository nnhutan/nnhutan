import './App.css'
import router from './router'
import { store } from './store'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import Loading from './pages/Loading'


function App() {
  return (
    <ThemeProvider >
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
    </ThemeProvider >
  )
}

export default App
