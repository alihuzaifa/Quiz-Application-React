import React, { useState } from 'react';
import { Progress } from 'antd';
const ProgressBar = ({ progressCount }) => {
  const [percent, setPercent] = useState(progressCount);
  console.log(percent)
  return (
    <>
      <Progress percent={percent} />

    </>
  );
};
export default ProgressBar;