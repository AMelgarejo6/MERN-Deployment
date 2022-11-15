import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

const ShowOne = () => {
    const {id} = useParams();
    const [pirate, setPirate] = useState({
        _id: "",
        name: "",
        image: "",
        chests: 0,
        phrase: "",
        eyepatch: false,
        hookhand: false,
        pegleg: false,
        position: "",
    });
    const [eyepatch, setEyepatch] = useState(false);
    const [hookhand, setHookhand] = useState(false);
    const [pegleg, setPegleg] = useState(false);

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => {
                console.log(res); 
                setPirate(res.data); 
                setEyepatch(res.data.eyepatch);
                setHookhand(res.data.hookhand);
                setPegleg(res.data.pegleg);
            })
            .catch(err => console.log(err))
    },[id])

    const pegHandler = () => {
        pegleg ? setPegleg(false) : setPegleg(true);
    }

    const eyeHandler = () => {
        eyepatch ? setEyepatch(false) : setEyepatch(true);
    }

    const hookHandler = () => {
        hookhand ? setHookhand(false) : setHookhand(true);
    }

    return (
        <>
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
                    <h1 style={{color: "white"}}>{pirate.name}</h1>
                </div>
                <div style= {{width: "33%", display: "flex", justifyContent: "center"}}>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                width: "100%",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "100%",
                    width: "50%"
                }}>
                    <img style={{
                        height: "35%",
                        width: "85%",
                        border: "2px solid black"
                    }} src={pirate.image}></img>
                    <h1>"{pirate.phrase}"</h1>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "100%",
                    width: "50%"
                }}>
                    <div style={{
                        backgroundColor: "white",
                        height: "80%",
                        width: "85%",
                        border: "2px solid black"
                    }}>
                        <h1>About Pirate</h1>
                        <p>Position: {pirate.position}</p>
                        <p>Treasures: {pirate.chests}</p>
                        <p>Peg Leg: {pegleg ? "Yes" : "No"} {pegleg ? <button onClick={pegHandler}>No</button> : <button onClick = {pegHandler}>Yes</button>}</p>
                        <p>Eye Patch: {eyepatch ? "Yes" : "No"} {eyepatch ? <button onClick={eyeHandler}>No</button> : <button onClick = {eyeHandler}>Yes</button>}</p>
                        <p>Hook Hand: {hookhand ? "Yes" : "No"} {hookhand ? <button onClick={hookHandler}>No</button> : <button onClick = {hookHandler}>Yes</button>}</p>
                    </div>
                </div>
            </div>

            </div>
        </>
    );
}

export default ShowOne;