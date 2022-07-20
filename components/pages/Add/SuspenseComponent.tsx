import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { asyncUser } from "../../../state/AsyncCounter";

const Component: React.FC = () => {
  const loadable = useRecoilValueLoadable(asyncUser);
  if (loadable.state !== "hasValue") {
    return null;
  }

  return <div>{loadable.getValue().name}</div>;
};

export const SuspenseComponent = Component;
