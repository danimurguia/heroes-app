import React from 'react'
import {Navbar} from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Route, Routes } from 'react-router';
import {HeroScreen} from '../components/hero/HeroScreen'


export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>

      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="hero/:heroId" element={<HeroScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
      </Routes>

      </div>
    </>
  )
}
