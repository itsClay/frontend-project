import React from 'react'

import './tweet_card.css'

const TweetCard = ({content, created_at, link, username}) => {
  return (
    <article className="TweetCard" href={link}>
      <div className="TweetCard__header">
        <strong className="TweetCard__username">{username}</strong>
        <div className="TweetCard__created_at">{created_at}</div>
        <div className="TweetCard__link">{link}</div>
      </div>
      <div className="TweetCard__content">{content}</div>
    </article>
  )
}

export default TweetCard