import React, {useState, useEffect} from "react";
import styles from "./CreatePokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTypes, postNewPokemon } from "../redux/actions";
import validations from "../components/Validations.jsx"
import NavBar from "../components/NavBar.jsx";

const CreatePokemon = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allTypes = useSelector((state) => state.allTypes);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    const [inputs, setInputs] = useState({
        name: "",
        firstType: "",
        secondType:"",
        image: "",
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0, 
        weight: 0
    })

    function handleInputsChange(e) {
        e.preventDefault();
        if(e.target.type === "number"){
            setInputs({...inputs, [e.target.name]: parseInt(e.target.value, 10)});
        }
        if(e.target.type === "text"){
            setInputs( prev => ({...prev, [e.target.name]: e.target.value.toLowerCase()}));
        }
        setInputs(({...inputs, [e.target.name]: e.target.value}));
        setErrors(validations({...inputs, [e.target.name]: e.target.value}));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        dispatch(postNewPokemon(inputs));
        setInputs({
            name: "",
            firstType: "",
            secondType: "",
            image: "",
            health: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0, 
            weight: 0
        });
        alert("Freshly cooked Pokemon! (っ^◡^)っ ♥");
        history.push("/home");
    }

    return (
        <React.Fragment>
            <NavBar />
            <div className={styles.video}>
                <div className={styles.content}>
                    <div className={styles.boxTitle}>
                        <h1 className={styles.title}>Create your pokemon!</h1>
                    </div>    
                    <div className={styles.boxForm}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className={styles.contentForm}>
                                <div className={styles.containerInputsString}>
                                    <div className={styles.name}>
                                        <input className={styles.inputString} type="text" value={inputs.name} name="name" placeholder="Write a name..."  onChange={(e) => handleInputsChange(e)} />
                                        {errors.name && (<p className={styles.error}>{errors.name}</p>)}
                                    </div>
                                    <div className={styles.image}>
                                        <input className={styles.inputString} type="text" value={inputs.image} name="image" placeholder="Paste an image link..." onChange={(e) => handleInputsChange(e)} />
                                        <p className={styles.textImage}>Work with any image from the web.</p>
                                    </div>
                                </div>
                                <div className={styles.containerTypes}>
                                <p className={styles.subtitle}>Types</p>
                                <div className={styles.subContainerTypes}>
                                    <div className={styles.boxType1}>
                                        <select className={styles.input} name='firstType' onChange={(e) => handleInputsChange(e)}>
                                            <option value="">First Type</option>
                                            {allTypes && allTypes.map( type =>
                                                <option value={type.name} key={type.name}>{type.name.toUpperCase()}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className={styles.boxType2}>
                                        <select className={styles.input} name='secondType' onChange={(e) => handleInputsChange(e)}>
                                            <option value="">Second Type</option>
                                            {allTypes && allTypes.map( type =>
                                                <option value={type.name} key={type.name}>{type.name.toUpperCase()}</option>
                                            )} 
                                        </select>
                                    </div>
                                </div>
                                {errors.types && (<p className={styles.error}>{errors.types}</p>)}
                            </div>
                            
                            <div className={styles.containerInputs}>
                                <div className={styles.number}>
                                    <p className={styles.subtitle}>Health</p>
                                    <input className={styles.inputNum} type="number" value={inputs.health} name="health" min="1" max="300" onChange={(e) => handleInputsChange(e)} />
                                    {errors.health && (<p className={styles.error}>{errors.health}</p>)}
                                </div>
                                <div className={styles.number}>
                                    <p className={styles.subtitle}>Attack</p>
                                    <input className={styles.inputNum} type="number" value={inputs.attack} name="attack" min="1" max="200" onChange={(e) => handleInputsChange(e)} />
                                    {errors.attack && (<p className={styles.error}>{errors.attack}</p>)}
                                </div>
                                <div className={styles.number}>
                                    <p className={styles.subtitle}>Defense</p>
                                    <input className={styles.inputNum} type="number" value={inputs.defense} name="defense" min="1" max="300" onChange={(e) => handleInputsChange(e)} />
                                    {errors.defense && (<p className={styles.error}>{errors.defense}</p>)}
                                </div>
                                <div className={styles.number}>
                                    <p className={styles.subtitle}>Speed</p>
                                    <input className={styles.inputNum} type="number" value={inputs.speed} name="speed" min="1" max="200" onChange={(e) => handleInputsChange(e)} />
                                    {errors.speed && (<p className={styles.error}>{errors.speed}</p>)}
                                </div>
                                <div className={styles.number}>
                                    <p className={styles.subtitle}>Height</p>
                                    <input className={styles.inputNum} type="number" value={inputs.height} name="height" min="1" max="20" onChange={(e) => handleInputsChange(e)} />
                                    {errors.height && (<p className={styles.error}>{errors.height}</p>)}
                                </div>
                                <div className={styles.number}>
                                    <p className={styles.subtitle}>Weight</p>
                                    <input className={styles.inputNum} type="number" value={inputs.weight} name="weight" min="1" max="999" onChange={(e) => handleInputsChange(e)} />
                                    {errors.weight && (<p className={styles.error}>{errors.weight}</p>)}
                                </div>
                            </div>
                            {
                                (errors.name || errors.types || errors.health || errors.attack || errors.defense || errors.speed || errors.height || errors.weight) ? <button className={styles.button} disabled>no no no!</button> : <button className={styles.button} type="submit" >CREATE!</button> 
                            }
                        </div>
                        </form>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    )
};

export default CreatePokemon;