import { createTheme, ThemeProvider } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '../components/header';


const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#232326',
      white: '#ffffff',
    },
    primary: {
      main: '#F2B90F',
      dark: '#dead18',
      light: '#edc344',
      contrastText: '#f2f2f2'
    },
    secondary: {
      main: '#1088E5',
      light: '#2893e6',
      dark: '#266fd5',
      contrastText: '#f2f2f2'
    },
  }
});

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
      {
        path: 'projects',
        element: <div>Projects</div>
      },
      {
        path: 'roadmap',
        element: <div>Parcours</div>
      },
      {
        path: 'about',
        element: <div>About me</div>
      }, 
    ],
    errorElement: (
      <div>
        <Header />
        <p>404 page</p>
      </div>
    )
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
   </ThemeProvider>
  )
}

export default App