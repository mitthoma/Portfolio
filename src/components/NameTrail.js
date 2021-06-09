import React from 'react';
import { useTrail, a } from 'react-spring';

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 80, friction: 200, duration: 1400 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 100 : 0,
    from: { opacity: 0.7, x: 50, height: 0 },

  });


  return (
    <div  width={8}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={"trailsText"} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}


export default Trail;
