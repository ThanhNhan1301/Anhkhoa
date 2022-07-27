import { doc, onSnapshot, setDoc } from "firebase/firestore";
import React from "react";

import { db } from "../firebase/firestore";
import FormContact from "./FormContact";
import FormSendMessage from "./FormSendMessage";

function ContactMessage() {
  const [dataMessages, setDataMessages] = React.useState(null);

  React.useEffect(() => {
    const uid = window.localStorage.getItem("user_uid");

    if (!uid) return;

    const subscribe = onSnapshot(doc(db, "Messages", uid), (doc) => {
      setDataMessages(doc.data());
    });

    return () => subscribe();
  }, []);

  React.useEffect(() => {
    const eContentMessage = document.getElementById("content_messages");
    if (eContentMessage) {
      eContentMessage.scrollTo(0, eContentMessage.scrollHeight);
    }
  });

  return (
    <div className="mb-[80px] w-full opacity-0 scale-0" id="call_for_us">
      <h3 className="text-2xl font-semibold text-center uppercase">
        Liên hệ chúng tôi
      </h3>
      <p className="px-6 mt-2 italic text-[14px] color_primary w-full text-center leading-5">
        (Thông tin của khách hàng được chúng tôi bảo mật tuyệt đối.)
      </p>
      <div className="w-full px-5 max-w-[450px] h-[500px] mt-10  m-auto">
        {!!dataMessages ? (
          <FormSendMessage data={dataMessages} />
        ) : (
          <FormContact />
        )}
      </div>
    </div>
  );
}

export default ContactMessage;
