import React, { FC } from 'react';

import LikeLogic from './LikeLogic';

export interface LikeProps {
  thisId: number
}

const Like: FC<LikeProps> = ({ thisId }) => {

  return <LikeLogic thisId={thisId} />;
};

export default Like;
