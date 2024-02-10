import Image from "next/image";
// import MsgList from "..components/MsgList"
import SendMsg from "../components/SendMsg"
import MsgList from "../components/MsgList"

export default function Home() {
  return (
<div className="m-60">

<MsgList/>
<SendMsg/>


   </div>
  );
}
