//use the button to route
import Image from "next/image"
import arrow_right from "../assets/fi_arrow-right.png"

const Button = () => {
    return(
        <div className="flex flex-row justify-center text-white text-[20px] h-[56px] w-[165px] bg-slate-500 text-center py-2 mt-12 mx-auto">
            view more
            <Image
                src={arrow_right}
                width={20}
                height={5}
                className="object-contain ml-1 mb-1"
            />
        </div>
    )
} 

export default Button;