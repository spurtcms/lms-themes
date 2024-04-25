import Post from "@/Components/Post";


export default async function PostPage({params}) {
 
  return (
   <>
   <Post params={params}/>
   </>
  )
}
