import React, { useRef } from 'react';
import * as S from './section-intro.styles';
import { useSpring } from 'react-spring';

export const SectionIntro = () => {
  const n = useRef(0);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 750,
  });
  const sectionStyles = useSpring({
    // loop: () => 3s > n.current++,
    from: { x: 0 },
    to: { x: 800 },
  });

  return (
    <>
      <S.IntroTitle style={props}>Hello</S.IntroTitle>
      <S.SectionHello />
      <S.SectionIntro style={sectionStyles} />
    </>
  );
};
