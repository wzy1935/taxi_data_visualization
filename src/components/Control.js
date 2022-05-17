function Control(props) {
    return (
        <div className=" absolute h-32 w-64 bg-white rounded-md shadow-md left-4 top-4 p-2">
            <button className=" px-2 bg-purple-600 text-white rounded-md shadow-md" onClick={props.cb}>button</button>
            <hr/>
            <input type="range" name="points" min="1" max="10" onChange={props.onChange}/>
        </div>
    )
}

export default Control;