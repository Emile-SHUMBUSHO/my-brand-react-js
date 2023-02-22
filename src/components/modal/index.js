import React from "react";

const Modal = ({ show, close, childrens }) => {
  return (
    <>
      {show ? (
        <div class="modal-wrapper" onClick={() => close()}>
          <div id="" class="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close">
              <i class="fa-solid fa-xmark" onClick={() => close()}></i>
            </div>
            {childrens}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
