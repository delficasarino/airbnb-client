import {Button,Autocomplete,TextField} from '@mui/material';

export default function Search() {
    return (
        <form className="df nwp jcb aic" id="search">
            <Autocomplete 
                disablePortal
                id="combo-box-demo"
                options={[""]}  // info q viene de db
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Place" />}
            />
                <input type='search' name='checkin' id='checkin' placeholder='¿Cuándo?' />
                <input type='search' name='checkout' id='checkout' placeholder='¿Cuándo?' />
            <Autocomplete 
                disablePortal
                id="combo-box-demo"
                options={[""]}  // info q viene de db
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Guests" />}
            />            
                <Button variant="contained">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
        </form>
    )
}