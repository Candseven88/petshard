import React from 'react';

interface VideoEmbedProps {
  videoUrl: string;
  title: string;
  description?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl, title, description }) => {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const videoId = getYouTubeId(videoUrl);

  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-red-600 p-2 rounded-full">
          <span className="text-white text-2xl">▶️</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>

      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="mt-4 bg-white rounded-lg p-4 border-l-4 border-red-500">
        <p className="text-sm text-gray-700">
          <strong className="text-red-600">💡 Pro Tip:</strong> Watch this comprehensive review to see real-world testing and performance comparisons of budget-friendly aquarium lights.
        </p>
      </div>
    </div>
  );
};

export default VideoEmbed;
