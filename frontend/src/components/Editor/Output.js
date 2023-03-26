const Output = (props) => {
  const {
    displayName,
    value,
} = props

  return(
    <>
        <div className="output_container">
        <div className="output_title">
          {displayName}
        </div>
        <div className="output_value">
        {value}
        </div>
        
        </div>
        </>
    )
    }
export default Output;