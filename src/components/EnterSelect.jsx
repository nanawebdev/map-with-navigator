import React from "react";

const EnterSelect = ({isChecked, title, onChange}) => {
    const id = Math.random().toString()

    const onChangeInner = (e) => {
        onChange(e)
    }
    
    return (
        <div className="form-check p-2">
            <input className="form-check-input" type="radio" name="enterRadio" id={id} checked={isChecked} onChange={onChangeInner} />
            <label className ="form-check-label" htmlFor={id}>
                {title}
            </label>
        </div>
    )
}

export default EnterSelect