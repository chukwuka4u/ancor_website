//use the button to route
import Image from "next/image"
import Link from "next/link"
import arrow_right from "../assets/fi_arrow-right.png"

const Button = ({link}) => {
    return(
        <Link href={link}>
            <div className="flex flex-row justify-center text-white text-[20px] h-[56px] w-[165px] bg-default text-center py-2 mt-12">
                 learn more
                <Image
                alt=""
                    src={arrow_right}
                    width={20}
                    height={5}
                    className="object-contain ml-1 mb-1"
                />
            </div>
        </Link>
    )
} 

export default Button;