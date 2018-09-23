import React, { Component } from "react";

export default class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = { image: null };
	}

	uploadButtonHandler = (event) => {
		event.preventDefault();
		console.log(this.state.image);
	};

	//handles 'choose file' button
	selectImageHandler = (event) => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				this.setState({ image: e.target.result });
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	render() {
    //renders with image tag if a picture exists in the state
		if (this.state.image) {		
			return (
				<main className="upload-image">
					<input type="file" onChange={this.selectImageHandler} name="pic" accept="image/*"/>
					<button type="button" onClick={this.uploadButtonHandler}>Upload</button>
					<p>Image preview:</p>
					<img className="image-preview" src={this.state.image} height="150px" width="auto"/>
				</main>
			);
		}
		return (
			<main className="upload-image">
				<input type="file" onChange={this.selectImageHandler} name="pic" accept="image/*"/>
				<button type="button" onClick={this.uploadButtonHandler}>Upload</button>
			</main>
		)
	}
}