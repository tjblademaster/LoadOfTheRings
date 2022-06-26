import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../Redux/Reducer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CharacterModal(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const { modalOn, modalData } = useSelector((state) => state.counter)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={modalOn}
                onClose={() => { dispatch(setModal(false)); }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Character Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p>Name: {modalData.name}</p>
                        <p>Race: {modalData.race}</p>
                        <p>Gender: {modalData.gender}</p>
                        <p>WikiUrl: <a href={modalData.wikiUrl}>{modalData.wikiUrl}</a></p>
                        <p>Height: {modalData.height}</p>
                        <p>Hair: {modalData.hair}</p>
                        <p>Realm: {modalData.realm}</p>
                        <p>Birth: {modalData.birth}</p>
                        <p>Spouse: {modalData.spouse}</p>
                        <p>Death: {modalData.death}</p>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
