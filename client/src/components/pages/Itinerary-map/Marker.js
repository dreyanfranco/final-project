
import { Overlay } from 'react-bootstrap'
import React, { useRef, useState } from "react";

function Marker({ text, description, img}) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (
    <>
      <div  className="marker" ref={target} onClick={() => setShow(!show)}>
        
      </div>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: '#eee',
              padding: '2px 10px',
              color: '#000',
              borderRadius: 3,
              ...props.style,
            }}
          >
                      <h4>{text}</h4>
                      <hr />
                      <img src={img} alt={text} style={{width:"200px"}}/>
                      <hr />    
                      <p>{description}</p>
          </div>
        )}
      </Overlay>
    </>
  );
}

//     return (
//         //<div className='marker'>{text}</div>
//         <>
//           <Popover id="popover-basic">
//             <Popover.Title as="h3">{text}</Popover.Title>
//     <Popover.Content>
//       And here's some <strong>amazing</strong> content. It's very engaging.
//       right?
//     </Popover.Content>
//         </Popover>

//             </>
//     )
    
// }

export default Marker