import { useModel } from "umi";
// import { Button, DatePicker } from "antd";
import React from "react";
import antd from 'remoteCounter/antd';
// import wangeditor from "remoteCounter/wangeditor";

const RemoteCounter = React.lazy(() => {
  // @ts-ignore
  return import("remoteCounter/Button");
});

const { Button: MyButton, DatePicker } = antd;
const { RangePicker } = DatePicker;

export default function HomePage() {
  const materProps = useModel("@@qiankunStateFromMaster");

  // console.log("====================================");
  // console.log(antd, MyButton);
  // console.log("====================================");

  return (
    <div>
      <h2>Slave2</h2>
      <h3>接受父应用参数：{materProps?.masterState?.slogan ?? "-"}</h3>
      <MyButton
        type="primary"
        onClick={() => {
          if (materProps?.setMasterState) {
            materProps.setMasterState({
              ...(materProps?.masterState || {}),
              slogan: "xxx",
            });
          }
        }}
      >
        xxx
      </MyButton>
      {/* <MyButton>xxx</MyButton> */}
      <RemoteCounter />
      <RangePicker />
    </div>
  );
}
