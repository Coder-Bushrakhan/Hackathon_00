import cloudinary from "cloudinary"
export default async function Link()
{
    let res=await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('public_id','desc')
    .max_results(30)
    .execute()
    .then(result=>console.log(result));
  
    return(
     
        <div></div>
    )
}