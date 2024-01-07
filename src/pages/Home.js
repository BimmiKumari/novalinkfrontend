import { useEffect }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import Assitant from '../Assitant'


const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      
     <div className="workfit">
      <WorkoutForm />
       <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
       </div>
       
      </div>
      <div className='bkg'>
      <div className='bright-glowing-text'>
       Hey {user.name}👋I am your Assistant <b>NOVA 🤖</b>
      </div>
      <div >
        

      </div>
      <div className="video">
       <Assitant/>
      </div>
      </div>
     
      
      
</div>
  )
}

export default Home