import React, { useCallback, useMemo, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const style = useMemo(() => ({ padding: 10 }), []);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <Form style={style} onFinish={onSubmitForm}>
      <Form.Item
        type="email"
        label="Email"
        name="userEmail"
        htmlFor="user-email"
        rules={[{ required: true, message: "Please input email" }]}
      >
        <Input
          htmlFor="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        htmlFor="user-password"
        rules={[{ required: true, message: "Please input password!" }]}
      >
        <Input.Password
          htmlFor="user-password"
          type={password}
          value={password}
          onChange={onChangePassword}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <a href="replace">
            <Button>회원가입</Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
