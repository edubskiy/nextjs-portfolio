import * as I from './layout.types';
import * as S from './layout.styles';

export const Layout = (props: I.WithChildren) => {
  return <S.Layout>{props.children}</S.Layout>;
};
