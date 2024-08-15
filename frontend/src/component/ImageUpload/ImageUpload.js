// ImageUpload.js
import React, { useState, useEffect } from 'react';
import { getStorage, listAll, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from './../../firebase'; // Import the storage from firebase.js
import './ImageUpload.css'
const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'images/'); // Assuming all images are stored in 'images/' folder
      try {
        const res = await listAll(listRef);
        const urlPromises = res.items.map((itemRef) => getDownloadURL(itemRef));
        const urls = await Promise.all(urlPromises);
        setUrls(urls);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, []);


  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);


        },
        (error) => {
          if (error) {
            return alert("Choose Correct Image");
          }
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      );
    }
  };

  const handleDelete = async (url) => {
    try {
      const storageRef = ref(storage, url); // Create a reference to the file to delete
      await deleteObject(storageRef);
      setUrls(urls.filter((item) => item !== url)); // Update state to remove deleted URL
      window.location.reload();
      return alert("File Deleted Successfully");

    } catch (error) {
      console.error("Error deleting image: ", error);
    }

  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setImage(selectedFile);
      setError("");
    } else {
      setImage(null);
      setError("Please select a valid image file (png, jpg, jpeg).");
    }
  };

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <input type="file" onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleUpload}>Upload</button>
      <br />
      <div className='imgUpload'>
        {url && <img src={url} alt="Uploaded" className='ImageUpload' />}
        <button onClick={() => handleDelete(url)}>Delete</button>


        <h3>All Images : </h3>
        {urls.map((url, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={url} alt={`Uploaded ${index}`} style={{ width: '200px' }} />
            <button onClick={() => handleDelete(url)}>Delete</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ImageUpload;
