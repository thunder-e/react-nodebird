import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "클로버" },
    { nickname: "왈왈" },
    { nickname: "마루" },
  ];
  const followingList = [
    { nickname: "클로버" },
    { nickname: "왈왈" },
    { nickname: "마루" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
