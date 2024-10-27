// ostad course design from WordPress Theme Development
// Link: https://ostad.app/course/wordpress-theme-development

import { useEffect, useRef, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { GoChevronRight } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";

const Ostad = () => {
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const rightElement = rightRef.current;
    const leftElement = leftRef.current;

    if (!rightElement || !leftElement) return;

    const rect = rightElement.getBoundingClientRect();
    const leftRect = leftElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (leftRect.bottom > windowHeight) {
      setIsFixed(rect.top >= 0 && rect.bottom < windowHeight); // Adjust this condition
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative">
      <h1 className="text-center bg-[#12b76a] text-white p-2">
        WP25 প্রোমো এপ্লাই করলে ২৫% ডিসকাউন্ট আর বাকি ১ দিন এপ্লাই করুন
      </h1>
      <div className="flex flex-col-reverse lg:flex-row mx-1">
        <div
          ref={leftRef}
          className="lg:w-[60%] p-3 overflow-y-auto max-h-screen"
        >
          <h1 className="text-5xl font-bold mb-4 p-4">
            WordPress Theme Development
          </h1>
          <p className="mb-6 text-sm">
            বিশ্বের সবচেয়ে জনপ্রিয় কন্টেন্ট ম্যানেজমেন্ট সিস্টেম ওয়ার্ডপ্রেস থিম
            ডেভেলপমেন্ট শিখে মার্কেটপ্লেস থেকে ইনকাম শুরু করুন আপনিও! কোর্সটি
            করার জন্য পূর্ব কোডিং নলেজ না থাকলেও কোন সমস্যা নেই; কোর্সটিকে
            সাজানো হয়েছে একদম বিগিনার ফ্রেন্ডলি ওয়েতে, জয়েন করতে পারবেন ০.০
            বিগিনাররাও।
          </p>
          <div className="flex justify-between border-l-2 pl-2 border-[#ff8c4b] bg-white p-3">
            <p className="bg-[#ff8c4b] p-2 text-white text-center items-center">
              ব্যাচ ৪
            </p>
            <p className="border-x-2 px-3 lg:px-12">
              শুরু হবে <br /> বৃহস্পতিবার, ৩১ অক্টো
            </p>
            <p>
              ক্লাস শিডিউল <br /> বৃহ, সোম, (রাত ৯:০০ - ১০:০০)
            </p>
          </div>
          <p className="my-4">
            <span className="text-xl font-bold">স্টাডি প্ল্যান</span> ৩০ টি
            মডিউল . ৪৯ টি লাইভ ক্লাস
          </p>
          <div className="border border-black">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <div className="flex gap-2">
                  <p className="text-base bg-[#12b76a] text-white p-2">
                    মডিউল{" "}
                    <span className="flex justify-center">
                      <FaCirclePlay />
                    </span>
                  </p>
                  <div>
                    <p className="font-bold text-lg">শুরুর আগের শুরু ফ্রী</p>
                    <p className="text-[12px]">
                      কোর্স শুরু হবার আগে এই ভিডিওগুলো দেখে নিবেন
                    </p>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <p className="text-sm my-1 border-t">
                  আপনি যদি বিগিনার হয়ে থাকেন, তাহলে অবশ্যই এই ভিডিও রিসোর্সগুলো
                  দেখে লাইভ ব্যাচে জয়েন করবেন। বিজয় আপনারই!
                </p>
                <p className="flex items-center justify-between border-y py-4">
                  {" "}
                  <p className="flex items-center gap-1">
                    <FaCirclePlay /> <span>1 Html Introduction</span>{" "}
                    <span className="flex items-center gap-1 border border-[#12b76a] rounded-xl text-[#12b76a] p-[2px]">
                      <MdOutlineVideoSettings />
                      প্রি রেকর্ডেড
                    </span>
                  </p>
                  <div className="flex gap-1 items-center">
                    <span>৩ মিনিট</span>
                    <button className="flex items-center gap-1 bg-[#c9cbcd] rounded-lg p-2">
                      {" "}
                      <FaRegEye />
                      দেখুন
                    </button>
                  </div>
                </p>
                <p className="flex items-center justify-between border-y py-4">
                  {" "}
                  <p className="flex items-center gap-1">
                    <FaCirclePlay /> <span>1 Html Basic</span>{" "}
                    <span className="flex items-center gap-1 border border-[#12b76a] rounded-xl text-[#12b76a] p-[2px]">
                      <MdOutlineVideoSettings />
                      প্রি রেকর্ডেড
                    </span>
                  </p>
                  <div className="flex gap-1 items-center">
                    <span>৩ মিনিট</span>
                    <button className="flex items-center gap-1 bg-[#c9cbcd] rounded-lg p-2">
                      {" "}
                      <FaRegEye />
                      দেখুন
                    </button>
                  </div>
                </p>
                <p className="flex items-center justify-between border-y py-2">
                  {" "}
                  <p className="flex items-center gap-1">
                    <FaCirclePlay /> <span>1 Html Text Format</span>{" "}
                    <span className="flex items-center gap-1 border border-[#12b76a] rounded-xl text-[#12b76a] p-[2px]">
                      <MdOutlineVideoSettings />
                      প্রি রেকর্ডেড
                    </span>
                  </p>
                  <div className="flex gap-1 items-center">
                    <span>৩ মিনিট</span>
                    <button className="flex items-center gap-1 bg-[#c9cbcd] rounded-lg p-2">
                      {" "}
                      <FaRegEye />
                      দেখুন
                    </button>
                  </div>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <div className="flex gap-2">
                  <p className="text-base bg-[#fbaa00] text-white p-2">
                    মডিউল{" "}
                    <span className="flex justify-center">
                      <FaCirclePlay />
                    </span>
                  </p>
                  <div>
                    <p className="font-bold text-lg">
                      HTML বেসিকস ফর ওয়ার্ডপ্রেস থিমস
                    </p>
                    <p className="text-[12px]">
                      কোর্স শুরু হবার আগে এই ভিডিওগুলো দেখে নিবেন
                    </p>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <p className="text-sm my-1 border-t">
                  আপনি যদি বিগিনার হয়ে থাকেন, তাহলে অবশ্যই এই ভিডিও রিসোর্সগুলো
                  দেখে লাইভ ব্যাচে জয়েন করবেন। বিজয় আপনারই!
                </p>
                <p className="flex items-center justify-between border-y py-4">
                  {" "}
                  <p className="flex items-center gap-1">
                    <FaCirclePlay />{" "}
                    <span>1 Introduction to HTML for Beginners</span>{" "}
                    <span className="flex items-center gap-1 border border-[#12b76a] rounded-xl text-[#12b76a] p-[2px]">
                      <MdOutlineVideoSettings />
                      প্রি রেকর্ডেড
                    </span>
                  </p>
                  <div className="flex gap-1 items-center">
                    <span>৩ মিনিট</span>
                    <button className="flex items-center gap-1 bg-[#c9cbcd] rounded-lg p-2">
                      {" "}
                      <FaRegEye />
                      দেখুন
                    </button>
                  </div>
                </p>
                <p className="flex items-center justify-between border-y py-4">
                  {" "}
                  <p className="flex items-center gap-1">
                    <FaCirclePlay /> <span>1 Html Basic</span>{" "}
                    <span className="flex items-center gap-1 border border-[#12b76a] rounded-xl text-[#12b76a] p-[2px]">
                      <MdOutlineVideoSettings />
                      প্রি রেকর্ডেড
                    </span>
                  </p>
                  <div className="flex gap-1 items-center">
                    <span>৩ মিনিট</span>
                    <button className="flex items-center gap-1 bg-[#c9cbcd] rounded-lg p-2">
                      {" "}
                      <FaRegEye />
                      দেখুন
                    </button>
                  </div>
                </p>
                <p className="flex items-center justify-between border-y py-2">
                  {" "}
                  <p className="flex items-center gap-1">
                    <FaCirclePlay /> <span>1 Html Text Format</span>{" "}
                    <span className="flex items-center gap-1 border border-[#12b76a] rounded-xl text-[#12b76a] p-[2px]">
                      <MdOutlineVideoSettings />
                      প্রি রেকর্ডেড
                    </span>
                  </p>
                  <div className="flex gap-1 items-center">
                    <span>৩ মিনিট</span>
                    <button className="flex items-center gap-1 bg-[#c9cbcd] rounded-lg p-2">
                      {" "}
                      <FaRegEye />
                      দেখুন
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-3 bg-[#9fa3aa]">
            <button className="py-2">আরো ২৫টি দেখুন</button>
          </div>
          <div className="flex items-center my-12">
            <span className="text-3xl font-bold">
              ক্লিক করে দেখে নিন কোর্সের ডেমো ক্লাস
            </span>
            <iframe
              width="290"
              height="200"
              src="https://www.youtube.com/embed/2hwpPB3ZTC8?si=W11RG_iWNSVnKDdf"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="bg-[#fff1e9] p-5">
            <p className="text-lg">ইন্সট্রাক্টর</p>
            <h3 className="flex items-center text-xl gap-2 font-bold">
              <span className="text-[#eea029]">
                <FaMedal />
              </span>{" "}
              লিড ইন্সট্রাক্টর
            </h3>
            <div className="flex items-center gap-2 bg-white">
              <img
                className="w-12 rounded-3xl"
                src="https://lh3.googleusercontent.com/a/ACg8ocKK0Zmiiw579ElRkNruYKcz5zPBQltI5ZNFwLgQv5x1142MveY=s288-c-no"
                alt=""
              />
              <div>
                <p className="mt-2 text-gray-600">Md Momin Hossain</p>
                <p className="mt-1 text-gray-500">
                  PHP Laravel | Web Application Developer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white mt-3">
              <img
                className="w-12 rounded-3xl"
                src="https://lh3.googleusercontent.com/a/ACg8ocKK0Zmiiw579ElRkNruYKcz5zPBQltI5ZNFwLgQv5x1142MveY=s288-c-no"
                alt=""
              />
              <div>
                <p className="mt-2 text-gray-600">Mobarok Hossain Momin</p>
                <p className="mt-1 text-gray-500">Web Application Developer</p>
              </div>
            </div>
          </div>
          <div className="my-6">
            <p>কোর্স সম্পর্কে</p>
            <p>
              বর্তমানে বিশ্বের ছোট-বড় যেকোনো প্রতিষ্ঠানে ওয়েবসাইট এর প্রয়োজন
              হচ্ছে এবং এর ফলে থিম ডেভেলপারদের জনপ্রিয়তা প্রতিনিয়ত বাড়ছে।
              ওয়ার্ডপ্রেস থিম ডেভেলপমেন্ট হচ্ছে ওয়েব ডেভেলপমেন্টেরই একটি অংশ এবং
              এর ডিমান্ড মার্কেটপ্লেসে সবসময়-ই অনেক বেশি। তাই যুগের সাথে তাল
              মিলিয়ে চলতে ওয়ার্ডপ্রেস থিম ডেভেলপমেন্ট শিখে রাখাটা আপনার লাইফের
              হতে পারে বেস্ট ডিসিশন! আর ওস্তাদের “WordPress Theme Development”
              লাইভ কোর্সটি আপনার জন্যই। ইন্সট্রাকশনে আছেন সেলিম রানা ভাইয়া, যিনি
              কোর্সটিতে ব্লগ এবং ই-কমার্স ২ ধরনের ওয়েব পেইজেরই থিম সরাসরি ডেভেলপ
              করে দেখাবেন। কোর্সটি সম্পূর্ণ করার পরে আপনি আপনার নিজের থিম ডেভেলপ
              করতে পারবেন এবং তা সাবমিট করতে পারবেন। <br />
              <span className="font-bold">
                কোর্সটি করে আমি কীভাবে উপকৃত হবো?
              </span>{" "}
              <br /> ১। নিজের ড্রিম ওয়ার্ডপ্রেস থিম ডেভেলপ করে ফেলতে পারবেন।{" "}
              <br /> ২। ব্লগ এবং ই-কমার্স, ২ ধরনের থিম ডেভেলপ করাই শিখতে পারবেন।{" "}
              <br />
              ৩। Envato মার্কেটপ্লেস নিয়ে বিস্তারিত জানতে পারবেন
              <br /> ৪। মার্কেটপ্লেসে ওয়ার্ডপ্রেস থিম ডেভেলপ করার মাধ্যমে কীভাবে
              ইনকাম করবেন- তার উপর থাকবে পরিপূর্ণ গাইডলাইন।
            </p>
          </div>
          <div className="bg-black text-white p-4">
            <h1 className="font-bold">কোর্স চলাকালীন প্রজেক্টসমুহ</h1>
            <p className="bg-[#1d2939] p-5 w-1/2">
              <p className="mb-3">Harry Portfolio Theme</p>
              <img
                className=""
                src="https://cdn.ostad.app/public/upload/2023-11-27T08-01-17.511Z-preview-04.__large_preview.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="my-8">
            <h1 className="text-3xl">রিকোয়ারমেন্টস</h1>
            <ul>
              <li>
                -পূর্ব কোডিং নলেজ জানা না থাকলেও শেখা যাবে ওয়ার্ডপ্রেস থিম
                ডেভেলপমেন্ট
              </li>
              <li>-ল্যাপটপ/ডেস্কটপ (৪ জিবি র‍্যাম)</li>
              <li>-ভালো ইন্টারনেট কানেকশন</li>
              <li>-লেগে থাকার মানসিকতা</li>
            </ul>
          </div>
          <div className="my-10">
            <h1 className="text-3xl">রিভিউ</h1>
            <div className="bg-white p-3">
              <p className="mb-4">Md Mosaddek Hossen</p>
              <p>
                ক্লাসগুলো খুব ভালো ছিল। আমি কোর্সটি পরিচিতদের কাছে রেকমেন্ড
                করেছি। আমার মনে হয়েছে মেইন টিচার বেশ ভালো এবং সাপোর্ট ও খুব ভালো
                পেয়েছি। আমি কোর্সটিকে ১০/১০ রেটিং দিবো।{" "}
              </p>
            </div>
            <div className="bg-white p-3 my-4">
              <p className="mb-4">Md Mosaddek Hossen</p>
              <p>
                ক্লাসগুলো খুব ভালো ছিল। আমি কোর্সটি পরিচিতদের কাছে রেকমেন্ড
                করেছি। আমার মনে হয়েছে মেইন টিচার বেশ ভালো এবং সাপোর্ট ও খুব ভালো
                পেয়েছি। আমি কোর্সটিকে ১০/১০ রেটিং দিবো।{" "}
              </p>
            </div>
            <div className="bg-white p-3">
              <p className="mb-4">Md Mosaddek Hossen</p>
              <p>
                ক্লাসগুলো খুব ভালো ছিল। আমি কোর্সটি পরিচিতদের কাছে রেকমেন্ড
                করেছি। আমার মনে হয়েছে মেইন টিচার বেশ ভালো এবং সাপোর্ট ও খুব ভালো
                পেয়েছি। আমি কোর্সটিকে ১০/১০ রেটিং দিবো।{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center border bg-white">
            <button className="py-2">আরো ৯টি দেখুন</button>
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-semibold">হেল্প</h1>
            <p>
              ব্যাচ সংক্রান্ত যেকোনো তথ্যের জন্যে কল করুন +88019404444** (সকাল
              ১০টা থেকে রাত ১০টা)
            </p>
          </div>
        </div>
        <div
          ref={rightRef}
          className={`border lg:w-[40%] transition-transform duration-300 ${
            isFixed ? "fixed top-16 right-0" : "relative"
          } bg-gray-100`}
        >
          <div className="mb-6">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/Uox3eCkzXPI?si=1ImU7VIJr4hWTZnk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center gap-4 text-sm border-b">
            <p className="flex items-center gap-1 text-lg font-bold mb-2 bg-[#fff1e9]">
              {" "}
              <BiTimeFive />৪ দিন বাকি
            </p>
            <p className="flex items-center gap-1 text-lg font-bold mb-2 bg-[#f0e1fb]">
              <RiUserFollowLine />
              ৮১ সিট বাকি
            </p>
          </div>
          <div className="flex justify-between px-3 gap-2 text-sm border-b">
            <p className="font-bold mb-2 text-[#ff8c4b] text-2xl">৳৮,০০০</p>
            <p className="text-lg font-bold mb-2">প্রোমো কোড</p>
          </div>
          <button className="p-3 flex items-center justify-center bg-[#ffcd33] w-full font-semibold text-sm mb-3">
            ব্যাচে ভর্তি হোন{" "}
            <span className="text-lg">
              <GoChevronRight />
            </span>
          </button>
          <div className="mb-6 px-2">
            <p className="text-xl font-semibold">এই কোর্সে আপনি পাচ্ছেন:</p>
            <div className="list-disc list-inside grid grid-cols-2 text-sm mt-1">
              <p className="flex gap-1">
                <LuArrowRight />
                একদম ব্যাসিক HTML, CSS, JavaScript থেকে শুরু
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                ওয়ার্ডপ্রেসের জন্য প্রয়োজনীয় PHP
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                হেডার, ফুটার, ব্লগ লেআউট
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                এলিমেন্টর ও অ্যাডভান্সড এলিমেন্টর উইজেটস
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                টেস্টিমোনিয়াল, ব্লগ, পোর্টফোলিও পেইজ তৈরি
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                এবাউট মি পেইজ, সার্ভিস পেইজ
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                Woocommerce ব্যাসিক টু এডভান্সড
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                থিমফরেস্ট ও মার্কেটপ্লেসের জন্য ইনকাম গাইডলাইন
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                ৪৬ টি লাইভ ক্লাস
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                ২০০+ প্রিরেকর্ডেড ভিডিও
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                দিনে ১ বেলা সাপোর্ট ক্লাস
              </p>
              <p className="flex gap-1">
                <LuArrowRight />
                সকল লাইভ ক্লাস রেকর্ডিং এর লাইফটাইম এক্সেস
              </p>
            </div>
            <p className="border-t pt-2 mt-2 flex items-center gap-1">
              <span className="text-[#ff9051] flex items-center">
                <IoMdCall /> কল করুন +8801940444476
              </span>{" "}
              (সকাল ১০টা থেকে রাত ১০টা)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ostad;
