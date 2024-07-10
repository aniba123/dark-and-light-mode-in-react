import './Toggle.css'
function Toggle( {handlechange, ischecked}) {
  return (
    <div className='toggle-container'>
        <input type="checkbox" className="toggle" id="check"
         onChange={handlechange}  checked={ischecked}
         />
         <label htmlFor="check">Dark Mode</label>
    </div>
  )
}

export default Toggle