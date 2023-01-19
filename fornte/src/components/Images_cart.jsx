import React from 'react'

const Images_cart = (x) => {
    return (
        <div key={x.x.id} className='col-lg-3 Image_styles '>
            <img style={{ width: '100%' }} src={x.x.image} alt="" />
            <div className='Imges_style_bottom'>
                <p>{x.x.text}</p>
            </div>
        </div>
    )
}

export default Images_cart