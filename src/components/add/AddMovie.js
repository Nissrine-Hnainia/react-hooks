import {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'


const AddMovie = ({handleMovie}) => {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show) 
    }
    // const show = () => {
    //     setShow(true)
    // }
    // const hide = () => {
    //     setShow(false)
    // }
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)  
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)  
    }
    const handleRate = (e) => {
        setRate(e.target.value)  
    }
    const handlePoster = (e) => {
        setPosterUrl(e.target.value)  
    }

    const add = () => { 
        let newMovie = {
            title, description, rate, posterUrl
        }
        handleMovie(newMovie)
        setTitle("")
        setDescription("")
        setRate("")
        setPosterUrl("")
    }
    return (
        <div className="add">
            <Button variant="success" onClick={() => toggle()}>
                add movie
            </Button>
            <Modal show={show} >
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label> {/* html label */}
                    <Form.Control type="text" value={title} placeholder="Enter movie title" onChange={(e) => handleTitle(e)} /> {/* html input, onChange */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} placeholder="Enter movie description" onChange={(e) => handleDescription(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="text" value={rate} placeholder="Enter movie rate" onChange={(e) => handleRate(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Poster</Form.Label>
                    <Form.Control type="text" value={posterUrl} placeholder="Enter your image" onChange={(e) => handlePoster(e)} />
                </Form.Group>
                </Form>
                <Button variant="secondary" onClick={() => toggle()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => add()} >
                    Save
                </Button>
            </Modal>
        </div>
    )
}

export default AddMovie
