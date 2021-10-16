import React, {useState} from 'react';
import axios from 'axios';
import Nav from './Nav'
import ReactQuill from 'react-quill';
import { getUser } from './helpers';
import 'react-quill/dist/quill.bubble.css';


const Create = () => {
    //state
    const [state, setState] = useState({
        title: '',
        user: getUser()
    });

    const [content, setContent] = useState('')

    //rich text editor handle change
    const handleContent = (event) => {

        setContent(event);
    }
    
    //destructure values from state
    const {title, user} = state

    //onChange event handler
    const handleChange = name => event => {
        
        setState({...state, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
        .then(response => {
            console.log(response);

            setState({...state, title: '', user: ''});
            setContent('')

            alert(`Post titled ${response.data.title} is created`);
        })
        .catch(error => {
            console.log(error.response);
            alert(error.response.data.error);
        });
        
    };


   return (
    <div className="container pb-5">
        <Nav />
    <h1>Bee Post 🐝</h1>
    <br/>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="text-muted">Title</label>
            <input onChange={handleChange('title')} value={title} type="text" className="form-control" placeholder="Post title" required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Content</label>
            <ReactQuill
            onChange={handleContent} value={content} theme="bubble" className="pb-5 mb-3" placeholder="Create a buzz..." style={{border: '1px solid #666'}}
            />
        </div>
        <div className="form-group">
            <label className="text-muted">User</label>
            <input onChange={handleChange('user')} value={user} type="text" className="form-control" placeholder="Your name" required/>
        </div>
        <div>
            <button className="btn btn-primary">Create</button>
        </div>
    </form>
</div>
   )
};

export default Create;
