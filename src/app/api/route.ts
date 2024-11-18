export async function GET(){
  return new Response(JSON.stringify({message:'Hello world'}),{
    headers:{
      'Cache-Control':'s-maxage=60, stale-while-revalidate=30'
    }
  })
}