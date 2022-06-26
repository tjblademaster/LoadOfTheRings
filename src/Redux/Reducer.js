import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: [],
        modalOn:false,
        modalData:{}
    },
    reducers: {
        setData: (state, action) => {
            const dummy = action.payload
            const newDummy = dummy.map((v, index)=>({...v, id: index+1}))
            state.data = newDummy;
            console.log(newDummy);
        },
        setModal: (state, action) => {
            state.modalOn = action.payload;
        },
        setModalData: (state, action) => {
            state.modalData = action.payload;
        }
    },
})

export const { setData, setModal, setModalData } = counterSlice.actions

export default counterSlice.reducer