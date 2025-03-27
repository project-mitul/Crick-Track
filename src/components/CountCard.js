import React, { useState } from 'react';
import '../Dashboard.css';

const CountCard = () => {
  const [currentBall, setCurrentBall] = useState(0);
  const [currentOver, setCurrentOver] = useState(0);
  const [showRunsModal, setShowRunsModal] = useState(false);
  const [showWicketModal, setShowWicketModal] = useState(false);
  const [isNoBall, setIsNoBall] = useState(false);
  const [isFreeHit, setIsFreeHit] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [overs, setOvers] = useState([]);
  const [currentOverBalls, setCurrentOverBalls] = useState([]);
  const [editingBallIndex, setEditingBallIndex] = useState(null);
  const [showConfirmDiscard, setShowConfirmDiscard] = useState(null);
  const [selectedBallIndex, setSelectedBallIndex] = useState(null);

  // Add click handler for the container to close selected state
  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedBallIndex(null);
    }
  };

  const handleBallClick = (index, event) => {
    event.stopPropagation();
    setSelectedBallIndex(selectedBallIndex === index ? null : index);
  };

  const handleEditBall = (index, event) => {
    event.stopPropagation();
    setEditingBallIndex(index);
    setSelectedBallIndex(null);
    const ball = currentOverBalls[index];
    if (ball.isWicket) {
      setShowWicketModal(true);
    } else {
      setIsNoBall(ball.isNoBall);
      setIsFreeHit(ball.isFreeHit);
      setShowRunsModal(true);
    }
  };

  const handleDiscardBall = (index, event) => {
    event.stopPropagation();
    setShowConfirmDiscard(index);
    setSelectedBallIndex(null);
  };

  const handleBallCount = () => {
    setShowRunsModal(true);
  };

  const handleNoBall = () => {
    setIsNoBall(true);
    setShowRunsModal(true);
  };

  const handleWicket = () => {
    setShowWicketModal(true);
  };

  const handleRunSelection = (runs) => {
    if (editingBallIndex !== null) {
      // Edit existing ball
      const newCurrentOverBalls = [...currentOverBalls];
      newCurrentOverBalls[editingBallIndex] = {
        ...newCurrentOverBalls[editingBallIndex],
        runs
      };
      setCurrentOverBalls(newCurrentOverBalls);
      setEditingBallIndex(null);
    } else {
      // Add new ball
      const newBall = {
        runs,
        isNoBall,
        isFreeHit,
        isWicket: false
      };
      
      const newCurrentOverBalls = [...currentOverBalls, newBall];
      setCurrentOverBalls(newCurrentOverBalls);

      // Only increment ball count if it's not a no-ball
      if (!isNoBall) {
        const newBallCount = currentBall + 1;
        setCurrentBall(newBallCount);

        // If over is complete (6 balls)
        if (newBallCount === 6) {
          setOvers([...overs, {
            overNumber: currentOver + 1,
            balls: newCurrentOverBalls,
            totalRuns: newCurrentOverBalls.reduce((sum, ball) => sum + ball.runs, 0)
          }]);
          setCurrentBall(0);
          setCurrentOver(currentOver + 1);
          setCurrentOverBalls([]);
        }
      }
    }

    // If it was a no-ball, automatically set up for free hit
    if (isNoBall) {
      setShowRunsModal(false);
      setIsNoBall(false);
      // Small delay to show the transition between modals
      setTimeout(() => {
        setIsFreeHit(true);
        setShowRunsModal(true);
      }, 100);
    } else {
      setShowRunsModal(false);
      setIsNoBall(false);
      setIsFreeHit(false);
    }
  };

  const handleWicketSelection = (wicketType) => {
    if (editingBallIndex !== null) {
      // Edit existing ball
      const newCurrentOverBalls = [...currentOverBalls];
      newCurrentOverBalls[editingBallIndex] = {
        ...newCurrentOverBalls[editingBallIndex],
        isWicket: true,
        wicketType,
        runs: 0
      };
      setCurrentOverBalls(newCurrentOverBalls);
      setEditingBallIndex(null);
    } else {
      // Add new ball
      const newBall = {
        runs: 0,
        isNoBall: false,
        isFreeHit: false,
        isWicket: true,
        wicketType
      };
      
      const newCurrentOverBalls = [...currentOverBalls, newBall];
      setCurrentOverBalls(newCurrentOverBalls);

      // Increment ball count
      const newBallCount = currentBall + 1;
      setCurrentBall(newBallCount);

      // If over is complete (6 balls)
      if (newBallCount === 6) {
        setOvers([...overs, {
          overNumber: currentOver + 1,
          balls: newCurrentOverBalls,
          totalRuns: newCurrentOverBalls.reduce((sum, ball) => sum + ball.runs, 0)
        }]);
        setCurrentBall(0);
        setCurrentOver(currentOver + 1);
        setCurrentOverBalls([]);
      }
    }
    setShowWicketModal(false);
  };

  const confirmDiscardBall = (index) => {
    const newCurrentOverBalls = currentOverBalls.filter((_, i) => i !== index);
    setCurrentOverBalls(newCurrentOverBalls);
    
    // Adjust ball count
    const newBallCount = currentBall - 1;
    setCurrentBall(newBallCount);
    setShowConfirmDiscard(null);
  };

  const handleCloseModal = () => {
    setShowRunsModal(false);
    setShowWicketModal(false);
    setIsNoBall(false);
    setIsFreeHit(false);
    setEditingBallIndex(null);
    setShowConfirmDiscard(null);
  };

  const handleFreeHit = () => {
    setIsFreeHit(true);
    setShowRunsModal(true);
  };

  const handleWide = () => {
    // Add a wide ball with 1 run automatically
    const newBall = {
      runs: 1,
      isWide: true,
      isNoBall: false,
      isFreeHit: false,
      isWicket: false
    };
    
    const newCurrentOverBalls = [...currentOverBalls, newBall];
    setCurrentOverBalls(newCurrentOverBalls);
    // Don't increment the ball count as it's a wide
  };

  const renderBallContainer = (ball, index, isCurrentOver = false) => (
    <div 
      key={index} 
      className={`ball-container ${isCurrentOver && selectedBallIndex === index ? 'selected' : ''}`}
      onClick={(e) => isCurrentOver ? handleBallClick(index, e) : null}
    >
      <span 
        className={`ball-run ${ball.isNoBall ? 'no-ball' : ''} ${ball.isFreeHit ? 'free-hit' : ''} ${ball.isWicket ? 'wicket' : ''} ${ball.isWide ? 'wide' : ''}`}
        data-runs={ball.runs}
      >
        {ball.isWicket ? 'W' : ball.runs}
        {ball.isWide && <span className="ball-indicator">wd</span>}
      </span>
      {isCurrentOver && selectedBallIndex === index && (
        <div className="ball-actions">
          <button 
            className="edit-ball-btn"
            onClick={(e) => handleEditBall(index, e)}
            title="Edit Ball"
          >
            ✎
          </button>
          <button 
            className="discard-ball-btn"
            onClick={(e) => handleDiscardBall(index, e)}
            title="Discard Ball"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="card counter-card">
        <div className="card-image">
          <img
            src="/cricket ball counter.jpg"
            alt="Cricket Ball Counter"
            className="card-img"
          />
        </div>
        <div className="card-content">
          <h2 className="card-title">Ball Counter</h2>
          <p className="card-description">
            Track balls and runs per over with automated counting
          </p>
          <div className="over-display">
            <span className="current-over">Over: {currentOver}.{currentBall}</span>
          </div>
          <div className="ball-controls">
            <button
              className="nav-button count-button"
              onClick={handleBallCount}
            >
              Count Ball
            </button>
            <button
              className="nav-button no-ball-button"
              onClick={handleNoBall}
            >
              No Ball
            </button>
            <button
              className="nav-button wide-button"
              onClick={handleWide}
            >
              Wide
            </button>
            <button
              className="nav-button wicket-button"
              onClick={handleWicket}
            >
              Wicket
            </button>
          </div>
        </div>
      </div>

      {/* Current Over and History */}
      <div className="overs-history" onClick={handleContainerClick}>
        {currentOverBalls.length > 0 && (
          <>
            <h4>Current Over</h4>
            <div className="over-card current-over-card">
              <div className="over-number">Over {currentOver + 1}</div>
              <div className="balls-runs">
                {currentOverBalls.map((ball, index) => renderBallContainer(ball, index, true))}
              </div>
              <div className="over-total">
                Total: {currentOverBalls.reduce((sum, ball) => sum + ball.runs, 0)} runs
              </div>
            </div>
          </>
        )}

        {overs.length > 0 && (
          <>
            <h4>Previous Overs</h4>
            {overs.map((over, index) => (
              <div key={index} className="over-card">
                <div className="over-number">Over {over.overNumber}</div>
                <div className="balls-runs">
                  {over.balls.map((ball, ballIndex) => renderBallContainer(ball, ballIndex, false))}
                </div>
                <div className="over-total">
                  Total: {over.totalRuns} runs
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Modals */}
      {showRunsModal && (
        <div className="runs-modal">
          <div className="runs-modal-content">
            <div className="modal-header">
              <h4>
                {editingBallIndex !== null ? 'Edit Ball' :
                 isNoBall ? 'No Ball - Select Runs' : 
                 isFreeHit ? 'Free Hit - Select Runs' : 
                 'Select Runs for Ball ' + (currentBall + 1)}
              </h4>
              <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            </div>
            <div className="runs-buttons">
              {[0, 1, 2, 3, 4, 5, 6].map((runs) => (
                <button
                  key={runs}
                  className="run-btn"
                  onClick={() => handleRunSelection(runs)}
                >
                  {runs} {runs === 1 ? 'Run' : 'Runs'}
                </button>
              ))}
            </div>
            {isNoBall && !isFreeHit && (
              <button
                className="free-hit-btn"
                onClick={handleFreeHit}
              >
                Free Hit
              </button>
            )}
          </div>
        </div>
      )}

      {showWicketModal && (
        <div className="runs-modal">
          <div className="runs-modal-content">
            <div className="modal-header">
              <h4>Select Wicket Type</h4>
              <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            </div>
            <div className="wicket-buttons">
              {['Bowled', 'Caught', 'LBW', 'Run Out', 'Stumped'].map((type) => (
                <button
                  key={type}
                  className="wicket-btn"
                  onClick={() => handleWicketSelection(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showConfirmDiscard !== null && (
        <div className="runs-modal">
          <div className="runs-modal-content">
            <div className="modal-header">
              <h4>Confirm Discard</h4>
              <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            </div>
            <p className="confirm-message">Are you sure you want to discard this ball?</p>
            <div className="confirm-buttons">
              <button className="confirm-btn cancel" onClick={handleCloseModal}>
                Cancel
              </button>
              <button 
                className="confirm-btn discard"
                onClick={() => confirmDiscardBall(showConfirmDiscard)}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountCard;