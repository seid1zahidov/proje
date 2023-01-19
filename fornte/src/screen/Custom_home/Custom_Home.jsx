import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Custom } from '../../reducer/Custom_Homes'
import '../../assets/css/Custom_Homes.css'

const initialState = {
  data: '',
  error: '',
  loading: ''
}

const Custom_Home = () => {
  const [state, dispatch] = useReducer(Custom, initialState)

  useEffect(() => {
    dispatch({ type: 'Axios-Start' })
    const AxiosFetch = async () => {
      await axios.get('http://localhost:3003/Custom')
        .then(res => dispatch({ type: 'Axios-contuniue', payload: res.data.house }))
        .catch(error => dispatch({ type: 'Axios_error', payload: console.log(error) }))
    }
    AxiosFetch()
  }, [])


  return (
    <>
      {state.data && state.data.map((x) => (
        <div key={x.id} className='Custom_home'>
          <div className="Custom-Home-Builder_text ">
            <h1>{x.text}</h1>
            <p>{x.text_down}</p>
            <span><a href="">{x.text_link}</a></span>
          </div>
            <img className='Custom_home-image' src={x.image} alt="" />
        </div>
      ))}
    </>
  )
}

export default Custom_Home