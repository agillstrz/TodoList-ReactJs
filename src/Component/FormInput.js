import React from "react";

function FormInput({ view, handleSubmit, setTitle, title }) {
  return (
    <div className={`px-2 ${view ? "hidden" : ""}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="border-2 mt-2 py-3 px-4 rounded-3xl shadow-lg flex justify-between">
          <div className="flex w-full">
            <input
              className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline "
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add to do..."
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <span className="mx-4 italic text-red-600">{`${
        title.length < 5 && title.length > 1 ? "teks terlalu sedikit" : ""
      }`}</span>
    </div>
  );
}

export default FormInput;
