import { useModel } from "umi";
import { Button , DatePicker} from "antd";
import React from 'react'
// import wangeditor from 'component_app/wangeditor'

const RemoteCounter = React.lazy(() => {
  // @ts-ignore
  return import('remoteCounter/Button');
});


const { RangePicker } = DatePicker;

export default function HomePage() {
  const materProps = useModel("@@qiankunStateFromMaster");

  console.log('====================================');
  console.log("React: ", RemoteCounter);
  console.log('====================================');

  return (
    <div>
      <h2>Slave2</h2>
      <h3>接受父应用参数：{materProps?.masterState?.slogan ?? "-"}</h3>
      <Button
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
      </Button>
      <RangePicker />
    </div>
  );
}
