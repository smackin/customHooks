  import { useEffect, useState } from "react";
  import axios from "axios"; 
  
  const useFlip = (initialState = true) => {
    //call useState and reverse the piece of state 
  const [isFacingUp, setIsFacingUp] = useState(initialState);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
      }; 
      return [isFacingUp, flipCard]; 
    }

    const useAxios = (url, options = {}) => {
      const [response, setResponse] = useState(null);
      const [error, setError] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      
      // after the first render, fetch data 
      useEffect( () => { 
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
        } catch(error) {
          setError(error);
        }
        setIsLoading(false);
      };
      fetchData();
      }, [url]);

      return {response, error, isLoading}; 
    };

    export default {useFlip, useAxios};