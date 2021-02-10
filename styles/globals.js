/** @format */

import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);
