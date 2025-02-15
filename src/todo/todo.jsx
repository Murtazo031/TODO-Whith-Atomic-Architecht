import { useState } from "react";
import TodoCard from "../components/molecules/todoCard/todoCard.jsx";
import Button from "../components/atoms/button/button.jsx";

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      name: "Alijon",
      howMany: "1500$",
      when: "15.02.2025",
      till: "10 days",
      Completed: false,
    },
    {
      id: "2",
      name: "Jakson",
      howMany: "500$",
      when: "02.02.2025",
      till: "5 days",
      Completed: false,
    },
    {
      id: "3",
      name: "Ashur",
      howMany: "100$",
      when: "23.01.2025",
      till: "20 days",
      Completed: false,
    },
  ]);

  //SET ADDMODAL
  const [addName, setAddName] = useState("");
  const [addHowMany, setAddHowMany] = useState("");
  const [addWhen, setAddWhen] = useState("");
  const [addTill, setAddTill] = useState("");
  const [addModal, setAddModal] = useState(false);

  //SET EDITMODAL
  const [editName, setEditName] = useState("");
  const [editHowMany, setEditHowMany] = useState("");
  const [editWhen, setEditWhen] = useState("");
  const [editTill, setEditTill] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [idx,setIdx] = useState(null)

  //COMPLETE
  function toggleCompleted(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, Completed: !todo.Completed } : todo
      )
    );
  }

  //DELETE
  function handleDelete(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  //ADD
  function handleAdd() {
    setTodoList([
      ...todoList,
      {
        name: addName,
        howMany: addHowMany,
        when: addWhen,
        till: addTill,
        id: Date.now().toString(),
        Completed: false,
      },
    ]);
    setAddName("");
    setAddHowMany("");
    setAddWhen("");
    setAddTill("");
    setAddModal(false);
  }

  //EDIT
  function handleEdit(todo){
    setIdx(todo.id)
    setEditName(todo.name)
    setEditHowMany(todo.howMany)
    setEditWhen(todo.when)
    setEditTill(todo.till)
    setEditModal(true)
  }
  function lustEdit(){
    setTodoList(
        todoList.map((todo)=>todo.id===idx ?
    {
        ...todo,
        name:editName,
        howMany:editHowMany,
        when:editWhen ,
        till:editTill
    }:todo)
    );
    setIdx("")
    setEditName("")
    setEditHowMany("")
    setEditWhen("")
    setEditTill("")
    setEditModal(false)
  }



  return (
    <>
      {addModal && (
        <div style={{
            width:"100vw",
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}>
          <div>
            <input
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
            />
            <input
              value={addHowMany}
              onChange={(e) => setAddHowMany(e.target.value)}
            />
            <input
              value={addWhen}
              onChange={(e) => setAddWhen(e.target.value)}
            />
            <input
              value={addTill}
              onChange={(e) => setAddTill(e.target.value)}
            />
          </div>
          <div>
            <Button
              btnText={"Cancel"}
              b={"none"}
              padding={"2vh"}
              bR={"10px"}
              color={"white"}
              bgColor={"black"}
              btnOnclick={() => {
                setAddName("");
                setAddHowMany("");
                setAddWhen("");
                setAddTill("");
                setAddModal(false);
              }}
            />
            <Button
              btnText={"SAVE"}
              padding={"2vh"}
              bR={"10px"}
              b={"none"}
              btnOnclick={() => handleAdd()}
            />
          </div>
        </div>
      )}
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        Daftari Qarzhoi Man
      </h1>
      <Button
        btnText={"Add+"}
        bgColor={"blue"}
        color={"white"}
        b={"none"}
        bR={"10px"}
        padding={"2vh"}
        btnOnclick={() => setAddModal(!addModal)}
      />
      <ul
        style={{
          width: "60vw",
          height: "70vh",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          boxShadow: "0px 0px 15px red",
          padding: "3vh",
          borderRadius: "15px",
          overflow: "auto",
          flexWrap: "wrap",
          gap:"3vh",
        }}
      >
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: "lightgrey",
              padding: "2vh",
              borderRadius: "10px",
              width: "30vh",
              height:"35vh",
              textAlign: "start",
              listStyle: "none",
            }}
          >
            <TodoCard
              name={`${todo.name}`}
              howMany={todo.howMany}
              when={todo.when}
              till={todo.till}
              Decoration={todo.Completed ? "line-through" : "none"}
              inpOnclick={() => toggleCompleted(todo.id)}
            />
            <div
              style={{
                display: "flex",
                gap: "2vh",
              }}
            >
              <Button
                btnText={"Delete"}
                color={"white"}
                bgColor={"red"}
                b={"none"}
                bR={"10px"}
                padding={"1vh 2vh"}
                btnOnclick={() => handleDelete(todo.id)}
              />
              <Button
                btnText={"Edit"}
                color={"white"}
                bgColor={"green"}
                b={"none"}
                bR={"10px"}
                padding={"1vh 2vh"}
                btnOnclick={() => handleEdit(todo)}
              />
            </div>
          </li>
        ))}
      </ul>
      {editModal && <div>
          <div>
            <input
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              value={editHowMany}
              onChange={(e) => setEditHowMany(e.target.value)}
            />
            <input
              value={editWhen}
              onChange={(e) => setEditWhen(e.target.value)}
            />
            <input
              value={editTill}
              onChange={(e) => setEditTill(e.target.value)}
            />
          </div>
          <div>
            <Button
              btnText={"Cancel"}
              b={"none"}
              padding={"2vh"}
              bR={"10px"}
              color={"white"}
              bgColor={"black"}
              btnOnclick={() => {
                setEditName("");
                setEditHowMany("");
                setEditWhen("");
                setEditTill("");
                setEditModal(false);
              }}
            />
            <Button
              btnText={"SAVE"}
              padding={"2vh"}
              bR={"10px"}
              b={"none"}
              btnOnclick={() => lustEdit()}
            />
          </div>
        </div>}
    </>
  );
}
