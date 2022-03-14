import {useEffect, useState} from "react";

const useFetch = (url) => { //Custom hooks in react must start with the word "use"

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { //Runs after every initial render as well as every time its invoked/rendered, really good at fetching data w/o dependencies
        const abortCont = new AbortController(); //useEffect cleanup function

            //Fetching the data using a GET request
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    //console.log(res)
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    //console.log(data)
                    setData(data)
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted')
                    }else {
                        setIsPending(false);
                        setError(err.message)
                    }
                })
        return () => abortCont.abort()
    }, [url])

    return {data, isPending, error}
}
export default useFetch;