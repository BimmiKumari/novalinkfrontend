import { useState } from "react"
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin"
import { toast } from 'react-hot-toast';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
    toast.success('Log in to Novalink' ,{
      duration: 5000,});
  }

  return (
    <div style={{width:'500px',margin:'auto'}}>
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        style={{borderRadius:'25px'}} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        style={{borderRadius:'25px'}}
      />
      <button style={{borderRadius:'10px'}} disabled={isLoading}>Log in</button>
       <Link to='/verify'><h5 style={{color:'white'}}> OTP Verification </h5></Link>
    
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default Login