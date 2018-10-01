import React, { Component } from "react";
import axios from 'axios';

const ImageUpload = (props) => {
	if (props.image) {
		return (
			<main className="nutritionImageUpload border">
				<h2>Image Upload</h2>
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
		<main className="nutritionImageUpload border">
			<h2>Image Upload</h2>
			<input type="file" onChange={props.selectImageHandler} name="pic" accept="image/*"/>
			<button type="button" onClick={props.uploadButtonHandler}>Upload</button>
		</main>
	);

}

export default ImageUpload