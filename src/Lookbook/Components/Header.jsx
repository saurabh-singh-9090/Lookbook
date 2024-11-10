
export default function Header({ handlePreviousMedia, handleNextMedia }) {
    return (
        <div className="top-bar">
            <button className="icon-button" onClick={handlePreviousMedia} aria-label="Back">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 19l-7-7 7-7"></path>
                </svg>
            </button>
            <div className="top-bar-title">Tectonic.so</div>
            <button onClick={handleNextMedia} aria-label="Next media" className='icon-button'>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
}
