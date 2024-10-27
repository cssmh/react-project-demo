// ostad course design from WordPress Theme Development
// Link: https://ostad.app/course/wordpress-theme-development

import { useEffect, useRef, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { GoChevronRight } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

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
      setIsFixed(rect.top >= 0);
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
          className="lg:w-[60%] p-5 overflow-y-auto max-h-screen"
        >
          <h1 className="text-5xl font-bold mb-4">
            WordPress Theme Development
          </h1>
          <p className="mb-6 text-sm">
            বিশ্বের সবচেয়ে জনপ্রিয় কন্টেন্ট ম্যানেজমেন্ট সিস্টেম ওয়ার্ডপ্রেস থিম
            ডেভেলপমেন্ট শিখে মার্কেটপ্লেস থেকে ইনকাম শুরু করুন আপনিও! কোর্সটি
            করার জন্য পূর্ব কোডিং নলেজ না থাকলেও কোন সমস্যা নেই; কোর্সটিকে
            সাজানো হয়েছে একদম বিগিনার ফ্রেন্ডলি ওয়েতে, জয়েন করতে পারবেন ০.০
            বিগিনাররাও।
          </p>
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
