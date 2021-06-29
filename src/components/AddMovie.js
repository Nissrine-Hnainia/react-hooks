import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';


const AddMovie = ({addMovie}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title:"",
        rate:"",
        description:"",
        posterUrl:""
    });

    const handleMovie = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
      };
    return (
        <div className="addMovie">
            <Button className="addButton" onClick={()=> setModalIsOpen(true)}>Add new movie</Button>
            <Modal isOpen={modalIsOpen} className="modal">
                <h2>Add a new movie</h2>
                <body>
                    <form>
                        <div className="entries">
                            <label>Title</label>
                            <input type="text" className="input" name="title" placeholder="Insert movie title..." onChange={handleMovie}/>
                        </div>
                        <div className="entries">
                            <label>Rate</label>
                            <input type="text" className="input" name="rate" placeholder="Insert rate..." onChange={handleMovie}/>
                        </div>
                        <div className="entries">
                            <label>Description</label>
                            <textarea type="text" className="input" name='description' placeholder="Insert movie description..." onChange={handleMovie}/>
                        </div>
                        <div className="entries">
                            <label>Poster Url</label>
                            <input type="url" className="input" name="posterUrl" placeholder="Insert poster url..." onChange={handleMovie}/>
                        </div>
                    </form>
                </body>
                <div className="btns">
                    <Button onClick={()=> {
                        addMovie(newMovie);
                        setNewMovie ({title:"", rate:"", description:"", posterUrl:""})
                    }}> 
                    Submit
                    </Button>

                    <Button onClick={() => setModalIsOpen(false)}>close</Button>
                </div>
            </Modal>
        </div>
    );
};

export default AddMovie;