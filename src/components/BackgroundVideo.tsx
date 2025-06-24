// Background Video Component
// Replace the placeholder div in App.tsx with this component when you have the video file

import { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
  className?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ 
  videoSrc, 
  className = "w-full h-full object-cover" 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video for better effect
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster="/Media/Images/SAMPLE IMAGE.jpg" // Fallback image
    >
      <source src={videoSrc} type="video/mp4" />
      <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      {/* Fallback for browsers that don't support video */}
      <div className="w-full h-full bg-gradient-to-br from-overture-dark via-overture-purple to-overture-dark"></div>
    </video>
  );
};

// Instructions for use:
// 1. Add your background video file to public/Media/Video/
// 2. Import this component in App.tsx
// 3. Replace the placeholder div with:
//    <BackgroundVideo videoSrc="/Media/Video/your-video-file.mp4" />
