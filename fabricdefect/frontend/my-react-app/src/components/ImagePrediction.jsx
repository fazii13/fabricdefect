import React, { useState } from 'react';
import axios from 'axios';
import '../css/ImagePrediction.css';


const ImagePrediction = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [predictedImage, setPredictedImage] = useState(null);
    const [uploadError, setUploadError] = useState(null);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
        setPredictedImage(null); // Clear previous prediction
        setUploadError(null); // Clear previous error
    };

    const handleImageUpload = async () => {
        if (!selectedImage) {
            setUploadError('Please select an image first');
            return;
        }
    
        const formData = new FormData();
        formData.append('image', selectedImage);
    
        try {
            const response = await axios.post('http://localhost:8000/api/upload-image/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Image URL:', response.data.image_url); // Debugging
            // Assuming response.data.image_url is something like '/media/uploaded_images/check_annotated.jpg'
            const baseUrl = 'http://localhost:8000'; // Replace with your frontend base URL if needed
            setPredictedImage(`${baseUrl}${response.data.image_url}`);
        } catch (error) {
            console.error('Error uploading image:', error);
            setUploadError('Error uploading image');
        }
    };
    

    return (
        <div className="image-prediction-container">
            <h1>Image <span>Inspaction</span></h1>
            <input  type="file" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Predict Image</button>
            {uploadError && <p className="error">{uploadError}</p>}
            {predictedImage && (
                <div className="predicted-image-container">
                    <h2>Predicted Output</h2>
                    <img className="predicted-image" src={predictedImage} alt="Predicted Output" />
                </div>
            )}
        </div>
    );
};

export default ImagePrediction;
