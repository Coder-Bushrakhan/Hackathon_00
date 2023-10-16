"use client"
import Upload from "./upload"
import cloudinary from "cloudinary"
const Page = async()=>
{
interface MYImage{
    public_Id:string,

}

   let res=await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .max_results(2)
  .execute()as{resources :MYImage[]}
  console.log("---------------------->>>>",res)
  
  return(
        <div className="flex flex justify-between item-center">
            <h1 className="mb-2 px-4 text-2xl font-bold tracking-tight">
                Gallery
            </h1>

            <Upload/>
        </div>
    )
}
export default Page