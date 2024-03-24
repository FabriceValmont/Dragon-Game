import React from 'react'
import Games from '../GameList/Game'
import CardGame from './CardGame'


const GamePreview = () => {

  const gameCard = Games.map(item => {
    return (
        <CardGame
            key={item.title}
            item={item}
        />
    )
  })

  return (
    <div>
        <h1>Nos jeux</h1>
        <div className='flex m-4 grid grid-cols-5 gap-2'>{gameCard}</div>
        
    </div>
  )
}

export default GamePreview