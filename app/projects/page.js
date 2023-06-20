import Navbar from "/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="w-full h-64 ">
          <Image src="/images/golfImages/Feed.png" alt="Image" width={200} height={150} objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
