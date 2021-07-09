import React from 'react'
import styled from 'styled-components'
import { CgSpinner } from "react-icons/cg"

const LoaderWrap = styled.div`
  width: 100%;
  padding: calc(1rem * 6) 0;
  display:flex;
  align-items:center;
  justify-content:center;
  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
  > div {
    width: calc(1rem * 6);
    height: calc(1rem * 6);
    display:flex;
    align-items:center;
    justify-content:center;
    animation: spin 5s infinite;
  }
  * {
    color: var(--white) !important;
    font-size: calc(1rem * 6);
  }
`

const Loader = () => (
  <LoaderWrap>
    <div>
      <CgSpinner />
    </div>
  </LoaderWrap>
)

export default Loader