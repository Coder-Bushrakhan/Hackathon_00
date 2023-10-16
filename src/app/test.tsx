
"use client"
import images from 'next/image'
import { CldUploadButton, CldImage } from "next-cloudinary"
// import { useState } from 'react';
import { View } from './view';

interface uploadImage {
    event: "success";
    info: { public_id: string };
}
export default function Test() {
    // const [imageId,setImageId]=useState("cld-sample-4")
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            {/* <CldUploadButton 
uploadPreset="ekwckmd4"
onUpload = {(result,) => {
    let res = result as uploadImage
    setImageId(res.info.public_id);
}}
/> */}

            <View />

            {/*view image*/}
            {/* <CldImage
  width="400"
  height="400"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/> */}

        </main>
    )
}