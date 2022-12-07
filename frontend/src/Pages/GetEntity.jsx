import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Paper, Stack } from '@mui/material';
import InfoPaper from '../Components/InfoPaper/InfoPaper';
import { Box } from '@mui/system';

const GetEntity = () => {

    const [id, setid] = useState({})
    const [persons, setPersons] = useState([])

    const handleOnChange = (event) => {
        setid({ ...id, [event.target.name]: event.target.value })
    }

    const getAll = () => {
        axios.get("http://localhost:8080/myclass/getall").then((response) => {
            setPersons(response.data);
            console.log(persons);
        })

    }



    const getSingle = (event) => {
        event.preventDefault();
        console.log(id)
        axios.get(`http://localhost:8080/myclass/get/${valueOf(id)}`).then((response) => {
            setPersons(response);
        })
        console.log(persons);
    }

    return (
        <div>
            <Header />
            <form onSubmit={getSingle} hidden>
                <TextField
                    id="filled-password-input"
                    label="Id you want to see"
                    autoComplete="current-password"
                    variant="filled"
                    type="number"
                    onChange={handleOnChange}
                    name="id"
                />
                <Button variant='contained' type='submit'>Search id</Button>
            </form>
            <div>
                <Button variant='contained' onClick={getAll} id='button2'>Search All</Button>
                {
                    persons.map((person) => (
                        <Box sx={{
                            display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                                m: 1,
                                width: 185,
                                height: 115,
                            },
                        }}
                            key={person.id + "box"}>
                            <InfoPaper key={person.id + "info"} id={person.id} person={person}/>
                        </Box>
                    ))
                }
            </div>
        </div>
    )
}

export default GetEntity