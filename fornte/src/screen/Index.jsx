import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { reducer } from '../reducer/Index_reducer'
import Custom_Home from './Custom_home/Custom_Home'
import Home_contruction_picture from './Main_top/Home_contruction_picture'
import '../assets/css/index.css'
import Images from './first_imgaes/Images'
import About from './About/About'
import Cart from './Card/Cart'

const initialState = {
  data: '',
  error: '',
  loading: false
}
const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: 'Axios_start' })
    const axiosFetch = async () => {
      await axios.get('http://localhost:3003/Marka')
        .then(res => dispatch({ type: 'Axios-contuniue', payload: res.data.marka }))
        .catch(error => dispatch({ type: 'Axios_error', payload: console.log(error) }))
    }
    axiosFetch()
  }, [])  


  return (
    <>
      <Home_contruction_picture />
      <Custom_Home />
      <div className='seid container-fluid '>
        {state.data && state.data.map((x) => (
          <div key={x.id} className='col-lg-1'>
            <img  src={x.image} alt="" />
          </div>
        ))}
      </div>
      <Images />
      <About />
      <Cart />
    </>
  )
}

export default Index