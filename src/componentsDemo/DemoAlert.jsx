import React, { useState } from 'react';
import { Alert, Button } from 'antd';

export const DemoAlert = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSuccessClick = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const handleInfoClick = () => {
    setShowInfo(true);
    setTimeout(() => {
      setShowInfo(false);
    }, 2000);
  };

  const handleWarningClick = () => {
    setShowWarning(true);
    setTimeout(() => {
      setShowWarning(false);
    }, 2000);
  };

  const handleErrorClick = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  return (
    <>
      <Button onClick={handleSuccessClick}>Show Success Alert</Button>
      <Button onClick={handleInfoClick}>Show Info Alert</Button>
      <Button onClick={handleWarningClick}>Show Warning Alert</Button>
      <Button onClick={handleErrorClick}>Show Error Alert</Button>

      {showSuccess && (
        <Alert
          className="fade-out"
          message="Success Text"
          description="Success Description dummy"
          type="success"
          closable
          onClose={() => setShowSuccess(false)}
        />
      )}

      {showInfo && (
        <Alert
          message="Info Text"
          description="Info Description dummy"
          type="info"
          closable
          onClose={() => setShowInfo(false)}
        />
      )}

      {showWarning && (
        <Alert
          message="Warning Text"
          description="Warning Description dummy"
          type="warning"
          closable
          onClose={() => setShowWarning(false)}
        />
      )}

      {showError && (
        <Alert
          message="Error Text"
          description="Error Description dummy"
          type="error"
          closable
          onClose={() => setShowError(false)}
        />
      )}

    </>
  );
};