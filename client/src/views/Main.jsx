import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Main = () => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then(res => {
                console.log(res);
                setPirates(res.data);
            })
            .catch(err => console.log(err))
    })

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pirate/${id}`)
        .then(res => {
            console.log(res);
            removePirateFromPirates(id);
        })
        .catch(err => console.log(err))
    }

    const removePirateFromPirates = (id) => {
        setPirates(pirates.filter(pirate => pirate._id !== id));
    }

    return (
        <div style={{ 
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "600px", 
                    width: "90%" ,
                    backgroundColor: "orange",
                    margin: "0 auto",
                    border: "2px solid black"
                    }}>
            <div style={{
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "10%",
                backgroundColor: "brown"
            }}>
                <div style={{width: "33%", display: "flex", justifyContent: "center"}}></div>
                <div style= {{width: "33%", display: "flex", justifyContent: "center"}}>
                    <h1 style={{color: "white"}}>Pirate Crew</h1>
                </div>
                <div style= {{width: "33%", display: "flex", justifyContent: "center"}}>
                    <Link to="/new" style={{
                        color: "white",
                        height: "40%",
                        width: "30%",
                        backgroundColor: "blue",
                        textDecoration: "none",
                        border: "2px solid black",
                        textAlign: "center",
                        boxShadow: "3px 2px black"
                    }}>Add Pirate</Link>
                </div>
            </div>
            <div style={{
                height: "100%", 
                width: "85%", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-evenly"
                }}>
            {
                pirates.sort((a,b) => a.name.localeCompare(b.name)).map((pirate, key) => 
                <div key={key} style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    border: "2px solid black"
                }}>
                    <div style={{
                        height: "100%",
                        width: "20%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <img style={{height: "70%", width: "70%"}} src={pirate.image}></img>
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        }}>
                            <div style={{display: "flex", justifyContent: "center", flexDirection: "row", backgroundColor: "white", height: "60%"}}>
                                <h3>{pirate.name}</h3>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}> 
                                <Link to={`/show/${pirate._id}`} style={{
                                    color: "white",
                                    height: "100%",
                                    width: "15%",
                                    backgroundColor: "blue",
                                    textDecoration: "none",
                                    border: "2px solid black",
                                    textAlign: "center",
                                    boxShadow: "3px 2px black"
                                }}>View Pirate</Link>
                                <button style={{
                                    color: "white",
                                    height: "100%",
                                    width: "15%",
                                    backgroundColor: "red",
                                    textDecoration: "none",
                                    border: "2px solid black",
                                    textAlign: "center",
                                    boxShadow: "3px 2px black"
                                }} onClick={e => deleteHandler(pirate._id)}>
                                    Walk the Plank
                                </button>
                            </div>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    );
}

export default Main;