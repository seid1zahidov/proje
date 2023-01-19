import axios from 'axios'
import React , {useEffect , useReducer} from 'react'
import '../../assets/css/About.css'
import { reducer } from '../../reducer/About_reducer'

const inintialstate = {
  data: '',
  loading: false,
  error: ''
}
const About = () => {
  const [state , dispatch] = useReducer(reducer , inintialstate )
  useEffect(() => {
    dispatch({type: 'Axiso-Start'})
    const Axiosfwtch = async() => {
      await axios.get('http://localhost:3003/About')
      .then(res => dispatch({type: "Axios-contuniue" , payload: res.data.about}))
      .catch(error => dispatch({type: "Axios_error" , payload: console.log(error)}))
    }
    Axiosfwtch()
  }, [])
//salam
  
  return (
    <>
      <div className="container_fluid">
        <div className="About_text-center text-center"><h5>Haqqımızda rəqəmlər danışır </h5></div>
        <div className="row About_imgaes_hover">
          {state.data && state.data.map((x) => (
            <div key={x.id} className='col-lg-2 About_images_styles'>
                <img style={{width: '100%' , height: '300px' , objectFit: 'cover'}} src={x.image} alt="" />
                <div className='Abour_images_style_bottom'>
                  <h6>{x.text}</h6>
                  <p>{x.text_down}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About