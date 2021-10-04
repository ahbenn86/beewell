import React from "react";
import "./index.css";

const Create = () => {
	return (
		<div className="container p-5">
			<h1>Bee post 🐝</h1>
            <br/>
            <form>
                <div className="form-group">
					<label className="text-muted">Title</label>
					<input type="text" className="form-control" placeholder="Post title" required/>
				</div>
				<div className="form-group">
					<label className="text-muted">Content</label>
					<textarea type="text" className="form-control" placeholder="Create a buzz" required/>
				</div>
				<div className="form-group">
					<label className="text-muted">User</label>
					<input type="text" className="form-control" placeholder="Your name" required/>
				</div>
				<div>
				<button className="btn btn-primary">Create</button>
				</div>
            </form>
		</div>
	);
};

export default Create;
