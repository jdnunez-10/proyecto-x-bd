import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormularioInscripcion from './FormularioInscripcion';
import FormularioEntrada from './FormularioEntrada';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none'
};


export default function AuthModal({ open, handleClose, setIsAuthenticated}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = location.pathname === "/signup" ? "/signin" : "/signup";
    navigate(path);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

      <h1 className="text-center font-bold text-3xl pb-20">
          Crea una Cuenta
        </h1>

    {location.pathname === "/signup"?<FormularioInscripcion/>:<FormularioEntrada setIsAuthenticated={setIsAuthenticated}/>}

        <h1 className="text-center py-5 font-semibold text-lg text-gray-500">
          {location.pathname === "/signup" ? "¿Ya tienes una Cuenta?" : "Si no tienes una cuenta"}
        </h1>

        <Button

          fullWidth
          variant="outlined"
          onClick={handleNavigate}
          sx={{ borderRadius: "29px", py: "15px" }}
        >
          {location.pathname === "/signup" ? "Ingresar" : "Crear"}
        </Button>
      </Box>
    </Modal>
  );
}