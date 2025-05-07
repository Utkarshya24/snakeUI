import React from 'react';

const SnakeUiButton = () => {
  return (
    <>
      <style>
        {`
          .snake-btn {
            position: relative;
            z-index: 1;
            overflow: hidden;
            border-radius: 2rem;
          }

          .snake-btn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(
              from 0deg,
              #77e0d1,
              #565656,
              #F4F4F4,
              #77e0d1
            );
            z-index: -1;
            border-radius: 2rem;
            transform: rotate(0deg);
          }

          .snake-btn:hover::before {
            animation: spin-border 4s linear infinite;
          }

          .snake-btn::after {
            content: '';
            position: absolute;
            inset: 2px;
            background: linear-gradient(to top, #818C8A, #D5D8D8);
            border-radius: 2rem;
            z-index: 1;
          }

          @keyframes spin-border {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <button className="snake-btn p-1 shadow-xl shadow-[#ABC9C4] hover:cursor-pointer">
        <span className="relative bg-grdient-to-t from-[#77e0d1] to-[#F4F4F4] z-10 font-semibold px-4 py-2">
          SnakuiButton
        </span>
      </button>
    </>
  );
};

export default SnakeUiButton;
