
import { useEffect, useRef, useState } from 'react';
import '../../Lookbook/lookbook.css';
import { looks } from '../data/data';
import MediaDisplay from './MediaDisplay';
import TopBar from './TopBar';
import ProgressBar from './ProgressBar';
import Annotation from './Annotation';
import ProductCards from './ProductCards';

const randomUrls = [
    'https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg',
    'https://i.imgur.com/OB0y6MR.jpg',
];

export default function Lookbook() {
    const [currentLook, setCurrentLook] = useState(0);
    const [currentMedia, setCurrentMedia] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
    const progressInterval = useRef(null);
    const videoRef = useRef(null);

    const currentLookData = looks[currentLook];
    const currentMediaItem = currentLookData?.media[currentMedia];
    const isVideo = currentMediaItem?.type === 'video';


    useEffect(() => {
        if (isVideo) {
            if (videoRef?.current) {
                videoRef.current.currentTime = 0;
                videoRef?.current?.play();
                videoRef.current.muted = isMuted; // Mute/unmute video
            }
        } else {
            clearInterval(progressInterval.current);
            progressInterval.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        handleNextMedia();
                        return 0;
                    }
                    return prev + 2;
                });
            }, 100);
        }

        return () => {
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
        };
    }, [currentMedia, currentLook, isMuted]);

    const handleNextMedia = () => {
        if (currentMedia < currentLookData?.media?.length - 1) {
            setCurrentMedia(currentMedia + 1);
        } else {
            if (currentLook < looks.length - 1) {
                setCurrentLook(currentLook + 1);
                setCurrentMedia(0);
            } else {
                setCurrentLook(0);
                setCurrentMedia(0);
            }
        }
        setProgress(0);
    };

    const handlePreviousMedia = () => {
        if (currentMedia > 0) {
            setCurrentMedia(currentMedia - 1);
        } else {
            if (currentLook > 0) {
                const previousLookIndex = currentLook - 1;
                const previousLookMediaLength = looks[previousLookIndex]?.media.length;
                setCurrentLook(previousLookIndex);
                setCurrentMedia(previousLookMediaLength ? previousLookMediaLength - 1 : 0);
            } else {
                const lastLookIndex = looks.length - 1;
                const lastMediaIndex = looks[lastLookIndex]?.media.length - 1;
                setCurrentLook(lastLookIndex);
                setCurrentMedia(lastMediaIndex);
            }
        }
        setProgress(0);
    };

    const toggleMute = () => {
        setIsMuted((prevMuted) => !prevMuted);
    };

    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches?.[0].clientX - touchStart.x;
        if (Math.abs(deltaX) > 50) {
            deltaX > 0 ? handlePreviousMedia() : handleNextMedia();
        }
    };

    const handleProductClick = () => {
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        window.open(randomUrl, '_blank');
    };

    return (
        <div
            className="lookbook-container"
            onTouchStart={(e) => setTouchStart({ x: e?.touches?.[0].clientX || e?.clientX })}
            onTouchEnd={handleTouchEnd}
        >
            <MediaDisplay
                currentMediaItem={currentMediaItem}
                isMuted={isMuted}
                toggleMute={toggleMute}
                handleNextMedia={handleNextMedia}
                videoRef={videoRef}
            />
            <div className='ui-overlay'>
                <TopBar
                    handlePreviousMedia={handlePreviousMedia}
                    handleNextMedia={handleNextMedia}
                />
                <ProgressBar
                    currentLookData={currentLookData}
                    currentMedia={currentMedia}
                    progress={progress}
                />
                {currentMediaItem && !isVideo &&
                    currentMediaItem.products.map(product => (
                        <Annotation key={product.id} product={product} />
                    ))
                }
                <ProductCards currentMediaItem={currentMediaItem} handleProductClick={handleProductClick} />
            </div>
        </div>
    );
}
