import React from 'react'

const ShowItem = (p) => {
  return (
    <div>
       <div className="showItems">
            {p.item.map((m) => {
              const{name,id}=m
              return (
                <div key={id} className="eachItem">
                  <h2>{name}</h2>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=>{p.editItem(m.id)}}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={()=>{p.data(m.id)}}
                      style={{ marginLeft: "20px" }}
                    ></i>
                  </div>
                </div>
              );
            })}
            <button className="btn effect04" onClick={p.data1}>
              Remove All
            </button>
          </div>

    </div>
  )
}
export default ShowItem
