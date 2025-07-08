// src/components/FileUpload.jsx
import { useRef } from 'react';

export default function FileUpload() {
  const fileRef = useRef();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    console.log(file);
  };

  return (
    <div>
      <input type="file" ref={fileRef} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
