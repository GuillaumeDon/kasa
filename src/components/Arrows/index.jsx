
import React from 'react';
import logoArrow from '../../assets/arrow.png';

const ArrowIcon = ({ alt, className, style }) => (
  <img src={logoArrow} alt={alt} className={`arrow-icon ${className}`} style={style} />
);

export const ArrowUpIcon = () => <ArrowIcon alt="Arrow Up" />;
export const ArrowDownIcon = () => <ArrowIcon alt="Arrow Down" style={{ transform: 'rotate(180deg)' }} />;
export const ArrowRightIcon = () => <ArrowIcon className ="arrow-right" alt="Arrow Right" style={{ transform: 'rotate(270deg)' }} />;
export const ArrowLeftIcon = () => <ArrowIcon className ="arrow-left" alt="Arrow Left" style={{ transform: 'rotate(90deg)' }} />;
