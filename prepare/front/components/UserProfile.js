import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]} //리액트에서 배열로 jsx 쓸 때에는 key를 붙여주어야
    >
      <Card.Meta avatar={<Avatar>CLOVER</Avatar>} title="Clover" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
