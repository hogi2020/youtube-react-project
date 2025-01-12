import React from 'react'
import { Link } from 'react-router-dom'
import { todayText } from '../../data/today'

const Today = () => {
    return (
        <section>
            <div>
                <div>
                    <Link to={todayText[0].page}>
                        <img src={todayText} alt={todayText[0].title} />
                    </Link>
                </div>
                
                <div>
                    <span className='today__text'>today!</span>
                    <h3 className='title'>
                        <Link to={todayText[0].page}>{todayText[0].title}</Link>
                    </h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${todayText[0].channelId}`}>{todayText[0].author}</Link>
                        </span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today