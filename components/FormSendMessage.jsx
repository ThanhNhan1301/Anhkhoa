import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { AiOutlineExpand, AiOutlineSend, AiFillPhone } from "react-icons/ai";
import Moment from "react-moment";
import { db } from "../firebase/firestore";
import Image from "next/image";

function FormSendMessage({ data }) {
  const [sendMessage, setSendMessage] = React.useState("");
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (sendMessage) {
      setSendMessage("");
      const uid = window.localStorage.getItem("user_uid");
      if (uid) {
        const docRef = doc(db, "Messages", uid);
        await setDoc(
          docRef,
          {
            received: false,
            messages: [
              ...data.messages,
              {
                displayName: data.displayName,
                sender: uid,
                type: "text",
                value: sendMessage,
                created_At: Date.now(),
              },
            ],
            updated_At: Date.now(),
          },
          { merge: true }
        ).catch((error) => console.log(error));
      }
    }
  };

  return (
    <div className={`w-full h-full`}>
      <form
        className={`flex flex-col
          w-full h-full shadow-lg bg-white`}
        onSubmit={handleSendMessage}
      >
        <div className="w-full text-start p-3 flex justify-start items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex-1 flex justify-start items-center gap-2">
              <span className="h-10 w-10 bg_primary flex justify-center items-center rounded-full text-white">
                AK
              </span>
              <span className="font-semibold">Anh Khoa</span>
            </div>
            <Link href="tel:+84909317151">
              <AiFillPhone size={24} className="color_primary cursor-pointer" />
            </Link>
          </div>
          <div className="color_primary cursor-pointer flex-shrink-0 hidden md:block">
            <AiOutlineExpand size={20} />
          </div>
        </div>

        <div
          className="flex-1 flex flex-col justify-end 
          bg-gray-50 w-full border-none outline-none 
          px-2 py-4 overflow-y-scroll scroll_custom"
          id="content_messages"
        >
          {data?.messages?.map((item, index) => {
            const time = new Date(item.created_At);
            const timeCurrent = new Date(Date.now());
            const day = time.getDate() === timeCurrent.getDate();
            const month = time.getMonth() === timeCurrent.getMonth();
            const year = time.getFullYear() === timeCurrent.getFullYear();

            return (
              <div key={index} className="w-full flex mb-3">
                <div
                  className={`${
                    item.sender !== "admin" ? "ml-auto" : "mr-auto"
                  } max-w-[65%] text-white `}
                >
                  <div className="flex items-center gap-2">
                    {item.sender == "admin" && (
                      <div
                        className="w-8 h-8 text-white rounded-full overflow-hidden 
                        shadow-md flex-shrink-0 relative
                        "
                      >
                        <Image
                          src="/logo.png"
                          className="w=full h-full"
                          layout="fill"
                        />
                      </div>
                    )}
                    <div
                      className={`${
                        item.sender !== "admin"
                          ? "ml-auto bg-slate-400"
                          : "bg-blue-600 mr-auto"
                      } px-3 py-1  rounded-[8px] shadow-md`}
                    >
                      {item.value.includes("\n") ? (
                        item.value.split("\n").map((item, x) => {
                          return (
                            <span
                              className="w-full leading-5 block"
                              key={Math.random() + x}
                            >
                              {item}
                            </span>
                          );
                        })
                      ) : (
                        <span className="w-full leading-5 block">
                          {item.value}
                        </span>
                      )}
                      <Moment
                        format={day && month && year ? "hh : mm" : "DD-MM-YYYY"}
                        className="block mt-2 text-[12px] font-thin text-end italic leading-4"
                      >
                        {item.created_At}
                      </Moment>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-3 my-3 rounded-md bg-white overflow-hidden">
          <div className="rounded-md flex relative">
            <div className="flex-1 h-9 ">
              <input
                value={sendMessage}
                onChange={(e) => setSendMessage(e.target.value)}
                type="text"
                className="h-full w-full border_custom outline-none rounded-md pl-2 pr-11"
              />
            </div>

            <button
              className="flex-shrink-0 h-9 w-9 bg_primary text-white 
            absolute right-0"
              type="submit"
            >
              <AiOutlineSend className="block m-auto" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSendMessage;
