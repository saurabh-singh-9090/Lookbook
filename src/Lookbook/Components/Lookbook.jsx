
import { useEffect, useRef, useState } from 'react';
import '../../Lookbook/lookbook.css';
import { looks } from '../data/data';
import MediaView from './MediaView';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Annotation from './Annotation';
import ProductCards from './ProductCards';

const randomUrls = [
    'https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg',
    'https://i.imgur.com/OB0y6MR.jpg',
];

const Lookbook = () => {
    const [currentLook, setCurrentLook] = useState(0);
    const [currentMedia, setCurrentMedia] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
    const progressInterval = useRef(null);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const currentLookData = looks[currentLook];
    const currentMediaItem = currentLookData?.media[currentMedia];
    const isVideo = currentMediaItem?.type === 'video';

    const handleProductClick = () => {
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        window.open(randomUrl, '_blank');
    };

    const handleNextMedia = () => {
        if (currentMedia < currentLookData?.media?.length - 1) {
            setCurrentMedia(currentMedia + 1);
        } else {
            // If we are at the last media of the current look
            if (currentLook < looks.length - 1) {
                // Move to the next look
                setCurrentLook(currentLook + 1);
                setCurrentMedia(0); // Reset media index to start at the beginning of the next look
            } else {
                // If it's the last look and last media, loop back to the start
                setCurrentLook(0);
                setCurrentMedia(0);
            }
        }
        setProgress(0);
    };

    useEffect(() => {
        if (isVideo) {
            if (videoRef?.current) {
                videoRef.current.currentTime = 0;
                videoRef?.current?.play();
            }
        } else {
            clearInterval(progressInterval.current);
            progressInterval.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) {
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
    }, [currentMedia, currentLook]);

    useEffect(() => {
        if (isVideo && videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted, isVideo]);

    const handlePreviousMedia = () => {
        if (currentMedia > 0) {
            // Move to the previous media within the same look
            setCurrentMedia(currentMedia - 1);
        } else {
            // We are at the first media of the current look
            if (currentLook > 0) {
                // Move to the previous look
                const previousLookIndex = currentLook - 1;
                const previousLookMediaLength = looks[previousLookIndex]?.media.length;
                setCurrentLook(previousLookIndex);
                setCurrentMedia(previousLookMediaLength ? previousLookMediaLength - 1 : 0); // Safely handle last media of previous look
            } else {
                // We are at the very first media of the very first look; loop back to the last look
                const lastLookIndex = looks.length - 1;
                const lastMediaIndex = looks[lastLookIndex]?.media.length - 1;
                if (lastMediaIndex >= 0) {
                    setCurrentLook(lastLookIndex);
                    setCurrentMedia(lastMediaIndex);
                }
            }
        }
        setProgress(0); // Reset progress
    };

    const toggleMute = () => {
        setIsMuted((prevMuted) => !prevMuted);
    };

    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches?.[0].clientX - touchStart.x;
        const deltaY = e.changedTouches?.[0].clientY - touchStart.y;

        // Ensuring there's a significant swipe distance before triggering the navigation
        // Math.abs(deltaX) > Math.abs(deltaY): Ensures the swipe is primarily horizontal (not diagonal or vertical).
        // Math.abs(deltaX) > 50: Ensures the swipe is long enough (more than 50 pixels) to be considered intentional, avoiding accidental swipes.
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                handlePreviousMedia(); // Swipe right -> Previous media
            } else {
                handleNextMedia(); // Swipe left -> Next media
            }
        } else if (Math.abs(deltaY) > 50) {
            // Swiping vertically to change the look
            setCurrentLook(currentLook + (deltaY > 0 ? -1 : 1));
        }
    };

    return (
        <div
            className="lookbook-container"
            ref={containerRef}
            onTouchStart={(e) => setTouchStart({
                x: e?.touches?.[0].clientX || e?.clientX,
                y: e?.touches?.[0].clientY || e?.clientYs,
            })}
            onTouchEnd={handleTouchEnd}
            onClick={toggleMute}
        >
            <MediaView
                currentMediaItem={currentMediaItem}
                isMuted={isMuted}
                toggleMute={toggleMute}
                handleNextMedia={handleNextMedia}
                videoRef={videoRef}
            />
            <div className='ui-overlay'>
                <Header
                    handlePreviousMedia={handlePreviousMedia}
                    handleNextMedia={handleNextMedia}
                />
                <div style={{margin: '8px'}}>
                <ProgressBar
                    currentLookData={currentLookData}
                    currentMedia={currentMedia}
                    progress={progress}
                />
                <ProductCards currentMediaItem={currentMediaItem} handleProductClick={handleProductClick} />
                {currentMediaItem && !isVideo &&
                    currentMediaItem.products.map(product => (
                        <Annotation key={product.id} product={product} />
                    ))
                }
            </div>
            </div>
        </div>
    );
}

export default Lookbook;