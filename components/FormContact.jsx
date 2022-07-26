import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { db } from "../firebase/firestore";

function FormContact() {
  const [loading, setLoading] = React.useState(false);
  const [displayName, setDisplayName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const uid = window.localStorage.getItem("user_uid");
    if (uid) {
      try {
        setLoading(true);
        const docRef = doc(db, "Messages", uid);
        await setDoc(docRef, {
          uid,
          displayName,
          phone,
          messages: [
            {
              sender: uid,
              type: "text",
              value: message,
              isRead: false,
            },
          ],
          created_At: Date.now(),
          update_At: Date.now(),
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };
  return (
    <form
      className="flex flex-col justify-center items-center 
      w-full h-full overflow-hidden"
      onSubmit={handleSubmitForm}
    >
      <input
        value={displayName}
        onChange={(e) => {
          setDisplayName(e.target.value);
        }}
        type="text"
        placeholder="Tên của bạn"
        className="bg-gray-100 w-full h-10 outline-none  px-3 rounded-md my-2"
        required={true}
      />

      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        required={true}
        type="tel"
        placeholder="Số điện thoại liên hệ"
        className="bg-gray-100 w-full h-10 outline-none border-none px-3 rounded-md my-2"
      />

      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        required={true}
        placeholder="Ghi chú"
        className="flex-1 my-2 bg-gray-100 w-full outline-none border-none p-3 rounded-md 
            overflow-y-scroll scroll_custom leading-5"
      />
      <div className="w-full flex justify-center items-center">
        <button
          disabled={loading}
          type="submit"
          className="px-10 h-9 rounded-sm shadow-md bg_primary text-white uppercase mt-2"
        >
          {loading ? (
            <AiOutlineLoading size={20} className="animate-spin" />
          ) : (
            <span>Gửi</span>
          )}
        </button>
      </div>
    </form>
  );
}

export default FormContact;
