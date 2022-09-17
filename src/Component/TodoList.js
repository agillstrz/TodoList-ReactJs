import React from "react";
import { useState } from "react";
import FormEdit from "./FormEdit";
import FormInput from "./FormInput";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      if (title.length > 5) {
        const newTodo = [
          ...todo,
          { id: Math.floor(Math.random() * 100000), title, complete: false },
        ];
        setTodo(newTodo);
        setTitle("");
      } else {
        alert("Text Terlalu sedikit");
      }
    } else {
      alert(
        "Anda Harus Mengisi Inputan Terlebih Dahulu Sebelum Melakukan Submit"
      );
    }
  };

  const handleCheck = (id) => {
    const checkList = todo.map((m) => {
      if (m.id === id) {
        !m.complete ? (m.complete = true) : (m.complete = false);
      }
      return m;
    });
    setTodo(checkList);
  };

  const deleteItem = (id) => {
    const del = todo.filter((m) => m.id !== id);
    setTodo(del);
  };

  const handleView = (cekid) => {
    !view ? setView(true) : setView(false);
    const EDIT = todo.filter((m) => m.id === cekid);
    setEdit(...EDIT);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (title) {
      const EDIT = todo.map((m) => {
        if (m.id === edit.id) {
          m.title = title;
        }
        return m;
      });
      setTodo(EDIT);
    }

    setTitle("");
  };
  return (
    <div className="max-w-[100rem] ">
      <div className="flex justify-center">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
          {`${!view ? "todos" : "Edit"}`}
        </h1>
      </div>

      {/* input List */}
      <FormInput
        view={view}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
      />
      {/* Edit List */}
      <FormEdit
        handleEdit={handleEdit}
        view={view}
        setView={setView}
        edit={edit}
        title={title}
        setTitle={setTitle}
      />
      {/* menampilkan list */}
      {todo.map((m) => (
        <div key={m.id} className="px-5 capitalize mt-2">
          <div className="border-2 px-4 mt-2 py-2 rounded-3xl shadow-lg flex justify-between">
            <div className="flex">
              <input type="checkbox" onChange={() => handleCheck(m.id)} />
              <p
                className={`px-3 font-bold ${
                  m.complete ? "line-through italic opacity-75" : ""
                }`}
              >
                {m.title}
              </p>
            </div>
            <div>
              <button className="btn-delete" onClick={() => deleteItem(m.id)}>
                Delete
              </button>
              <button className="btn" onClick={(e) => handleView(m.id)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
