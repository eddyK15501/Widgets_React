import React, { useState } from "react";
 
const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
 
    const onTitleClicked = (index) => {
        setActiveIndex(index);
    }
 
  const renderedItems = props.items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`${active} title`} onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
 
  return (
    <div className='ui styled accordion'>
        {renderedItems}
    </div>
  )
};
 
export default Accordion;