import React from "react";

const ImageUpload = (props) => {
	return (
		<main className="nutritionImageUpload border">
			<h3>Image Upload:</h3>
			<form onSubmit={props.uploadButtonHandler}>
				<input type="file" onChange={props.selectImageHandler} name="pic" accept="image/*"/>
				<input type="datetime-local" name="datetime" />
				{props.image &&
					<div>
						<input type="submit" value="Upload" />
					</div>
				}
			</form>
			{props.image &&
				<div>
					<p>Image preview:</p>
					<img className="image-preview" src={props.image} height="150px" width="auto"/>
				</div>
			}
		</main>
	);

}

export default ImageUpload