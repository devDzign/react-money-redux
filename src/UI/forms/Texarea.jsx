import React from 'react';


/**
 *
 * @param name
 * @param label
 * @param value
 * @param onChange
 * @param placeholder
 * @param type
 * @param error
 * @returns {*}
 * @constructor
 */
const Texarea = ({name, label, value, onChange, placeholder, error=''}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                id={name}
                className={"form-control" + (error && " is-invalid")}
            />
            {error && <p className="invalid-feedback">{error}</p>}

        </div>


    );
};

export default Texarea;
