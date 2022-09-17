import React from "react";

function FormEdit({ handleEdit, view, setView, edit, title, setTitle }) {
  return (
    <div className={`px-2 ${!view ? "hidden" : ""}`}>
      <form onSubmit={(e) => handleEdit(e)}>
        <div className="border-2 mt-2 py-3 px-4 rounded-3xl shadow-lg flex justify-between">
          <div className="flex w-full">
            <input
              className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline placeholder-black "
              type="text"
              placeholder={edit.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button onClick={() => setView(false)} type="submit" className="btn">
            {`${title ? "Edit" : "Cancel"}`}
          </button>
        </div>
      </form>
      <span className="mx-4 italic text-red-600">{`${
        title.length < 5 && title.length > 1 ? "teks terlalu sedikit" : ""
      }`}</span>
    </div>
  );
}

export default FormEdit;
