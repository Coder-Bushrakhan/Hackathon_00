"use client"
import {CldUploadButton,CldImage} from "next-cloudinary"

export default function View ({ src }: {src: string}) {
    return (
      
<CldImage
  width="400"
  height="400"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>

    )
}