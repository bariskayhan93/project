import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [items, setItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color,setColor]=useState('');

  //homepage color change
  useEffect(()=> {
    const timer = setTimeout(()=> {
      setColor('red');
    }, 3000);
    return ()=>{ clearTimeout(timer);
    setColor('');}
 }, [color])


 //fetch data
  const fetchData = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      const { drinks } = data
      if (drinks) {
        const newItems = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setItems(newItems)
      } else {
        setItems([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])

  useEffect(() => {
    fetchData()
  }, [searchTerm,fetchData])

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ loading, items, searchTerm, setSearchTerm, openModal ,closeModal, isModalOpen,color,setColor }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
