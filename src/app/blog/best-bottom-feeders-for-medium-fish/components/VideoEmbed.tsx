interface VideoEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function VideoEmbed({ videoId, title, description }: VideoEmbedProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-md">
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          📹 {title}
        </h3>
      )}
      
      {description && (
        <p className="text-gray-700 mb-4">
          {description}
        </p>
      )}

      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Video credit: Original creator on YouTube
      </p>
    </div>
  );
}
