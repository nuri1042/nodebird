import React, {useEffect} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import Router from 'next/router';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import {useSelector} from 'react-redux';

function Profile() {
  const {me} = useSelector((state) => state.user);

  // 로그인했다가 로그아웃 하는 경우 메인 페이지로 감
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  // 로그인 안돼있는 상태에서는 프로필 페이지 접근 안되게 함
  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | Nodebird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </AppLayout>
    </>
  );
}

export default Profile;
