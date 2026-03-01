import { useEffect, useState } from "react";

const HomePage = () => {

  const [memes, setMemes] = useState<undefined | any[]>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMemes();

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      if((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        fetchMemes();
      }
    })
  }

  const fetchMemes = async () => {
    try {
      setLoading(true);
      const memeJson = await fetch('https://meme-api.com/gimme/20');
      const memes = await memeJson.json();
      if(memes) {
        setMemes((prev) => [...(prev || []), ...memes['memes']]);
      }
    } catch (error) {
      console.error('Failed to fetch the memes', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {
        !loading ? (
          <div className="grid grid-cols-5 gap-4">
            {
              memes?.map((meme: any) => {
                return (
                  <div 
                    key={meme['postLink']}
                    className="border border-black p-2 rounded-lg"
                  >
                    <img 
                      src={meme['url']}
                      alt='meme-gif'
                      className="w-64 h-64"
                    />
                  </div>
                )
              })
            }
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            {
              Array(20).fill(0).map((_,i) => {
                return (
                  <div 
                    key={i}
                    className="border border-black p-2 rounded-lg"  
                  >
                    <div className="bg-gray-400 w-full h-64" />
                  </div>              
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default HomePage