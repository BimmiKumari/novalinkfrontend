import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { toast } from 'react-hot-toast';
const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  
  const [title, setTitle] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const [Marks,setMarks] = useState(0);
  
 

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {title, reps}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setReps('')
      setError(null)
      setEmptyFields([])
      setMarks(Marks+1)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      toast.success('Good did keep it up' ,{
        duration: 5000,});
    }

  }
 return (
    <form className="create" onSubmit={handleSubmit}>
      <h4 className="shine"> <span>Workfit</span> : "365days of fitness challenge "</h4>
      <label>Excercise/Yoga Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

     

      <label>Time(in min):</label>
      <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />
      <div style={{display:'flex',flexDirection:'row'}}>
      <button >Add Workout  </button> <div className='Marks'> Coin earned :{Marks}</div></div>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm