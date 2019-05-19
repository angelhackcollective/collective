import React, { useState, Fragment } from 'react';
import {
  CheckWrapper,
  Indent,
} from './styles';

const Inputs = ({name, val, func}) => (
  <CheckWrapper className="checkWrapper">
    <input name={val} type="checkbox" onClick={() => func(name)}/>
    <label>{name}</label>
  </CheckWrapper>
);

const CheckBox = ({name, val, subOpts, add, remove}) => {
  const [ checked, setCheck ] = useState(false)
  const [ visible, toggleOpts ] = useState(false)
  console.log("CHECK BOX", name, val, subOpts )
  const setFilter = (name) => {
    setCheck(!checked)
    if (!checked) {
      add(name)
    } else {
      remove(name)
    }
  }

  const showOpts = (name) => {
    toggleOpts(!visible)
    setFilter(name)
  };
  if (val === "Oral") {
    return (
      <Indent>
        <Inputs name={name} val={val} func={showOpts} />
          { visible && (
            <Fragment>
              <div className="subOpts">
              {
                subOpts.map(({name, val}, i) => (
                  <Inputs name={name} val={val} key={i} func={setFilter} />
                ))
              }
            </div>
            <div className="spacer" />
            </Fragment>
          )}
      </Indent>
    )
  }

  return <Inputs name={name} val={val} func={setFilter} />
}

export default CheckBox;