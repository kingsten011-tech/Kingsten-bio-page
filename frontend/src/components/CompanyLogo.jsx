import React from 'react';

// Reusable company logo — used inline in Experience and Projects.
// Each brand carries its own sizing strategy so wordmark logos
// (Oracle) and icon logos (Atlassian, Postman, etc.) all read at
// the same visual weight next to the company name / status badge.
const CompanyLogo = ({ id, size = 'md', className = '', watermark = false }) => {
  const isSelector = size === 'selector';
  const fitCls = isSelector
    ? 'max-h-full max-w-full h-auto w-auto object-contain'
    : 'object-contain flex-shrink-0';

  const h = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-9',
    identity: 'h-10 sm:h-11',
    xl: 'h-32',
    selector: 'h-full w-full',
  }[size];

  const square = isSelector
    ? 'w-full h-full'
    : size === 'sm'
      ? 'w-5'
      : size === 'md'
        ? 'w-7'
        : size === 'lg'
          ? 'w-9'
          : size === 'identity'
            ? 'w-10 sm:w-11'
            : 'w-32 md:w-40';
  const baseCls = `${h} ${isSelector ? fitCls : 'w-auto'} ${fitCls} ${className}`;
  const decorAlt = watermark ? '' : undefined;
  const decorProps = watermark ? { 'aria-hidden': true } : {};

  let logo = null;

  switch (id) {
    case 'atlassian':
      logo = (
        <img
          src="https://cdn.simpleicons.org/atlassian/0052CC"
          alt={decorAlt ?? 'Atlassian'}
          className={`${h} ${square} ${fitCls} ${className}`}
          loading="lazy"
          {...decorProps}
        />
      );
      break;
    case 'postman':
      logo = (
        <img
          src="https://cdn.simpleicons.org/postman/FF6C37"
          alt={decorAlt ?? 'Postman'}
          className={`${h} ${square} ${fitCls} ${className}`}
          loading="lazy"
          {...decorProps}
        />
      );
      break;
    case 'thetradedesk':
      logo = (
        <img
          src="/images/tradedesk-icon.png"
          alt={decorAlt ?? 'The Trade Desk'}
          className={`${h} ${square} ${fitCls} ${className}`}
          loading="lazy"
          {...decorProps}
        />
      );
      break;
    case 'google':
      logo = (
        <svg
          viewBox="0 0 48 48"
          className={`${h} ${square} ${fitCls} ${className}`}
          {...decorProps}
        >
          <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84a10.12 10.12 0 0 1-4.4 6.64v5.52h7.1c4.16-3.83 6.58-9.47 6.58-16.17Z" />
          <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.55-5.33l-7.1-5.52a13.5 13.5 0 0 1-20.13-7.07h-7.34v5.7A22 22 0 0 0 24 46Z" />
          <path fill="#FBBC05" d="M10.32 28.08a13.21 13.21 0 0 1 0-8.16v-5.7H2.98a22 22 0 0 0 0 19.56l7.34-5.7Z" />
          <path fill="#EA4335" d="M24 9.92c3.23 0 6.13 1.11 8.41 3.3l6.3-6.3A22 22 0 0 0 24 2C15.46 2 8.07 6.9 4.36 14.22l7.34 5.7A13.16 13.16 0 0 1 24 9.92Z" />
        </svg>
      );
      break;
    case 'thoughtworks':
      logo = (
        <img
          src="/images/thoughtworks-icon.png"
          alt={decorAlt ?? 'Thoughtworks'}
          className={baseCls}
          loading="lazy"
          {...decorProps}
        />
      );
      break;
    case 'oracle':
      logo = (
        <img
          src="/images/oracle.png"
          alt={decorAlt ?? 'Oracle'}
          className={`${isSelector ? 'max-h-full max-w-full h-auto w-auto' : size === 'sm' ? 'h-4' : size === 'md' ? 'h-6' : size === 'xl' ? 'h-24 md:h-28' : 'h-8'} ${fitCls} ${className}`}
          loading="lazy"
          {...decorProps}
        />
      );
      break;
    case 'careernet':
      logo = (
        <div
          className={`${h} ${square} rounded-md bg-[#0E0E0C] text-[#CFEA6B] font-mono font-bold ${size === 'xl' ? 'text-2xl md:text-3xl' : size === 'selector' ? 'text-[9px]' : 'text-[10px]'} flex items-center justify-center ${fitCls} ${className}`}
          {...decorProps}
        >
          CN
        </div>
      );
      break;
    default:
      return null;
  }

  if (watermark) {
    return (
      <div className={`experience-logo-watermark flex items-center justify-center ${className}`} aria-hidden="true">
        {logo}
      </div>
    );
  }

  return logo;
};

export default CompanyLogo;
