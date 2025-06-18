import Image from "next/image";

export default function Home() {
  const fbLive: string = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcognewhope%2Fvideos%2F1222475879385691%2F&width=1280";

  return (
    <div>
      <main>
        <div className="flex justify-center gap-2">
          <Image src='/cog_black.jpg' width={25} height={25} alt='Church of God Logo' />
        </div>

        <div className="flex flex-col text-center border-4 border-yellow-500 bg-[url(/church.jpg)]">
          {/* Image will go behind these elements */}
          <div className="text-xl md:text-2xl">New Hope Church of God</div>
          <div>This is some text that'll represent the verse of the day</div>
        </div>

        <div className="flex flex-row justify-center text-center">
          <div className="basis-1/5 border-4 border-blue-500"></div>
          
          <div className="basis-3/5 border-4 border-red-500">
            <div className="flex flex-col">

              <div className="border-2 border-dashed border-black">
                {/* Move this to a server action */}
                <h2>Check out our latest FB livestream</h2>
                <div className="flex justify-center border-none overflow-hidden ">
                  <iframe src={fbLive} allowFullScreen width="100%" height="100%" />
                </div>
              </div>

              <div>
                <h2>Come visit us in person</h2>
                {/* Google Maps API will go here */}
                <h3>Service hours</h3>
              </div>

            </div>
          </div>

          <div className="basis-1/5 text-left border-4 border-green-500">Announcements</div>

        </div>
      </main>
    </div>
  );
}
