import axios from 'axios'
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { reducer } from '../../reducer/Home_Contruction_picture2'
import '../../assets/css/Home_contruction_Picture_Second.css'

const initialState = {
    data: '',
    error: '',
    loading: false
  }
const Home_contruction_Picture_second = () => {
  const [state, dispatch] = useReducer(reducer, initialState )
  useEffect(() => {
    dispatch({ type: 'Axios_start' })
    const axiosFetch = async () => {
      await axios.get('http://localhost:3003/Main_top_secont')
        .then(res => dispatch({ type: 'Axios_succes', payload: res.data.house }))
        .catch(error => dispatch({ type: 'Axions_error', payload: console.log(error) }))
    }
    axiosFetch()
  }, [])

  return (
    <div>
      {state.data && state.data.map((x) => (
          <div key={x.id} className='Main-top-photo_right'>
            <img  src={x.image} alt={x.text} />
            <div className='Main-top-photo_right-texts'>
              <p>{x.text}</p>
            </div>
          </div>
        ))}
   </div>
  )
}

export default Home_contruction_Picture_second