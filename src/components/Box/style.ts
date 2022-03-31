import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface BoxProps {
  width: number;
  height: number;
}

const getSize = ({ width, height }: BoxProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
  `;
};

export const Container = styled.div<BoxProps>`
  ${getSize};
  border: 1px solid ${theme.color.lightgrey};
  border-radius: 8px;

  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background: ${theme.color.white};
  font-size: 24px;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;
