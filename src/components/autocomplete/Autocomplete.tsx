import { useEffect, useState } from "react";

const Autocomplete = () => {

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [cache, setCache] = useState({});
    console.log(cache, 'cache')

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchData();
        }, 300);

        return () => clearTimeout(timeout)
    }, [searchInput]);

    const fetchData = async () => {
        if(searchInput !== '') {
            try {
                if(cache[searchInput]) {
                    console.log('returning from cache')
                    setSearchResults(cache[searchInput][1]);
                    return;
                } 
                const googleSearchResult = await fetch(`https://www.google.com/complete/search?q=${searchInput}&client=firefox`);
                const results = await googleSearchResult.json();
                setCache((cache) => ({
                    ...cache,
                    [searchInput]: results
                }));
                setSearchResults(results[1]);
            } catch (error) {
                console.error(error);
            }
        } else {
            setSearchResults([])
        }
    };

    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <input
                value={searchInput} 
                type="text"
                className="mx-10 my-1 border border-black p-2 w-96"
                onChange={handleChange}
                onFocus={() => setShowResults(true)}
                onBlur={() => setShowResults(false)}
            />
            {
                searchResults?.length > 0 && showResults &&
                <ul className="border border-black w-96 mx-10 px-4 flex flex-col gap-4">
                    {
                        searchResults?.map((result) => {
                            return (
                                <li 
                                    key={result}
                                    className="hover:bg-gray-200 cursor-pointer my-2"
                                >
                                    {result}
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default Autocomplete