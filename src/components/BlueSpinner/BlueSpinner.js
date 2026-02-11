import './BlueSpinner.scss';

const BlueSpinner = ({ show }) => {
  if (!show) return null;

  return (
    <div className="blur-spinner-overlay">
      <div className="blur-spinner"></div>
    </div>
  );
};

export default BlueSpinner;