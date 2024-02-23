import React from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from './context'
import CardComponent from './CardComponent'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Planets = () => {
  const { planets, isLoading, prev, next, page } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section>
      <div className='movies'>
        {planets?.map((planet) => {
          const { name } = planet
          return (
            <>
              <div className='movie'>
                <CardComponent planet={planet} />
              </div>
            </>
          )
        })}
      </div>
      <Wrapper>
        <button onClick={prev}>Prev</button>
        <p>{page + 1}</p>
        <button onClick={next}>next</button>
      </Wrapper>
    </section>
  )
}

export default Planets

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin: 0 auto;

  button {
    margin: 0 3vw;
    border-radius: 5px;
    border-color: transparent;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    }
  }
`
