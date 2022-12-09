import React from "react";
const AddItems = (p) => {
  return (
    <div>
      <figure>
        <img src="./image/file.png" alt="" style={{ width: "80px" }} />
        <figcaption>
          Add Your List Here🙂✌
        </figcaption>
      </figure>
      <div className="addItems">
        <input
          type="text"
          placeholder="Add Items"
          className="form-control"
          value={p.inputdata}
          onChange={(e) => {
            p.setInputData(e.target.value);
          }}
        />
        {p.toggle? <i className="fa fa-plus add-btn" onClick={p.additem}></i>: <i className="far fa-edit add-btn" onClick={p.additem}></i>
}
      </div>
    </div>
  );
};
export default AddItems;
