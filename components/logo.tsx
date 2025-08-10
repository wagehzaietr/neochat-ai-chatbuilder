import Image from 'next/image';
import { cn } from '../lib/utils'
import TrueFocus from './ui/TrueFocus';


export const Logo = () => {
    return (
       <h1>
         <TrueFocus/>  
       </h1>
    )
}

export const BotPic = ({ className }: { className?: string }) => {
    return (
      <Image
        src="/botimg1.svg"
        alt="logo"
        width={100}
        height={100}
        className={cn(className)}
      />
    )
}

