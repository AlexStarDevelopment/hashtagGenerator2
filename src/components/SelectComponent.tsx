import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface SelectComponentProps {
    options: string[],
}

const SelectComponent = (props: SelectComponentProps) => {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setValue(event.target.value as string);
    };
  
    return (
        <>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Client</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Client"
            onChange={handleChange}
            >
                {props.options.map(item => {
                    return (<MenuItem value={item}>{item}</MenuItem>)
                })}
            </Select>
        </FormControl>
        </>
        
    )
  }

  export default SelectComponent