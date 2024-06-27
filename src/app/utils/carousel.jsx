"use client"
import Image from "next/image"
import profile from "../assets/profile.jpg"

var $ = require('jquery');
import image from "../assets/development.png"

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
  }
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
  };
  
  export default function Slider() {
    return (
      <div className=" flex items-center h-[500px] w-[400px] mx-auto ">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
              <div className="flex gap-8 items-center h-[65px]">
                  <Image 
                    src={profile}
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px] object-contain round"
                    />
                 <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-slate-500"></div><div className="h-1 w-[122px] bg-black"></div></div>
             </div>
          <p>
            Ancor really takes our sales goals to heart. They are
            excellent at using their ability to work towards our goals
            of increased sales and brand awareness
            </p>
          <h1>SHOPBACK - Australia</h1>
        </div>
          <div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
              <div className="flex gap-8 items-center h-[65px]">
                  <Image 
                    src={profile}
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px] object-contain round"
                    />
                 <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-slate-500"></div><div className="h-1 w-[122px] bg-black"></div></div>
             </div>
          <p>
            We exceeded our fundraising goal and gained new donors and significantly increased awareness of our
            organization. Workflow was seamless we worked with the team remotely
             and they always turn up.
            </p>
          <h1>DONATENOW - Nigeria</h1>
        </div>
          <div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
              <div className="flex gap-8 items-center h-[65px]">
                  <Image 
                    src={profile}
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px] object-contain round"
                    />
                 <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-slate-500"></div><div className="h-1 w-[122px] bg-black"></div></div>
             </div>
          <p>
            Ancor was so easy to work with as they developed a realistic game plan
            and provided a suitable roadmap to achieve our objectives. we saw
            immediate results on our online sales.
          </p>
          <h1>TSHOP - Nigeria</h1>
        </div>
          <div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
              <div className="flex gap-8 items-center h-[65px]">
                  <Image 
                    src={profile}
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px] object-contain round"
                    />
                 <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-slate-500"></div><div className="h-1 w-[122px] bg-black"></div></div>
             </div>
          <p>
            Ancor helped build our platform in it's earliest stage. They are truly the ones
            behind our company's success.
          </p>
          <h1>FLEXSTORE - US</h1>
        </div>
        </OwlCarousel>
      </div>
    );
    }
