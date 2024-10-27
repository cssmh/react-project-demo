// ostad course design from WordPress Theme Development
// Link: https://ostad.app/course/wordpress-theme-development

const Ostad = () => {
    return (
      <div>
        <h1 className="text-center bg-[#12b76a] text-white p-2">
          WP25 প্রোমো এপ্লাই করলে ২৫% ডিসকাউন্ট আর বাকি ১ দিন এপ্লাই করুন
        </h1>
        <div className="flex">
          {/* Left Side Content */}
          <div className="w-[60%] p-5">
            <h1 className="text-5xl font-bold mb-4">
              WordPress Theme Development
            </h1>
            <p className="mb-6 text-sm">
              বিশ্বের সবচেয়ে জনপ্রিয় কন্টেন্ট ম্যানেজমেন্ট সিস্টেম ওয়ার্ডপ্রেস
              থিম ডেভেলপমেন্ট শিখে মার্কেটপ্লেস থেকে ইনকাম শুরু করুন আপনিও!
              কোর্সটি করার জন্য পূর্ব কোডিং নলেজ না থাকলেও কোন সমস্যা নেই;
              কোর্সটিকে সাজানো হয়েছে একদম বিগিনার ফ্রেন্ডলি ওয়েতে, জয়েন করতে
              পারবেন ০.০ বিগিনাররাও।
            </p>

            {/* Placeholder for sliding text */}
          </div>

          {/* Right Side Fixed Section */}
          <div className="w-[40%] fixed right-0 top-120 h-full bg-gray-100 p-8">
            <div className="mb-6">
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/Uox3eCkzXPI?si=1ImU7VIJr4hWTZnk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex justify-center gap-2 text-sm">
              <p className="text-lg font-bold mb-2 bg-[#fff1e9]">৪ দিন বাকি</p>
              <p className="text-lg font-bold mb-2 bg-[#f0e1fb]">৮১ সিট বাকি</p>
            </div>
            <div className="text-xl mb-4">Price: ৳XXXX</div>
            <button className="bg-[#12b76a] text-white px-4 py-2 rounded">
              Buy Course
            </button>
            <div className="mb-6">
              <p className="text-xl font-semibold">এই কোর্সে আপনি পাচ্ছেন:</p>
              <ul className="list-disc list-inside">
                <li>একদম ব্যাসিক HTML, CSS, JavaScript থেকে শুরু</li>
                <li>ওয়ার্ডপ্রেসের জন্য প্রয়োজনীয় PHP</li>
                <li>হেডার, ফুটার, ব্লগ লেআউট</li>
                <li>এলিমেন্টর ও অ্যাডভান্সড এলিমেন্টর উইজেটস</li>
                <li>টেস্টিমোনিয়াল, ব্লগ, পোর্টফোলিও পেইজ তৈরি</li>
                <li>এবাউট মি পেইজ, সার্ভিস পেইজ</li>
                <li>Woocommerce ব্যাসিক টু এডভান্সড</li>
                <li>থিমফরেস্ট ও মার্কেটপ্লেসের জন্য ইনকাম গাইডলাইন</li>
                <li>৪৬ টি লাইভ ক্লাস</li>
                <li>২০০+ প্রিরেকর্ডেড ভিডিও</li>
                <li>দিনে ১ বেলা সাপোর্ট ক্লাস</li>
                <li>সকল লাইভ ক্লাস রেকর্ডিং এর লাইফটাইম এক্সেস</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Ostad;