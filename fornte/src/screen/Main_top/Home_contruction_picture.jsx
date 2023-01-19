import React, { useEffect, useState, useReducer } from 'react'
import { reducer } from '../../reducer/Home_Contruction_picture'
import axios from 'axios'
import '../../assets/css/header/Home_contruction_picture.css'
import Home_contruction_Picture_second from './Home_contruction_Picture_second'
import { HiArrowLongRight } from 'react-icons/hi2';

const initialState = {
  data: '',
  error: '',
  loading: false
}
const Home_contruction_picture = () => {
  const [state, dispatch] = useReducer(reducer, initialState )

  useEffect(() => {
    dispatch({ type: 'Axios_start' })
    const axiosFetch = async () => {
      await axios.get('http://localhost:3003/Main_top')
        .then(res => dispatch({ type: 'Axios_succes', payload: res.data.house }))
        .catch(error => dispatch({ type: 'Axions_error', payload: console.log(error) }))
    }
    axiosFetch()
  }, [])
  

  return (
    <div className='row'>
      <div className='col-lg-6'>
        {state.data && state.data.map((x) => (
          <div key={x.id} className='Main-top-photo_left'>
            <img src={x.image} alt={x.text} />
            <div className='Main-top-photo_left-texts'>
              <p>{x.text}</p>
              <span>{x.text_down}</span>
              <br />
              <br />
              <h3>{x.texts} <HiArrowLongRight style={{fontSize: '60px'}} /></h3>
             
            </div>
          </div>
        ))}
      </div>
      <div className="col-lg-6">
      <Home_contruction_Picture_second />
      </div>
     
    </div>
  )
}

export default Home_contruction_picture