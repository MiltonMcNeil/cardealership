function AddButton({formfunc}: any) {
  return (
    <div id="buttoncontainer">
        <p>Click here to: </p>
        <button id="addbutton" className="bg-tan-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-black-400 hover:border-blue-500 rounded" onClick={() => formfunc()}>
            Add New Car
        </button>
    </div>
  )
}

export default AddButton