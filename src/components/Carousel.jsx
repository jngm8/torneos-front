import React, {useState, useEffect} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import classNames from 'classnames';

function Carousel({big,small}) {

    let classname = classNames('w-full m-auto py-2 px-4 relative group',{
        "m-w-[1000px] h-[500px]": big,
        "m-w-[100px] h-[300px]": small
    })

    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url: 'https://images.unsplash.com/photo-1543633550-f431af584afd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ];

    const [currentIndex,setCurrentIndex] = useState(0);


    const prevImage = () => {
        const firstIndex = currentIndex === 0;

        const nextIndex = firstIndex ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(nextIndex);
    }

    const nextImage = () => {

        const lastIndex = currentIndex === slides.length - 1

        const nextIndex  = lastIndex ? 0 : currentIndex + 1;

        setCurrentIndex(nextIndex);

    }

    const autoSlider = () => {

        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }

    useEffect(() => {
        const interval = setInterval(autoSlider, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classname}>
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-700'></div>
            
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevImage} size={30}/>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
               <BsChevronCompactRight onClick={nextImage} size={30}/> 
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((_slide,slideIndex) => (
                    <div className='text-1xl cursor-pointer' 
                        key={slideIndex} 
                        onClick={() => setCurrentIndex(slideIndex)}>
                    <RxDotFilled />
                    </div>
                ))}

            </div>
        </div>
    )

  
  }


export default Carousel;
