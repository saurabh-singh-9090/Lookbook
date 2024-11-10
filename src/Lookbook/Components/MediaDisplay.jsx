
export default function MediaDisplay({ currentMediaItem, isMuted, toggleMute, handleNextMedia, videoRef }) {
    const isVideo = currentMediaItem?.type === 'video';

    return (
        <div className="media-container">
            {isVideo ? (
                <>
                    <video
                        ref={videoRef}
                        src={currentMediaItem?.url}
                        className="media-content"
                        muted={isMuted}
                        playsInline
                        onEnded={handleNextMedia}
                        aria-label="Product video"
                        onClick={toggleMute}
                        autoPlay
                    />
                    <button
                        className="mute-toggle-icon"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M1 1l22 22"></path>
                                <path d="M9 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4l5 5V4L9 9z"></path>
                                <path d="M16 8l5 5m-5 0l5-5"></path>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M11 5 6 9H3v6h3l5 4V5z"></path>
                                <path d="M19 5v14"></path>
                            </svg>
                        )}
                    </button>
                </>
            ) : (
                <img src={currentMediaItem?.url} alt="Product look" className="media-content" />
            )}
        </div>
    );
}
