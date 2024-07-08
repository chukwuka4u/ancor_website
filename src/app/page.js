import Image from "next/image";
import Button from "./utils/button.jsx";

import landing_image from "./assets/landing_image.png"
import goals from "./assets/goals.jpg"
import development from "./assets/development.png"
import marketing from "./assets/marketing.png"
import innovation from "./assets/innovation.png"
import creativity from "./assets/creativity.png"
import layer from "./assets/layer.png"
import linkedIn from "./assets/linkedIn.png"
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import instagram from "./assets/instagram.png"
import frame_132 from "./assets/frame_132.png"
import frame_133 from "./assets/frame_133.png"
import profile from "./assets/profile.jpg"
import Slider from "./utils/carousel.jsx";

export default function Home() {
  return (
    <main className="select-none">
      
      <div className="w-full h-screen">
        <div className="w-1/4 h-1/4 bg-default absolute top-0 right-0 mt-[50px] -z-20 lg:w-[300px] lg:h-[280px] lg:left-[10%]"></div>
        <div className="w-1/3 h-2/3 bg-default absolute top-0 left-0 mt-[50px] -z-20 lg:w-[300px] lg:h-[280px] lg:left-[10%]"></div>
        <div className="w-1/4 h-1/4 bg-default absolute bottom-0 left-0 mt-[50px] -z-20 lg:w-[300px] lg:h-[280px] lg:left-[10%]"></div>
        <div className="w-1/3 h-1/3 bg-default absolute bottom-0 right-0 mt-[50px] -z-20 lg:w-[300px] lg:h-[280px] lg:left-[10%]"></div>
        <Image
          alt=""
          src={landing_image}
          width={300}
          height={300}
          className=" w-full h-[200px] my-20 object-contain -z-30 lg:absolute lg:top-[20%] lg:right-[20%] lg:w-[300px]"
        />
        
        <div className="w-full mx-9">
        <h1 className="text-[54px] max-sm:text-[30px] text-wrap tracking-tight"><span className="font-bold max-sm:text-[40px] text-[64px]"> We bring the clients,</span><br/> you deliver the service/product</h1>
        <p className="text-[16px] font-light tracking-tight w-2/3">
          We provide Expert Social Media Marketing solutions for your Brand. <br/>
          Combining our Experience and our passion for results. <br/>
          We get the job done Efficiently and Creatively.
        </p>
        <Button link={"/our_services"}/> 
        <p>simply email us: <span className="text-[30px]">advertiseeagency@gmail.com</span><br/> 
          to get started
        </p>
        </div>
      </div>

      <div className="bg-black lg:flex pb-3 lg:flex-row lg:justify-between lg:my-[15%] lg:ml-[10%] lg:h-[50%]">
        <div className="w-full h-[70px] bg-default lg:w-[230px] lg:h-[50%]" ></div>
        <Image 
        alt=""
            src={goals}
            width={500}
            height={300}
            className="w-full h-[300px] object-cover lg:my-[5%] lg:-ml-[30%] lg:mr-5 lg:w-[500px]"
          />
          <div>
        <div className=" flex flex-row pt-10 px-3">
          <div className="flex flex-row mr-2 pt-4"><div className="h-1 w-[50px] bg-default"></div><div className="h-1 w-[20px] bg-white"></div></div>
          <h1 className="font-mono tracking-loose text-white text-[25px] ml-10 pb-5">OUR GOALS</h1>
        </div>
        <p className="text-white text-[20px] mx-3">
          To help our clients gain competitive advantage by using the power of social media to
          reach more potential customers increasing customer reach and brand awareness
        </p>
        <Button link={"/about_us"}/>
          </div>
      {/*desktop view piece of ui */}
      
      <div className="bg-default lg:w-[150px] lg:h-auto" ></div>
      </div>
      <div className="lg:flex p-auto">
      <div className="h-[300px] bg-white px-3">
      <div className=" flex flex-row pt-10 px-3">
          <div className="flex flex-row mr-2 pt-4"><div className="h-1 w-[50px] bg-default"></div><div className="h-1 w-[20px] bg-black"></div></div>
          <h1 className="font-mono tracking-loose text-[25px] ml-10 pb-5">OUR SERVICES</h1>
        </div>
        <h1 className="text-[40px]">The leading experts in marketing today</h1>
        <p className="text-[20px]">Some of the services we offer include</p>
      </div>
      <div className="grid grid-rows-2 gap-1 grid-flow-col max-lg:hidden">
      <div className="w-[250px] h-[250px] flex flex-col justify-between m-5">
            <Image 
            alt=""
              src={development}
              width={90}
              height={90}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Development
            </h1>
            <p className="text-[15px]">
              we can build a unique and distinguish landing website so your online clients can know you and with our team 
              of expert developers can also aid in building your software products up to excellent quality.
            </p>
          </div>
          <div className="w-[250px] h-[250px] self-end flex flex-col justify-between m-5">
            <Image 
            alt=""
              src={marketing}
              width={90}
              height={90}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Marketing
            </h1>
            <p className="text-[15px]">
            Increase sales with a full-funnel advertising approach. Custom campaigns designed and optimized for all
            platforms, made on evidence-based results.
            </p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col justify-between m-5">
            <Image 
            alt=""
              src={innovation}
              width={90}
              height={90}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Innovation
            </h1>
            <p className="text-[15px]">
            Our proven step-by-step process offers a competitive edge. Innovative strategies created and tailored for you, improve your brand's position
            through internal and external environment analysis
            </p>
          </div>
          <div className="w-[250px] h-[250px] self-end flex flex-col justify-between m-5">
            <Image 
            alt=""
              src={creativity}
              width={90}
              height={90}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Creativity
            </h1>
            <p className="text-[15px]">
              our creativity sets us apart. We will provide you with quality graphic designs, Video editing, ad creation, UI/UX.
            </p>
          </div>
      </div>
      </div>
      <div className="flex flex-col lg:hidden">
          <div className="w-[250px] flex flex-col justify-between m-5">
            <Image
            alt="" 
              src={development}
              width={180}
              height={180}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Development
            </h1>
            <p className="text-[15px]">
            we can build a unique and distinguish landing website so your online clients can know you and with our team 
            of expert developers can also aid in building your software products up to excellent quality.
            </p>
          </div>
          <div className="w-[250px] self-end flex flex-col justify-between m-5">
            <Image 
            alt=""
              src={marketing}
              width={180}
              height={180}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Marketing
            </h1>
            <p className="text-[15px]">
            Increase sales with a full-funnel advertising approach. Custom campaigns designed and optimized for all
            platforms, made on evidence-based results.
            </p>
          </div>
          <div className="w-[250px] flex flex-col justify-between m-5">
            <Image 
            alt=""
              src={innovation}
              width={180}
              height={180}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Innovation
            </h1>
            <p className="text-[15px]">
            Our proven step-by-step process offers a competitive edge. Innovative strategies created and tailored for you, improve your brand's position
            through internal and external environment analysis
            </p>
          </div>
          <div className="w-[250px] self-end flex flex-col justify-between m-5">
            <Image
            alt="" 
              src={creativity}
              width={180}
              height={180}
              className="object-contain"
            />
            <h1 className="text-[20px]">
              Creativity
            </h1>
            <p className="text-[15px]">
            our creativity sets us apart. We will provide you with quality graphic designs, Video editing, ad creation, UI/UX.
            </p>
          </div>
      </div>
      <div className="md:flex">
      <div className="w-full h-[184px] bg-black flex flex-row justify-between items-center mt-5 px-5 text-white md:w-[844px] md:h-[844px] md:flex-col md:px-0">
        <Image
        alt=""
          src={frame_132}
          width={844}
          height={400}
          className="max-md:hidden w-full h-[400px] object-cover"
        />
        <div className="md:flex md:justify-between md:mx-5">
         <div className="md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="text-[50px] font-mono font-light text-default">0</h1>
          <h1 className="text-[16px] font-mono font-medium">CLIENTS</h1>
         </div>
          <div className="max-md:hidden flex justify-between">
            <div className="w-1 h-full bg-default"></div>
            <p>
              We help a wide variety of clients across various sectors mainly in fashion and ecommerce across the globe
            </p>
          </div>
        </div>
        <div className=" md:flex md:justify-between md:mx-5">
         <div className="md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="text-[50px] font-mono font-light text-default">0</h1>
          <h1 className="text-[16px] font-mono font-medium">DEALS</h1>
         </div>
         <div className="max-md:hidden flex justify-between">
            <div className="w-1 h-full bg-default"></div>
            <p>We deal fairly with our clients and highly value communication to ensure that you keep doing business with us</p>
          </div>
        </div>
        <div className=" md:flex md:justify-between md:mx-5">
         <div className="md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="text-[50px] font-mono font-light text-default">1</h1>
          <h1 className="text-[16px] font-mono font-medium">SITES</h1>
         </div>
         <div className="max-md:hidden flex justify-between">
            <div className="w-1 h-full bg-default"></div>
            <p>We have helped businesses build landing websites and software products mainly ecommerce stores in different countries.</p>
          </div>
        </div>
       
      </div>
      <div className="max-md:hidden bg-default text-white w-[844px] h-[744px] flex flex-col justify-between">
        <h1 className="font-extralight text-[40px] px-3">Let us advertise your business</h1>
        <p className="font-light text-[20px] px-3">
        We know how important social media marketing is to every brand's well being. At the same time we also
                    know how difficult it can be to focus on strategy when you have sales to make. Let us anchor your business and help you reach vast amount of potential customers
          </p>
        <Image
        alt=""
          src={frame_133}
          width={844}
          height={400}
          className="w-full h-[400px] object-cover"
        />
      </div>

      </div>
      <div className="w-full mb-8 relative">
        <Image
        alt="" 
        src={layer}
        width={400}
        height={400}
        className="w-full h-[400px] object-contain -z-1 lg:hidden"
        />
        {/* testimonials */}
        <div className="absolute top-[1%] lg:hidden">
           <Slider />
        </div>
        <div className="max-md:hidden">

        <div className="grid grid-rows-2 gap-1 grid-flow-col mt-2np0 ml-20 max-lg:hidden">

<div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
      <div className="flex gap-8 items-center h-[65px]">
          <Image 
          alt=""
            src={profile}
            width={62}
            height={62}
            className="w-[62px] h-[62px] object-contain round"
            />
         <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-default"></div><div className="h-1 w-[122px] bg-black"></div></div>
     </div>
     <p>
            Advertisee really takes our sales goals to heart. They are
            excellent at using their ability to work towards our goals
            of increased sales and brand awareness
            </p>
          <h1>SHOPBACK - Australia</h1>
</div>
  <div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
      <div className="flex gap-8 items-center h-[65px]">
          <Image 
          alt=""
            src={profile}
            width={62}
            height={62}
            className="w-[62px] h-[62px] object-contain round"
            />
         <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-default"></div><div className="h-1 w-[122px] bg-black"></div></div>
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
          alt=""
            src={profile}
            width={62}
            height={62}
            className="w-[62px] h-[62px] object-contain round"
            />
         <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-default"></div><div className="h-1 w-[122px] bg-black"></div></div>
     </div>
     <p>
            Advertisee was so easy to work with as they developed a realistic game plan
            and provided a suitable roadmap to achieve our objectives. we saw
            immediate results on our online sales.
          </p>
          <h1>TSHOP - Nigeria</h1>
</div>
  <div className="flex flex-col justify-between h-[250px] w-[400px] py-[10px]">
      <div className="flex gap-8 items-center h-[65px]">
          <Image 
          alt=""
            src={profile}
            width={62}
            height={62}
            className="w-[62px] h-[62px] object-contain round"
            />
         <div className="flex flex-row mr-2"><div className="h-1 w-[60px] bg-default"></div><div className="h-1 w-[122px] bg-black"></div></div>
     </div>
     <p>
            Advertisee helped build our platform in it's earliest stage. They are truly the ones
            behind our company's success.
          </p>
          <h1>FLEXSTORE - US</h1>
</div>
</div>

        </div>
      </div>
      {/*footer */}
      <div className="w-full px-[15%]  bg-black">
          <div className="flex justify-between py-[80px]">
            <Image
            alt=""
              src={linkedIn}
              width={20}
              height={20}
              className=""
            />
            <Image
            alt=""
              src={facebook}
              width={20}
              height={20}
              className=""
            />
            <Image
            alt=""
              src={twitter}
              width={20}
              height={20}
              className=""
            />
            <Image
            alt=""
              src={instagram}
              width={20}
              height={20}
              className=""
            />
          </div>
          <p className="text-white">Contact Us</p>
          <p className="text-white">+234 7035710986<br /> advertiseeagency@gmail.com</p>
          <div className="py-[50px]">
           <p className="text-white">illustrations by: Streamline</p>
          </div>
      </div>
    </main>
  );
}
