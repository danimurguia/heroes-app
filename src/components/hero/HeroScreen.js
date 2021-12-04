import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

const {heroId} = useParams();

const hero = getHeroById(heroId);

const navigate = useNavigate();

const handleBack = () => {

  navigate(-1);

} 


if(!hero){
  return <Navigate to='/' />
}

  return (
    <div className='animate__animated animate__fadeInLeft row mt-5'>
      <div className='col-4'>
        <img src={`/assets/${hero.id}.jpg`} alt={hero.superhero} className='img-thumbnail'/>
      </div>

      <div className='col-8'>

        <h3>{hero.superhero}</h3>

        <ul className='list-group list-group'>
          <li className='list-group-item'>Alter Ego: <b>{hero.alter_ego}</b></li>
          <li className='list-group-item'>Publisher: <b>{hero.publisher}</b></li>
          <li className='list-group-item'>First appearance: <b>{hero.first_appearance}</b></li>

        </ul>
        <br/>

        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-info'
        onClick={handleBack}>
          Back
        </button>

      </div>
      
    </div>
  )
}
