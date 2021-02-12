import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { authService } from "fbase";
import PathEnum from 'paths';
import { GetStaticProps } from "next";


function home() {
  const router = useRouter();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // authService.onAuthStateChanged((user) => {
    //   if (user) {
    //     setIsLoggedIn(true)
    //   } else {
    //     setIsLoggedIn(false)
    //   }
    // })
    if (!(isLoggedIn)) {
      router.push(PathEnum.AUTH)
    } else {
      router.push(PathEnum.MAIN);
    };
  }, []);
  return <p>loading</p>
};


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
}

export default home

