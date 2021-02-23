import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './../scss/contents/Cart.scss';

function Cart(props) {
  return (
    <div className="container">
      <div className="cart">
        <h2 className="cart__title">장바구니</h2>

        <ul className="cart__notice">
          <li>* 장바구니 상품은 최대 30일간 저장됩니다.</li>
          <li>* 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
          <li>* 오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.</li>
        </ul>

        <div className="cart__list">
          <Table responsive className="cart__table">
            <thead>
              <tr>
                <th></th>
                <th>상품정보</th>
                <th>수량</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              {
                props.state.map((n, i) => {
                  return (
                    <tr key={i}>
                      <td>{ n.id++ }</td>
                      <td>{ n.name }</td>
                      <td>
                        <div className="number_controller">
                          <button type="button" className="number_controller--plus" onClick={() => {}}><span className="blind">수량증가</span></button>
                          <span className="number_controller--quan">{ n.quan }</span>
                          <button type="button" className="number_controller--minus" onClick={() => {}}><span className="blind">수량감소</span></button>
                        </div>
                      </td>
                      <td>{ n.price }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

function stateToProps(state) {
  return {
    state: state
  }
}

export default connect(stateToProps)(Cart);