"use client"
import { useRouter } from 'next/navigation';


function HomeContainer() {
   const router = useRouter();
   return router.push(`/hakkimda`);
}

export default HomeContainer