
export default function ProgressBar({ currentLookData, currentMedia, progress }) {
    return (
        <div className="progress-container">
            {currentLookData?.media?.map((_, index) => (
                <div key={index} className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: index === currentMedia ? `${progress}%` :
                                index < currentMedia ? '100%' : '0%'
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
