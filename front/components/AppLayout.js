import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

function AppLayout({children}) {
  // isLoggedIn 이 바뀌면 AppLayout component가 자동 리렌더링됨
  const {me} = useSelector(state => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="main">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <SearchInput />
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.nuri.com" target="_blank" rel="noopener noreferrer">
            Made by Nuri
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {children: PropTypes.node.isRequired};
export default AppLayout;
