import { createTheme, ThemeProvider } from '@mui/material';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import global_en from './assets/loc/en/global.json';
import global_fr from './assets/loc/fr/global.json';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Academics from './pages/academics';
import Hire from './pages/hire';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Project from './pages/project';
import Projects from './pages/projects';
import { CURRENT_APP_LANG_LOCALSTORAGE_KEY } from './utils/languages';
import { useEffect } from 'react';


// loc files initialization
i18next.init({
  interpolation: {escapeValue: true},
  lng: localStorage.getItem(CURRENT_APP_LANG_LOCALSTORAGE_KEY) ?? 'fr',
  fallbackLng: 'fr',
  resources: {
    en: {
      global:global_en
    },
    fr: {
      global:global_fr
    }
  }
})

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // Remove classic breakpoints labels
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    // Add new breakpoints labels
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    projector: true;
  }
}

const theme = createTheme({
  breakpoints: {
    // Redefines new breakpoints values
    values: {
      mobile: 0,
      tablet: 700,
      laptop: 900,
      desktop: 1200,
      projector: 1536
    }
  },
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
      dark: '#0e62d6',
      contrastText: '#f2f2f2'
    },
  }
});

const AppLayout = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'projects/:id',
        element: <Project />
      },
      {
        path: 'projects',
        element: <Projects />,
      },

      {
        path: 'roadmap',
        element: <Academics />
      },
      {
        path: 'about',
        element: <About />
      }, 
      {
        path: 'hire',
        element: <Hire />,
      },
    ],
    errorElement: (
      <div className='viewSection'>
        <Header />
        <NotFound />
        <Footer />
      </div>
      
    )
  }
])

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
   </I18nextProvider>
  )
}

export default App