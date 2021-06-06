import React, { useState } from 'react';

export default function inputFilter(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const resetValue = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, resetValue, bind];
}
