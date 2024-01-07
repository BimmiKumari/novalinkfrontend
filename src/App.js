import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { Toaster } from 'react-hot-toast';
import Profile from './components/Profilee';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Emailsend from './components/Emailsend'
import ScreenRecording from './components/ScreenRecording';
import Recorder from './components/Recorder';
import Calender from './components/Calender';
import Otpverify from './components/Otpverify';
function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            
            <Route 
              path="/screenRecorder" 
              element={user ? <ScreenRecording /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/record" 
              element={user ? <Recorder /> : <Navigate to="/login" />} 
            />
              <Route 
              path="/calender" 
              element={user ? <Calender/> : <Navigate to="/login" />} 
            />
            
             <Route 
              path="/help" 
              element={user ? <Emailsend/> : <Navigate to="/login" />} 
            />

            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
             <Route 
              path="/email" 
              element={user ? <Emailsend/> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={user ? <Profile/> : <Navigate to="/login" />} 
            />
             <Route 
              path="/verify" 
              element={<Otpverify/>}
            />
            
          </Routes>
          

        </div>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;