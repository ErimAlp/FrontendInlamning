import React from 'react'
import leftImg from '../../assets/office-style.png'
import rightImg from '../../assets/party-style.png'

const SalesShowcase = () => {
    return (
        <section className='sale-showcase'>
            <div className='googo'>

                <div className='left-image-section'>
                    <img src={leftImg} alt="Office Style" />
                </div>

                <div className='middle-section'>
                    <div className='title'>50% Offer</div>
                    <div className='desc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore</div>
                    <button className='btn-theme'>FLASH SALE</button>
                </div>

                <div className='right-image-section'>
                    <img src={rightImg} alt="Party Style" />
                </div>
            </div>
        </section>
    )
}

export default SalesShowcase