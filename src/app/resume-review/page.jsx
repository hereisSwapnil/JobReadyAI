"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    maxFiles: 1,
    onDropAccepted: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });

  const files = selectedFile ? (
    <li key={selectedFile.name}>
      {selectedFile.name} - {selectedFile.size} bytes
    </li>
  ) : (
    <p>No file selected</p>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-10">
        <h1>THIS IS THE RESUME REVIEW PAGE</h1>
        <div
          {...getRootProps({
            className:
              "dropzone bg-gray-200 cursor-pointer hover:bg-gray-300 hover:border-gray-400 px-[250px] py-[150px] disabled rounded-xl border-2 border-gray-300 border-dashed",
          })}
        >
          <input {...getInputProps()} />
          {selectedFile ? (
            <div>
              <p>{files}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-10 justify-center align-middle items-center">
              <MdOutlineFileUpload size={120} color="#00000066" />
              <p>Drag and drop your resume here, or click to select a file</p>
            </div>
          )}
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </div>
    </main>
  );
};

export default Home;
