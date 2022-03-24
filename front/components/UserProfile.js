import React, { useCallback } from "react";
import { Card, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

function UserProfile() {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {me.Posts.length}
          </div>,
          <div key="followings">
            팔로잉 수
            <br />
            {me.Followings.length}
          </div>,
          <div key="followers">
            팔로워 수
            <br />
            {me.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
        <Button onClick={onLogout} loading={logOutLoading}>
          로그아웃
        </Button>
      </Card>
    </>
  );
}

export default UserProfile;
