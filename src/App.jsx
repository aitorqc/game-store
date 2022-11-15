import { useEffect, useState, useContext } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import { FilterContext } from './context/filterContext'

import cards from './data';

function App() {
  const { categories, platforms, prices } = useContext(FilterContext);

  const [dataFilter, setFilterData] = useState([]);

  const getData = () => {
    setFilterData(cards);
  }

  const applyFilters = () => {
    if(prices.max <= prices.min){
      prices.max = 999;
    }
    //Sin filtros
    if (categories.length === 0 && platforms.length === 0 && (prices.min === "" && prices.max === "")) {
      setFilterData(cards);
    }
    // Categorias
    else if (categories.length > 0 && platforms.length === 0 && (prices.min === "" && prices.max === "")) {
      setFilterData(cards.filter((game) => categories.includes(game.category)));
    }
    // Categorias y Plataforma
    else if (categories.length > 0 && platforms.length > 0 && (prices.min === "" && prices.max === "")) {
      setFilterData(cards.filter((game) => platforms.includes(game.platform)).filter((game) => categories.includes(game.category)));
    }
    //Categorias y Precio
    else if (categories.length > 0 && (prices.min >= 0 && prices.max >= prices.min) && platforms.length === 0) {
      setFilterData(cards.filter((game) => categories.includes(game.category)).filter((game) => (game.price >= prices.min && game.price <= prices.max)));
    }
    //Plataforma
    else if (platforms.length > 0 && categories.length === 0 && (prices.min === "" && prices.max === "")) {
      setFilterData(cards.filter((game) => platforms.includes(game.platform)));
    }
    //Plataforma y Precio
    else if (platforms.length > 0 && (prices.min >= 0 && prices.max >= prices.min) && categories.length === 0) {
      setFilterData(cards.filter((game) => platforms.includes(game.platform)).filter((game) => (game.price >= prices.min && game.price <= prices.max)));
    }
    //Precio
    else if (categories.length === 0 && platforms.length === 0 && (prices.min >= 0 && prices.max >= prices.min)) {
      setFilterData(cards.filter((game) => (game.price >= prices.min && game.price <= prices.max)));
    }
    //Categorias, Plataforma y Precio
    else {
      setFilterData(cards.filter((game) => platforms.includes(game.platform))
        .filter((game) => categories.includes(game.category))
        .filter((game) => (game.price >= prices.min && game.price <= prices.max)));
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className='h-[90vh] flex gap-8 p-8'>
        <Sidebar applyFilters={applyFilters} />
        {/* Portada */}
        <div className='flex-1 h-full overflow-y-scroll pr-4'>
          <div>
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1919/uJvowZXNYWqWXrfxANaGyVD6.jpg"
              alt="Dragon Ball: The Breakers"
              className='w-full h-[500px] object-cover rounded-xl mb-8 opacity-70' />
          </div>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center '>
            {
              dataFilter.map((card) => {
                return (
                  <Card key={card.id} img={card.img} title={card.title} platform={card.platform} price={card.price}></Card>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
