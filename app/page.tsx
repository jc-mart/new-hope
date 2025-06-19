import Image from "next/image";
import { hostGrotesk, lusitana } from "./ui/fonts";
import Footer from "./ui/footer";

export default function Home() {
  // TODO: Fetch the latest recorded broadcast if not live.
  const fbLive: string = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcognewhope%2Fvideos%2F1222475879385691%2F&width=1280";
  const gMaps: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.5758341756728!2d-87.71748512357419!3d41.83743096795906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e326ad5253eef%3A0x1e93f44dae8733ae!2s3046%20S%20Central%20Park%20Ave%2C%20Chicago%2C%20IL%2060623!5e0!3m2!1sen!2sus!4v1750353913929!5m2!1sen!2sus";

  return (
    <div className={`${hostGrotesk.className}`}>
      <main>
        <div className="flex justify-center mt-1 mb-1">
          <Image src='/cog_black.jpg' width={25} height={25} alt='Church of God Logo' />
        </div>

        <div className={`${lusitana.className} flex flex-col text-center text-shadow-lg/100 text-white place-content-center bg-[url(/church.jpg)] w-full h-[200px] bg-cover bg-center bg-no-repeat bg-blend-darken mb-8 md:h-[400px]`}>
          <h1 className="text-3xl md:text-5xl">New Hope Church of God</h1>
          <h3>This is some text that'll represent the verse of the day</h3>
        </div>

        <div className="flex flex-row justify-center text-center">
          <div className="basis-1/5 border-4 border-blue-500 hidden md:block"></div>
          
          <div className="basis-full md:basis-3/5 pl-1 pr-1 md:pl-4 md:pr-4 border-4 border-red-500">
            <div className="flex flex-col">

              <div className="aspect-video">
                {/* Move this to a server action */}
                <h2 className="text-l md:text-xl">Check out our latest FB livestream</h2>
                <iframe src={fbLive} allowFullScreen className="relative w-full h-full"/>
              </div>

              <h2 className="text-l md:text-xl">Come visit us in person</h2>
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                <iframe src={gMaps} className="relative w-full h-80 md:h-75"/>
                <h3>Located at</h3>
                <h3>3046 S. Central Park Ave., Chicago, IL, 60623</h3>
                </div>

                <div>
                  <h3>Service hours</h3>
                  <p>Sunday: 10:00 A.M.</p>
                  <p>Wednesday: 7:00 P.M.</p>
                </div>
              </div>

            </div>
          </div>

          <h2 className="text-m md:text-l basis-1/5 text-left border-4 border-green-500 hidden md:block">Announcements</h2>

        </div>
      </main>

      <Footer />
    </div>
  );
}
