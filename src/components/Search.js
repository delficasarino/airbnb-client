
export default function Search() {
    return (
        <>
        <input type='search' name='place' id='place' placeholder='Lugar ¿A dónde vas?'></input>
        <input type='search' name='checkin' id='checkin' placeholder='¿Cuándo?'></input>
        <input type='search' name='checkout' id='checkout' placeholder='¿Cuándo?'></input>
        <input type='search' name='guests' id='guests' placeholder='¿Cuántos?'></input>
        <Button variant="contained"><i class="fa-solid fa-magnifying-glass"></i></Button>
        
        </>
    )
}