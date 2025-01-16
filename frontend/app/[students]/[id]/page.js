import {useState, useEffect} from 'react'
import { services } from '@/services/utils'

function Student({params}) {
  const [student, setStudent] = useState({})
  useEffect(()=>{
    (async () => {
          try {
         
             let data = await services.getSingleStudent()
            
            setStudent(data)
          } catch (err) {
            throw err;
          }
        })()
  }, [])
  return (
    <div>page</div>
  )
}

export default Student