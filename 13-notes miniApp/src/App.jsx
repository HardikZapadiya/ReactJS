import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex justify-center items-center p-8">
        <form
          className="w-full max-w-lg bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
          onSubmit={submitHandler}
        >
          <h1 className="text-4xl font-bold text-center mb-8">📝 Add Note</h1>

          <input
            className="w-full mb-5 p-3 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Note Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            className="w-full h-40 p-3 rounded-lg bg-gray-700 border border-gray-600 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your note..."
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold text-lg active:scale-95">
            Add Note
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 p-8 border-t lg:border-t-0 lg:border-l border-gray-700">
        <h1 className="text-4xl font-bold mb-8">📒 Recent Notes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {task.map((elem, idx) => (
            <div
              className="bg-white text-black rounded-xl p-5 shadow-xl hover:scale-105 transition duration-300 flex flex-col justify-between"
              key={idx}
            >
              <div>
                <h2 className="text-xl font-bold">{elem.title}</h2>

                <p className="text-gray-600 mt-3 text-sm break-words">
                  {elem.details}
                </p>
              </div>

              <button
                className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold active:scale-95"
                onClick={() => {
                  deleteNote(idx);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
