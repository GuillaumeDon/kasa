import React from 'react';
import logoArrow from '../assets/arrow.png'

export function ArrowUpIcon() {
  return (
    <img src={logoArrow} alt="Arrow Up" className="arrow-icon" />
  );
}

export function ArrowDownIcon() {
  return (
    <img src={logoArrow} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(180deg)' }} />
  );
}

export function ArrowleftIcon() {
  return (
    <img src={logoArrow} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(90deg)' }} />
  );
}

export function ArrowRightIcon() {
  return (
    <img src={logoArrow} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(270deg)' }} />
  );
}