import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import TabContents from './TabContents';
import styled from 'styled-components';
import '../scss/contents/Detail.scss';

let TitleBox = styled.div`
  padding: 2rem;
`;

let Title  = styled.h4`
  font-size: 2rem;
  color: ${ props => props.color }
`;

function Detail(props) {
  const { id } = useParams();
  const history = useHistory();

  let [ showAlert, setShowAlert ] = useState(true);
  let [ tab, setTab ] = useState(0);
  
  useEffect(() => {
    let timer = setTimeout(() => {setShowAlert(false)}, 1000);
    return () => {clearTimeout(timer)}
  }, []);

  return (
    <div className="container">
      <TitleBox>
        <Title color={'#333'}>DETAIL</Title>
      </TitleBox>
      {
        showAlert === true ? (
        <div className="my-alert">
          <p>재고가 얼마남지 않았습니다.</p>
        </div> )
       : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ (props.product[id].id + 1) +'.jpg' } alt="신발 제품 이미지" width="100%"/>
        </div>
        <div className="col-md-6 mt-4 mb-5">
          <h4 className="pt-5">{props.product[id].title}</h4>
          <p>{props.product[id].content}</p>
          <p>{props.product[id].price}원</p>
          <button className="btn btn-danger" onClick={() => { history.push('/cart')}}>장바구니</button>
          <button className="btn btn-primary ml-2" onClick={() => { history.push('/')}}>주문하기</button>
        </div>
      </div>

      <div className="tab">
        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0"> 
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => {setTab(0)}}>제품상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => {setTab(1)}}>고객리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => {setTab(2)}}>상품Q&A</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContents tab={tab}  />
      </div>

    </div>
  )
}

export default Detail;