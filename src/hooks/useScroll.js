import React, { useEffect, useRef } from 'react';

const useScroll = (parentRef, childRef, callback) => {
    const observer = useRef();
    useEffect(()=>{
        let options = {
            root: parentRef.current,
            rootMargin: '100px',
            threshold: 1.0
          }
          observer.current = new IntersectionObserver(([target])=>{
            if(target.isIntersecting){
                callback();
            }
          }, options);
        observer.current.observe(childRef.current);

        return ()=> observer.current.unobserve(childRef.current);
    }, [callback])
    
};

export default useScroll;