import Navbar from './components/navbar'
import Hero from './components/hero'
import Latestmovies from './components/latestmovies'
import LatestTvShows from './components/latesttv'
import Upcoming from './components/upcoming'
import Top from './components/top'
import Footer from './components/footer'
import SearchResults from './components/searchresults'
import Detail from './components/details'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

function App() {

  const Homelayout = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Latestmovies />
        <LatestTvShows />
        <Upcoming />
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Homelayout />}/>
           <Route path='/search-results' element={<SearchResults />}/>
           <Route path='/movie-detail/:id/:type' element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <Top />
      <Footer />

    </>
  )
}

export default App
