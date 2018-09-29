import React, { Component } from "react";
import axios from 'axios';
// export default class ImageUpload extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			image: null,
// 			imageName: null
// 		};
// 	}

	// uploadButtonHandler = (event) => {
	// 	const string = this.state.image;
	// 	const result = string.split("base64,");
	// 	axios.post('http://localhost:3000/api/image_recognition', {
	// 		image: result[1],
	// 		imageName: this.state.imageName
	// 	})
 //    .then((response) => {
 //      const data = response.data;
 //      console.log(data);
 //    })
	// };

	// //handles 'choose file' button
	// selectImageHandler = (event) => {
	// 	if (event.target.files && event.target.files[0]) {
	// 		this.setState({
	// 			imageName: event.target.files[0].name
	// 		})
	// 		let reader = new FileReader();
	// 		reader.onload = (e) => {
	// 			this.setState({ image: e.target.result });
	// 		};
	// 		reader.readAsDataURL(event.target.files[0]);
	// 	}
	// }
const ImageUpload = (props) => {
	// render() {
    //renders with image tag if a picture exists in the state
		if (props.image) {
			return (
				<main className="upload-image">
					<form onSubmit={props.uploadButtonHandler}>
						<input type="file" onChange={props.selectImageHandler} name="pic" accept="image/*"/>
						<input type="datetime-local" name="datetime" />
						<input type="submit" value="Upload" />
					</form>
					<p>Image preview:</p>
					<img className="image-preview" src={props.image} height="150px" width="auto"/>
				</main>
			);
		}
		return (
			<main className="upload-image">
				<input type="file" onChange={props.selectImageHandler} name="pic" accept="image/*"/>
				<button type="button" onClick={props.uploadButtonHandler}>Upload</button>
			</main>
		)
	// }
}

export default ImageUpload