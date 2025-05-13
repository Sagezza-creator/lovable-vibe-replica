
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface YoutubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;

const YoutubeVideosSection = () => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([
    {
      id: '1',
      title: 'Как подсознание влияет на нашу жизнь',
      thumbnailUrl: 'https://svobodarazuma.ru/Images/video-placeholder-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: '2',
      title: 'Эпигенетика: как изменить свою судьбу',
      thumbnailUrl: 'https://svobodarazuma.ru/Images/video-placeholder-2.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: '3',
      title: 'Нейрокоррекция: путь к свободе разума',
      thumbnailUrl: 'https://svobodarazuma.ru/Images/video-placeholder-3.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: '4',
      title: 'Матрицы сознания: как они формируются',
      thumbnailUrl: 'https://svobodarazuma.ru/Images/video-placeholder-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ]);

  const openYoutubeVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="sm:basis-1/1 md:basis-1/3">
                <div 
                  className="group cursor-pointer mx-2"
                  onClick={() => openYoutubeVideo(video.videoUrl)}
                >
                  <div className="h-52 rounded-lg overflow-hidden relative shadow-md">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="opacity-80"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12 bg-white/80 hover:bg-white" />
          <CarouselNext className="-right-4 md:-right-12 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default YoutubeVideosSection;
