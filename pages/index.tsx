import { Box, Button, createTheme, FormControl, InputLabel, List, ListItem, MenuItem, Select, SelectChangeEvent, styled, TextField, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { TextareaAutosize } from '@mui/base';
import { clientsNames, lizCategories, nrpCategories, qualityAuto, qualityAutoCategories, vjjCategories } from "../data/data";
import AppMenuBar from "../src/components/AppMenuBar";
import SelectComponent from "../src/components/SelectComponent";
import help from "../src/Helpers/help";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const FormWrapper = styled('div')(
  ({ theme }) => `
  margin: auto;
  width: 50%;
`,
);

export default function Home() {
  const [listOfComponents, setListOfComponents] = React.useState<any[]>()
  const [count, setCount] = React.useState<number>()
  const [count2, setCount2] = React.useState<number>()
  const [count3, setCount3] = React.useState<number>()
  const [category, setCategory] = React.useState<string>()
  const [category2, setCategory2] = React.useState<string>()
  const [category3, setCategory3] = React.useState<string>()


  const [client, setClient] = React.useState<string>();
  const [tagsToDisplay, setTagsToDisplay] = React.useState<string>()
  const clients = [clientsNames.qualityAuto, clientsNames.liz, clientsNames.nrp, clientsNames.vjj]

  const handleChangeClient = (event: SelectChangeEvent) => {
    setClient(event.target.value as string);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const handleChangeCategory2 = (event: SelectChangeEvent) => {
    setCategory2(event.target.value as string);
  };
  const handleChangeCategory3 = (event: SelectChangeEvent) => {
    setCategory3(event.target.value as string);
  };

  const handleClick = () => {
    const spreadList = [...listOfComponents]
    spreadList.push(<SelectComponent options={client === 'Quality Auto' ? qualityAutoCategories : client === 'vjj' ? vjjCategories : client === 'liz' ? lizCategories : client === 'nrp' ? nrpCategories : []}/>)
    setListOfComponents(spreadList)
  }

  const handleDelete = () => {
    const spreadList = [...listOfComponents]
    spreadList.pop()
    setListOfComponents(spreadList)
  }

  const handleGenerate = () => {
    let holdMyString: string = ''
    holdMyString = holdMyString + help(client, category, count)
    if (category2 && count2) {
      holdMyString = holdMyString + help(client, category2, count2)
    }
    if (category3 && count3) {
      holdMyString = holdMyString + help(client, category3, count3)
    }
    setTagsToDisplay(holdMyString)
  }

  const whatClient = (): string[] => {
    if (client === clientsNames.qualityAuto) {
      return qualityAutoCategories
    } else if (client === clientsNames.vjj) {
      return vjjCategories
    } else if (client === clientsNames.liz) {
      return lizCategories
    } else if (client === clientsNames.nrp) {
      return nrpCategories
    }
    return []
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppMenuBar>
        <FormWrapper sx={{ minWidth: 120, maxWidth: 400 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Client</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={client}
              label="Client"
              onChange={handleChangeClient}
              >
                  {clients.map((item, index) => {
                      return (<MenuItem key={index} value={item}>{item}</MenuItem>)
                  })}
              </Select>
          </FormControl>
          <FormControl fullWidth sx={{marginTop: 2}}>
            <div>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                sx={{width: '64%'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChangeCategory}
                >
                    {whatClient().map((item, index) => {
                        return (<MenuItem key={index} value={item}>{item}</MenuItem>)
                    })}
                </Select>
                <TextField sx={{width: '30%', marginLeft: 3 }} value={count} onChange={event => setCount(event.target.value as unknown as number)} type="number" id="outlined-basic" label="Number" variant="outlined" />
            </div>
          </FormControl>
          <FormControl fullWidth sx={{marginTop: 2}}>
            <div>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
              sx={{width: '64%'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category2}
              label="Category"
              onChange={handleChangeCategory2}
              >
                  {whatClient().map((item, index) => {
                      return (<MenuItem key={index} value={item}>{item}</MenuItem>)
                  })}
              </Select>
              <TextField sx={{width: '30%', marginLeft: 3 }} value={count2} onChange={event => setCount2(event.target.value as unknown as number)} type="number" id="outlined-basic" label="Number" variant="outlined" />
            </div>
          </FormControl>
          <FormControl fullWidth sx={{marginTop: 2}}>
            <div>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
              sx={{width: '64%'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category3}
              label="Category"
              onChange={handleChangeCategory3}
              >
                  {whatClient().map((item, index) => {
                      return (<MenuItem key={index} value={item}>{item}</MenuItem>)
                  })}
              </Select>
              <TextField sx={{width: '30%', marginLeft: 3 }} value={count3} onChange={event => setCount3(event.target.value as unknown as number)} type="number" id="outlined-basic" label="Number" variant="outlined" />
            </div>
          </FormControl>

          {/* <List>
            {count.map((a, index) => {
              return (
                <ListItem key={index}>
                  {a}
                  <TextField type="number" id="outlined-basic" label="Number" variant="outlined" />
                </ListItem>   
              ) 
            })}
          </List>
          {count.length !== 0 ? <Button fullWidth variant="outlined" onClick={() => handleDelete()}>X</Button> : null}
          {count.length !== 0 ? <Button fullWidth variant="outlined" onClick={handleGenerate}>GENERATE</Button> : null} */}
          <Button sx={{marginTop: 2, marginBottom: 2}} fullWidth variant="outlined" onClick={handleGenerate}>GENERATE</Button>
          <TextareaAutosize value={tagsToDisplay}/>
          <Button sx={{marginTop: 2}} fullWidth variant="outlined" onClick={() => {navigator.clipboard.writeText(tagsToDisplay)}}>Copy</Button>
        </FormWrapper>
      </AppMenuBar>
    </ThemeProvider>
  )
}
