import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getZapas } from "../Actions";

const useProductos = (pageNum = 1) => {
    const dispatch = useDispatch()
    const allZapas = useSelector(state => state.zapas)
    const [resultados, setResultados] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
      dispatch(getZapas());
    }, [dispatch]);
    
    
    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        
        try {
            setIsLoading(true);
            setIsError(false);
            setError({});
            
            
            // const data = allZapas;
            // console.log("ESTO TRAE DATA ", allZapas);
            
            setResultados(previos => [...previos, ...allZapas]);
            setHasNextPage(Boolean(allZapas.length));
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            if (signal.aborted) return
            setIsError(true);
            setError({ message: e.message });
        } 
            
        return () => controller.abort();
        

        // getZapas().then(data => {
        //     setResultados(previos => [...previos, ...data]);
        //     setHasNextPage(Boolean(data.length));
        //     setIsLoading(false);
        // }).catch(e => {
        //     setIsLoading(false);
        //     if (signal.aborted) return
        //     setIsError(true);
        //     setError({ message: e.message });
        // })

    }, [pageNum])

    return { isLoading, isError, error, resultados, hasNextPage }
}

export default useProductos;