import { Fragment, useState } from "react";
import "./menu.scss";

function Menu({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="desktop">{items}</div>
      <div onClick={() => setOpen(!open)} className="menuhand">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={["mobile-container", open ? "selected" : "dismiss"].join(
          " "
        )}
      >
        <div className="closediv">
          <span onClick={() => setOpen(!open)}>X</span>
        </div>
        <div className="itemslist">{items}</div>
      </div>
    </Fragment>
  );
}

export default Menu;
