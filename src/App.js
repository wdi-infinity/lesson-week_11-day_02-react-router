import React from 'react'
import { Route } from 'react-router-dom'

import Movie from './Movie.js'
import Nav from './Nav'

const movies = [
  {
    title: 'Dr. Strangelove',
    director: 'Stanley Kubrick',
    cast: [
      {
        name: 'Peter Sellers',
        role: 'President Merkin Muffley'
      },
      {
        name: 'George C. Scott',
        role: 'General Buck Turgidson'
      },
      {
        name: 'Slim Pickens',
        role: 'Major T.J. "King" Kong'
      }
    ]
  },
  {
    title: 'Eraserhead',
    director: 'David Lynch',
    cast: [
      {
        name: 'Jack Nance',
        role: 'Henry Spencer'
      },
      {
        name: 'Charlotte Stewart',
        role: 'Mary X'
      },
      {
        name: 'Jeanne Bates',
        role: 'Mrs. X'
      }
    ]
  },
  {
    title: 'Fantastic Mr. Fox',
    director: 'Wes Anderson',
    cast: [
      {
        name: 'George Clooney',
        role: 'Mr. Fox'
      },
      {
        name: 'Meryl Streep',
        role: 'Mrs. Fox'
      },
      {
        name: 'Bill Murray',
        role: 'Badger'
      }
    ]
  }
]

const App = () => (
  <div>
    <Route path='/' component={Nav} />
    <Route exact path='/' render={() => (<h4>Welcome! Click a link.</h4>)} />
    <Route path='/movies' render={() => (
      <div>
        {movies.map(movie => (
          <Movie
            key={movie.title}
            title={movie.title}
            director={movie.director}
            cast={movie.cast}
          />
        ))}
      </div>
    )}
    />
  </div>
)

export default App
