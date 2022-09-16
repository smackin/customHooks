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

    //solution
    function useAxios(keyInLS, baseUrl) {
      const [responses, setResponses] = useLocalStorage(keyInLS);
    
      const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
      };
    
      const clearResponses = () => setResponses([]);
    
      return [responses, addResponseData, clearResponses];
    }
    //solution
    function useLocalStorage(key, initialValue = []) {
      if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
      }
      const [value, setValue] = useState(initialValue);
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value, key]);
    
      return [value, setValue];
    }


    // const useAxios = (url, options = {}) => {
    //   const [response, setResponse] = useState(null);
    //   const [error, setError] = useState(null);
    //   const [isLoading, setIsLoading] = useState(true);
      
    //   // after the first render, fetch data 
    //   useEffect( () => { 
    //   const fetchData = async () => {
    //     try {
    //       const res = await fetch(url);
    //       const json = await res.json();
    //       setResponse(json);
    //     } catch(error) {
    //       setError(error);
    //     }
    //     setIsLoading(false);
    //   };
    //   fetchData();
    //   }, [url]);

    //   return {response, error, isLoading}; 
    // };

    export default useFlip ;

    export { useAxios };