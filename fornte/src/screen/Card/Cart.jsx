import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import '../../assets/css/Cart.css'
import { reducer } from '../../reducer/Cart_reducer'
import { BsCircleFill } from 'react-icons/bs';

const initialstate = {
    data: '',
    loading: false,
    error: ''
}
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        dispatch({ type: 'Axios-Start' })
        const axsiosfech = async () => {
            await axios.get('http://localhost:3003/Cart')
                .then(res => dispatch({ type: 'Axios-contuniue', payload: res.data.cart }))
                .catch(error => dispatch({ type: 'Axios-error', payload: console.log(error) }))
        }
        axsiosfech()
    }, [])
    return (
        <>
            <div className="container-fluid Cart_body">
                <div className="row">
                    {state.data && state.data.map((e) => (
                        <div key={e.id} className='col-lg-4 Cart_main'>
                            <hr />
                            <BsCircleFill className='ms-5 Cart_icon' /> <span className='ms-2' >{e.text_up}</span>
                            <img src={e.image}  alt="" />
                            <h6>{e.text}</h6>
                            <p>{e.text_down}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cart