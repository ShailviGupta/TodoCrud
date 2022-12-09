import React, { useEffect, useState } from "react";
import AddItems from "./AddItems";
import ShowItem from "./ShowItem";
import "./style.css";
const getDataItem = () => {
  const list = localStorage.getItem("my todoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function Todo() {
  const [inputdata, setInputData] = useState("");
  const [item, setItem] = useState(getDataItem(""));
  const [toggle,setToggle]=useState(true);
  const[isEdit,setisEdit]=useState(null)
  // const [showDeletedItem, setShowDeletedItem] = useState();
  //   add item ---------------------------------------------------------------------------
  const additem = () => {
    if (!inputdata) {
      alert("please fill the field");
    } else if(inputdata && !toggle){
      setItem(item.map((m)=>{
        if(m.id===isEdit) {
          return{...m,name:inputdata}
        }  
        return m; 
  }))
  setToggle(true)
  setInputData("")
  setisEdit(true)
    }

     else {
      const addInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItem([...item, addInputData]);
      setInputData("");
      console.log(item);
    }
  };
  // delete items --------------------------------------------------------------------
  const deleteItem = (index) => {
    const update = item.filter((m) => {
      return m.id !== index;
    });

    setItem(update);
  };
  const remove = () => {
    setItem([]);
  };
  // const DeletedItem = () => {
  //   return <>{showDeletedItem}</>;
  // };
  // useEffect(() => {

  // }, [showDeletedItem]);

  // adding localStorage--------------------------------------------
  useEffect(() => {
    localStorage.setItem("my todoList", JSON.stringify(item));
  }, [item]);

  // editItems.........
  const editItem=(id)=>{
    let newEdit=item.find((m)=>{
      return(m.id===id)
    })
    console.log(newEdit)
    setToggle(false)
    setInputData(newEdit.name)
    setisEdit(id)
  }
  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          {/* additems------------------------------------------------- */}
          <AddItems toggle={toggle} inputdata={inputdata} setInputData={setInputData} additem={additem}/>
          {/* show items-------------------- */}
          <ShowItem data={deleteItem} data1={remove} item={item} editItem={editItem} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
