import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent">
            <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 xl:p-16 max-w-2xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 line-clamp-3 drop-shadow-md">
                    {overview}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-white text-black rounded-md hover:bg-gray-200 transition duration-200">
                        <PlayIcon className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                        <span className="font-semibold text-sm md:text-base">Play</span>
                    </button>
                    <button className="flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-gray-600 bg-opacity-70 text-white rounded-md hover:bg-opacity-50 transition duration-200">
                        <InformationCircleIcon className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                        <span className="font-semibold text-sm md:text-base">More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;