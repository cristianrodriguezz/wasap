import { useEffect } from "react";
import { useState } from "react";

export const useFetchCountries = () => {

  const [countries, setCountries] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json()

        setCountries(data)


      } catch (error) {
        console.error('Error fetching CSV data:', error)
      }
    };

    fetchData()
  }, [])

  return { countries }
}

