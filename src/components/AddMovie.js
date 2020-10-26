import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import './AddMovie.css';


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
        <div>
            <Button className="addButton" onClick={()=> setModalIsOpen(true)}>Add new movie</Button>
            <Modal isOpen={modalIsOpen}>
                <h2>Add a new movie</h2>
                <body>
                    <form>
                        <div>
                            <label>Title</label>
                            <input type="text" className="title" name="title" placeholder="Insert movie title..." onChange={handleMovie}/>
                        </div>
                        <div>
                            <label>Rate</label>
                            <input type="text" className="rate" name="rate" placeholder="Insert rate..." onChange={handleMovie}/>
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea type="text" className="description" name='description' placeholder="Insert movie description..." onChange={handleMovie}/>
                        </div>
                        <div>
                            <label>Poster Url</label>
                            <input type="url" className="posterUrl" name="posterUrl" placeholder="Insert poster url..." onChange={handleMovie}/>
                        </div>
                    </form>
                </body>
                <div>
                    <Button onClick={()=> {
                        addMovie(newMovie);
                        setNewMovie ({title:"", rate:"", description:"", posterUrl:""})
                    }}>Submit</Button>
                </div>
                <div>
                    <Button onClick={() => setModalIsOpen(false)}>close</Button>
                </div>
            </Modal>
        </div>
    );
};

export default AddMovie;