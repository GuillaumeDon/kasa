// import React from 'react';
// import logoArrow from '../assets/arrow.png'

// export function ArrowUpIcon() {
//   return (
//     <img src={logoArrow} alt="Arrow Up" className="arrow-icon" />
//   );
// }

// export function ArrowDownIcon() {
//   return (
//     <img src={logoArrow} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(180deg)' }} />
//   );
// }

// export function ArrowleftIcon() {
//   return (
//     <img src={logoArrow} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(90deg)' }} />
//   );
// }

// export function ArrowRightIcon() {
//   return (
//     <img src={logoArrow} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(270deg)' }} />
//   );
// }


import React from 'react';
import logoArrow from '../../assets/arrow.png';

const ArrowIcon = ({ alt, className, style }) => (
  <img src={logoArrow} alt={alt} className={`arrow-icon ${className}`} style={style} />
);

export const ArrowUpIcon = () => <ArrowIcon alt="Arrow Up" />;
export const ArrowDownIcon = () => <ArrowIcon alt="Arrow Down" style={{ transform: 'rotate(180deg)' }} />;
export const ArrowRightIcon = () => <ArrowIcon className ="arrow-right" alt="Arrow Right" style={{ transform: 'rotate(270deg)' }} />;
export const ArrowLeftIcon = () => <ArrowIcon className ="arrow-left" alt="Arrow Left" style={{ transform: 'rotate(90deg)' }} />;
