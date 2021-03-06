import { Routes, Route, BrowserRouter } from "react-router-dom";
import PublicPage from "./routes/PublicPage";
import Layout from "./components/Layout/Layout";
import Login from "./routes/Login";
import Contact from "./routes/Contact";
import ProtectedPage from "./routes/ProtectedPage";
import { AuthProvider, RequireAuth } from "./context/auth-context";

function App() {
  return (
   
    <AuthProvider>
      <Routes>
      
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
    
        </Routes>
        
      </AuthProvider>
  );
}

export default App;
