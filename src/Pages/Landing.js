import React, { Component } from 'react'
import connect from '../Common/connect'
import BasicSelect from '../components/BasicSelect';
import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { setData } from '../Redux/Reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import MultiSelect from '../components/MultiSelect';
import CharacterModal from '../components/CharaterModal';

export default function Landing() {
    const [order, setOrder] = useState("asc")
    const [race, setRace] = useState("")
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch();
    useEffect(() => {
        getCharacter()
    }, [order, race, gender, name])

    //api request
    const getCharacter = () => {
        connect.getCharacter(order, race, gender, name).then((json) => {
            console.log(json.docs)
            dispatch(
                setData(json.docs));
        })
    }

    //order sort
    const setOrderType = (order) => {
        if (order === "Descending") {
            setOrder("desc")
        } else { setOrder("asc") }
    }

    //race adjust
    const setRaceType = (race) => {
        if (race !== "") {
            setRace(race.toString())
        } else { setRace("") }
    }

    //gender adjust
    const setGenderType = (gender) => {
        if (gender !== "") {
            setGender(gender)
        } else { setGender("") }
    }
    //name adjust
    const setNameSearch = (name) => {
        if (name !== "") {
            setName(name)
        } else { setName("") }
    }

    return (
        <div className='landing'>
            <CharacterModal />
            <SearchBar press={(value) => { setNameSearch(value) }} />
            <Box sx={{ flexGrow: 1 }} paddingTop={2}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={4}>
                        <BasicSelect title={"Name (asc/desc)"} data={["Ascending", "Descending"]} press={(value) => { setOrderType(value) }} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <MultiSelect title={"Race"} press={(value) => { setRaceType(value) }}
                            data={["Human", "Elf", "Dwarf", "Hobbit", "Orc", "Dragons", "Ainur", "Great Eagles", "Vampire", "Stone-trolls", "Ents", "Half-elven", "Eagle", "Uruk-hai", "Balrog", "Great Spiders", "Urulóki", "Werewolves"]} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <BasicSelect title={"Gender"} data={["Female", "Male"]} press={(value) => { setGenderType(value) }} />
                    </Grid>
                </Grid>
                <DataTable />
            </Box>
        </div>
    )
}
