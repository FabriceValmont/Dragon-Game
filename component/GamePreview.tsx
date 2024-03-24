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
        <h1 className='text-center text-2xl font-bold my-4'>Nos jeux</h1>
        <div className='flex mx-12 mb-6 grid grid-cols-5 gap-2'>{gameCard}</div>
        
    </div>
  )
}

export default GamePreview