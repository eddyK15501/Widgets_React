import React from "react";

const Link = (props) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', props.href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

  return (
    <a onClick={onClick} href={props.href} className={props.className}>
      {props.children}
    </a>
  );
};

export default Link;
