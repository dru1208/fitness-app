import React, { Component } from "react";
import axios from 'axios';

const ImageUpload = (props) => {
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

export default ImageUpload