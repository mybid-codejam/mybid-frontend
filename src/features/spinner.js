import '../styles/features/spinner.css';

export default function Spinner() {
  return (
    <div id="container" className="container-spinner">
      <h1 className="brand-text">myBid</h1>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="#112052"
            />
          </filter>
        </defs>
        <circle
          id="spinner"
          style={{
            fill: 'transparent',
            stroke: '#1f3a93',
            strokeWidth: ' 7px',
            strokeLinecap: 'round',
            filter: 'url(#shadow)',
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
}
