import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


const Create = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chests, setChests] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [eyepatch, setEyepatch] = useState(false);
    const [hookhand, setHookhand] = useState(false);
    const [pegleg, setPegleg] = useState(false);
    const [position, setPosition] = useState("Captain");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const formHandler = () => {
        const newPirate = {name, image, chests, phrase, eyepatch, hookhand, pegleg, position};
        createApi(newPirate);
    }

    const createApi = (pirate) => {
        axios.post("http://localhost:8000/api/pirate", pirate)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.message);
            })
    }


    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "600px",
            width: "90%",
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
                <div style={{ width: "33%", display: "flex", justifyContent: "center" }}></div>
                <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>
                    <h1 style={{ color: "white" }}>Pirate Crew</h1>
                </div>
                <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>
                    <Link to="/" style={{
                        color: "white",
                        height: "40%",
                        width: "30%",
                        backgroundColor: "blue",
                        textDecoration: "none",
                        border: "2px solid black",
                        textAlign: "center",
                        boxShadow: "3px 2px black"
                    }}>Back to Deck</Link>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "100%",
                    width: "50%",
                }}>
                    <h3 style={{color: "red"}}>{error}</h3>
                    <p>Name:</p>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <p>Image url:</p>
                    <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                    <p># of Treasure Chest Pillaged</p>
                    <input type="number" value={chests} onChange={e => setChests(e.target.value)} />
                    <p>Pirate Catch Phrase</p>
                    <input type="text" value={phrase} onChange={e => setPhrase(e.target.value)} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "100%",
                    width: "50%",
                }}>
                    <p>Crew Position:</p>
                    <select value={position} onChange={e => setPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <p>Peg Leg</p>
                    <input type="checkbox" checked={pegleg} onChange={e => setPegleg(e.target.checked)}/>
                    <p>Eye Patch</p>
                    <input type="checkbox" checked={eyepatch} onChange={e => setEyepatch(e.target.checked)}/>
                    <p>Hook Hand</p>
                    <input type="checkbox" checked={hookhand} onChange={e => setHookhand(e.target.checked)}/>
                    <button onClick={formHandler} style={{
                        color: "white",
                        height: "10%",
                        width: "30%",
                        backgroundColor: "blue",
                        textDecoration: "none",
                        border: "2px solid black",
                        textAlign: "center",
                        boxShadow: "3px 2px black"
                    }}>Join Crew</button>
                </div>
            </div>
            </div>
            );
}

            export default Create;