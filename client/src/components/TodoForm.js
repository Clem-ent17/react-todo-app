export default function TodoForm(props) {

    return (
      <div>
        <input type="text" onChange={props.inputFunction}/>
        <button onClick={props.submitFunction}>Submit</button>
      </div>
    );
}