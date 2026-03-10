import { useEffect, useState } from "react";

const data = [
    'https://imgs.search.brave.com/FjyB_G89_kgvGhaMQeQK26N7R2umgqsR5gkJLbGtvK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYW4t/Z3JlZXRpbmctbmF0/dXJlLXRvcC1tb3Vu/dGFpbi1hbWF6aW5n/LXJpY2gtMzkxMTIx/ODYuanBn',
    'https://imgs.search.brave.com/3d0jIdbuBpc5Doi7iX1sNZVRPEfZQFEWXe_qnY5Tgoo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MzI4NzM2Mi9waG90/by93b21hbi1oaWtp/bmctaW4tbW91bnRh/aW5zLW9uLXRoZS1i/YWNrZ3JvdW5kLW9m/LWx5c2Vmam9yZGVu/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1LdmpYLTVxY3kw/UTNkTTAzc0JsOENZ/a3Z0RjNnMVpuNzdL/ZDh1SGRPWGxBPQ',
    'https://imgs.search.brave.com/Rn0CRidoXpC_r_6KJxHalnI_S3mXiwJ8ZKW3y0jqeno/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjQxMDE5/L3BuZ3RyZWUtbmF0/dXJlLWhpZ2gtcmVz/b2x1dGlvbi1kZXNr/dG9wLXdhbGxwYXBl/ci1oZC1pbWFnZV8x/NjQxNDI1MC5qcGc',
    'https://imgs.search.brave.com/xpREfRA8HlzeXJPMdlvXKjD0C-ZOpMxpYRFpI3wiAtY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjQwNjAx/L3BuZ3RyZWUtYmFu/YW5hLXRyZWUtYW5k/LW5hdHVyZS1sYW5k/c2NhcGUtaW1hZ2Vf/MTU3MzY2MDcuanBn',
    'https://imgs.search.brave.com/G_IpTNyveXhL7jx-mSltTFgIDMqQB2UMtBvzV7JYp7A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjQwNzIz/L3BuZ3RyZWUtcGVh/Y2VmdWwtbmF0dXJl/LWNpdHktYmVhdXR5/LWFydGlzdGljLXdh/bGxwYXBlci1iYWNr/Z3JvdW5kLWltYWdl/XzE2MDE4ODA2Lmpw/Zw'
];

const leftArrow = 'https://imgs.search.brave.com/o4DGZb5KZs5xkXFR-kfX-tYwY3NXwiE-pWUfQMGplO8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzL2Q5/L2EwLzYzZDlhMGYw/Y2EyNmE2YTNkYTY5/OWM5MTEzMmFhMDNk/LmpwZw';
const rightArrow = 'https://imgs.search.brave.com/1L0KQgeGKJIr9DDkrorBsyQ7N9RSvofaWWTPYRVeYio/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU3L2Rm/LzQ0LzU3ZGY0NDY3/YWIwNTgwNDFkYmZh/OGM1M2MxNzBkZjY3/LmpwZw';

const ImageSlider = () => {

    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleImageSlide('next')
        }, 2000);

        return(() => clearInterval(interval));
    }, []);
    console.log(activeImg)

    const handleImageSlide = (dir: 'prev' | 'next') => {
        if(dir === 'prev') {
            setActiveImg((active) => (active - 1 < 0 ? data.length - 1 : active - 1));
        }
        else if(dir === 'next') {
            setActiveImg((active) => (active + 1) % data.length);
        }
    };

    return (
        <div>
            <div className="m-2 p-2 flex justify-center items-center gap-8">
                <img 
                    src={leftArrow} 
                    alt="left-arrow" 
                    onClick={() => handleImageSlide('prev')}
                    className="w-[64px] h-[64px] cursor-pointer" 
                    role="button" 
                />
                <img 
                    className="w-[500px] h-[440px]" 
                    src={data[activeImg]} 
                    alt="img" 
                />
                <img 
                    src={rightArrow} 
                    alt="right-arrow" 
                    onClick={() => handleImageSlide('next')}
                    className="w-[64px] h-[64px] cursor-pointer" 
                    role="button" 
                />
            </div>
        </div>
    )
}

export default ImageSlider