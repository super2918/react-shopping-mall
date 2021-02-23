import React from 'react';
import styled from 'styled-components';

let TabTextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  border: 1px solid #dee2e6;
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
  border-top-color: transparent;
`;

function TabContents(props) {

  if (props.tab === 0) {
    return <TabTextContent><p>제품상세정보</p></TabTextContent>
  } else if (props.tab === 1 ) {
    return <TabTextContent><p>고객리뷰</p></TabTextContent>
  } else if (props.tab === 2){
    return <TabTextContent><p>상품Q&A</p></TabTextContent>
  }
}

export default TabContents;