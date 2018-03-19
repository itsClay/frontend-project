import React from 'react'

import './tweet_card.css'

const TweetCard = ({content, created_at, link, username, extraClass}) => {

  return (
    <article className={`TweetCard ${extraClass}`} href={link}>
      <div className="TweetCard__header">
        <strong className="TweetCard__username">@{username}</strong>
        <div className="TweetCard__created_at">{created_at}</div>
        <a href={`${link}`} className="TweetCard__link">link</a>
      </div>
      <div className="TweetCard__content">{content}</div>
    </article>
  )
}

export default TweetCard