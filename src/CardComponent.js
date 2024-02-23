import React from 'react'
import styled from 'styled-components'
import Residence from './Residence'
import { useGlobalContext } from './context'
// import { IoPlanetSharp } from 'react-icons/io5'
// import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'
const Card = ({ planet }) => {
  const { name, climate, diameter, terrain, url, residents } = planet
  const [togglePeople, setTogglePeople] = React.useState(true)

  return (
    <Wrapper>
      <h4 style={{ textAlign: 'center ' }}>{name}</h4>
      <header>
        <div>
          <p> Climate : {climate}</p>

          <p className='bio'> Terrain : {terrain}</p>

          <p>Diameter : {diameter}</p>
        </div>
      </header>
      {/* <h5>Click To view Residence</h5> */}
      {togglePeople ? (
        <button onClick={() => setTogglePeople(false)} className='btn'>
          Click To view Residence
        </button>
      ) : (
        <Residence residents={residents} />
      )}
    </Wrapper>
  )
}
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  header {
    display: grid;
    grid-template-rows: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    .bio {
      color: var(--clr-grey-3);
    }
  }
  h5 {
    text-align: center;
    color: var(--clr-grey-1);
  }
`
export default Card
