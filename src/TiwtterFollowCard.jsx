import { useState } from "react"

export function TiwtterFollowCard ({ username, name }) {
    const [isfollowing, setIsFollowing] = useState(false)

    const text = isfollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isfollowing 
    ? 'ig-followCard-button is-following' 
    : 'ig-followCard-button' 

    const handleClick = () => {
        setIsFollowing(!isfollowing)
    }

    return(
        <article className='ig-followCard'>
          <header className='ig-followCard-header'>
            <img className='ig-followCard-avatar'
            alt="el avatar" 
            src={`https://unavatar.io/${username}`}>

            </img>
            <div className='ig-followCard-info'>
                <strong>
                    {name}
                </strong>

                <span className='ig-followCard-infoUsername'>
                    @{username}
                </span>
            </div>
          </header>

          <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
                </button>
          </aside>


    </article>
    )
}
