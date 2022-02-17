import React, {useRef} from 'react';
import useHover from "../hooks/useHover"

const Hover = () => {
    const ref = useRef();

    const isHover = useHover(ref);
    return (
        <React.Fragment>
            <div ref={ref} style={{width: '300px', height: '300px', background: isHover ? 'gray' : 'red'}}>
                </div>
        </React.Fragment>
        
    );
};

export default Hover;