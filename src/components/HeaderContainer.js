import React, {useRef, useEffect} from 'react';
import HeaderComponent from './HeaderComponent';

const Header = () => {
  const underlineRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const portfolioLinkRef = useRef(null);
  const testimonialsLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  // Handles moving the underline when a link is clicked
  const onNavLinkClicked = (linkRef, instant = false) => {
    const boundingRect = linkRef.current.getBoundingClientRect();

    const width = boundingRect.width;
    const height = boundingRect.height;
    const left = boundingRect.left;
    const top = boundingRect.top;

    instant && (underlineRef.current.style.transition = 'none');
    underlineRef.current.style.width = `${width}px`;
    underlineRef.current.style.height = `3px`;
    underlineRef.current.style.left = `${left}px`;
    underlineRef.current.style.top = `${top + height - 10}px`;
    underlineRef.current.style.transform = 'none';
    instant &&
      setTimeout(
        () => (underlineRef.current.style.transition = 'all 0.35s ease-in-out'),
        10,
      );
  };
  // Handles window resizes
  const onResizeWindow = () => {
    onNavLinkClicked(portfolioLinkRef, true);
  };
  // Sets the underline to the portfolio link by default
  useEffect(() => {
    if (portfolioLinkRef != null) {
      onNavLinkClicked(portfolioLinkRef, true);
    }
  }, [portfolioLinkRef]);
  // On component did mount
  useEffect(() => {
    window.addEventListener('resize', onResizeWindow);
    return () => window.removeEventListener('resize', onResizeWindow);
  }, []);

  return (
    <HeaderComponent
      data={{
        underlineRef: underlineRef,
        aboutLinkRef: aboutLinkRef,
        portfolioLinkRef: portfolioLinkRef,
        testimonialsLinkRef: testimonialsLinkRef,
        contactLinkRef: contactLinkRef,
        onNavLinkClicked: onNavLinkClicked,
      }}
    />
  );
};

export default Header;
