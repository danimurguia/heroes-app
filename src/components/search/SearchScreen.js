import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {

  const navigate = useNavigate();

  const location = useLocation();

 const {q = ''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const {searchText} = formValues;

  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
   e.preventDefault();
    navigate(`?q=${searchText}`)

  }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className='row'>

        <div className='col-5'>

          <h4>Search Your Hero</h4>

          <form onSubmit={handleSubmit}>

          <input type='text' placeholder='Type a hero...' className='form-control' name='searchText' autoComplete='off' value={searchText} onChange={handleInputChange}>
          </input>

          <button type='submit' className='btn btn-outline-primary mt-2'>
            Search
          </button>

          </form>

        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr/>
          {

            (filteredHeroes.length===0) && <div className='alert alert-danger'> Sorry, no results found for: {q}. Let's try again!</div>

          }

          {
            filteredHeroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>

      </div>
    </>
  )
}
