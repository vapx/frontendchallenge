import React from 'react'
import './newsletter.styles.css'

import { ReactComponent as SvgLogo } from '../../assets/images/illustration-sign-up-mobile.svg'
import { ReactComponent as IconList } from '../../assets/images/icon-list.svg'

const Newsletter = () => {

  const IconListData = [
    { id: 1, "icon": <IconList />, "text": "Product discovery and building what matters" },
    { id: 2, "icon": <IconList />, "text": "Measuring to ensure updates are a success" },
    { id: 3, "icon": <IconList />, "text": "And much more!" },
  ]
  return (
    <div className="newsletter-container">
      <SvgLogo />
      <div className='newsletter-content-container'>
        <h1 className='charcoal-grey fw-bold'>Stay updated!</h1>
        <p className='charcoal-grey pt-3 fs-16' style={{ fontWeight: "bold" }}>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className='newsletter-content-container'>
          <ul className='list-data-container'>
            {IconListData.map((data) => {
              return (
                <li key={data.id} className='list-container'>
                  <div className='icon-container'>{data.icon}</div>
                  <span className='charcoal-grey'>{data.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
