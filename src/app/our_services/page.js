import Image from "next/image"

import consultation from "../assets/consultation.png"
import seo from "../assets/seo.png"
import marketing from "../assets/marketing.png"
import development from "../assets/development.png"
import product_dev from "../assets/product_dev.png"
export 
const metadata = {
  title: "Our Services - Advertisee",
  description: "Advertisee - the Home of social media marketing",
};
export default function OurServices () {
    return (
        <div className="text-center">
            <h1 className="text-bold text-[60px] text-slate-700 my-10">Our Services</h1>
            <div className="m-5">
            <Image
          alt=""
          src={consultation}
          width={300}
          height={300}
          className=" w-full h-[200px] my-20 object-contain -z-30  "
        />
                <h2 className="text-bold text-[28px]">Free Consultation</h2>
                <p className="text-[20px]">

                Here we have a meeting, through chat or video call where we talk about your business,
    what product or service your offer, your previous efforts
    to reach clients online and what existing online presence you have. We then tell you how we
    can solve your marketing problems giving you a practical idea of how the marketing campaign
    would work. We might also advice you on other matters that we may not have the solution for.
                </p>
            </div>
            <div className="m-5">
            <Image
          alt=""
          src={seo}
          width={300}
          height={300}
          className=" w-full h-[200px] my-20 object-contain -z-30  "
        />
                <h2 className="text-bold text-[28px]">Search Engine Optimization</h2>
                <p className="text-[20px]">
                Here we use our marketing strategies to get you better search engine views, so whenever a person searchs
    for something related to your business, your site shows up as one of the top results. We only offer SEO on
    Google
                </p>
            </div>
            <div className="m-5">
            <Image
          alt=""
          src={marketing}
          width={300}
          height={300}
          className=" w-full h-[200px] my-20 object-contain -z-30  "
        />
                <h2 className="text-bold text-[28px]">Social Media Advertising</h2>
                <p className="text-[20px]">
                Here we use social media platforms to draw traffic to your business site. By using picture and video ads
    and reaching out to people who need the service through social media pages, groups and channels. Your client
    list is sure to go up.
                </p>
            </div>
            <div className="m-5">
            <Image
          alt=""
          src={development}
          width={300}
          height={300}
          className=" w-full h-[200px] my-20 object-contain -z-30  "
        />
                <h2 className="text-bold text-[28px]">Business Site development</h2>
                <p className="text-[20px]">
                A business Site is very important for any business trying to get customers online. This is where customers
    who click your ads are redirected to, potential customers who search on google are redirected to. It is 
    highly important.
                </p>
            </div>
            <div className="m-5">
            <Image
          alt=""
          src={product_dev}
          width={300}
          height={300}
          className=" w-full h-[200px] my-20 object-contain -z-30  "
        />
                <h2 className="text-bold text-[28px]">Software product development</h2>
                <p className="text-[20px]">
                Here we lend our resources to businesses who wish to build software products like ecommerce or fintech apps and 
    websites. We lend our developers and designers to get the best product for you, all you have to do is focus on
    your idea and growth. Good for startups who are having difficulty getting developers for their business.
                </p>
            </div>
        </div>
    )
}