"use client";

import { useState, useRef, RefObject } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  onFileChange: (file: File | null) => void;
  preview: string | null;
  error: string | null;
  fileInputRef?: RefObject<HTMLInputElement | null>;
  videoPreview?: string | null;
}

export default function ImageUploader({ 
  onFileChange, 
  preview, 
  error,
  fileInputRef,
  videoPreview
}: ImageUploaderProps) {
  const defaultFileInputRef = useRef<HTMLInputElement>(null);
  // 使用传入的ref或默认ref
  const inputRef = fileInputRef || defaultFileInputRef;
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileChange(file);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onFileChange(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleLabelClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件冒泡到外层div
    inputRef.current?.click();
  };

  return (
    <div className="mb-6">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${error ? 'border-red-300' : ''}
        `}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          ref={inputRef}
        />
        
        {preview ? (
          <div className="relative mx-auto w-64 h-64 mb-2">
            <Image
              src={preview}
              alt="Preview"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
        ) : videoPreview ? (
          <>
            <label 
              className="relative cursor-pointer bg-white rounded-md font-medium text-pink-500 hover:text-pink-600 px-4 py-2 border border-pink-200 shadow mb-4 inline-block"
              onClick={handleLabelClick}
            >
              <span>Upload a file</span>
            </label>
            <div className="w-40 aspect-square mx-auto mt-4 rounded-xl overflow-hidden shadow flex items-center justify-center">
              <video
                src={videoPreview}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">See the effect: AI-generated pet example</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              Please upload a pet photo for analysis
            </p>
          </>
        ) : (
          <>
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path 
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to 5MB
            </p>
          </>
        )}
      </div>
      
      {preview && (
        <div className="mt-2 text-center">
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800"
            onClick={() => onFileChange(null)}
          >
            Remove image
          </button>
        </div>
      )}
    </div>
  );
} 