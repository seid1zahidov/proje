import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { reducer } from '../../reducer/First_images'
import '../../assets/css/Images.css'
import Images_cart from '../../components/Images_cart'
const initialState = {
  data: '',
  error: '',
  loading: ''
}
const Images = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'Axios-Start' })
    const AxiosFetch = async () => {
      await axios.get('http://localhost:3003/Images')
        .then(res => dispatch({ type: 'Axios-contuniue', payload: res.data.images }))
        .catch(error => dispatch({ type: 'Axios_error', payload: console.log(error) }))
        
    }
    AxiosFetch()
  }, [])

  return (
    <div className='Images '>
      <div className="row">
        {state.data && state.data.map((x) => (
          <Images_cart x={x} />
        ))}
      </div>
    </div>
  )
}

export default Images