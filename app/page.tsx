import Image from "next/image";
import { lusitana } from "./ui/fonts";
import Footer from "./ui/footer";

export default function Home() {
  // TODO: Fetch the latest recorded broadcast if not live.
  const fbLive: string = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcognewhope%2Fvideos%2F1408242260301336%2F&width=1920";
  const gMaps: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.5758341756728!2d-87.71748512357419!3d41.83743096795906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e326ad5253eef%3A0x1e93f44dae8733ae!2s3046%20S%20Central%20Park%20Ave%2C%20Chicago%2C%20IL%2060623!5e0!3m2!1sen!2sus!4v1750353913929!5m2!1sen!2sus";

  return (
    <div>
      <main>
        
        <div className="flex justify-center mt-1 mb-1">
          <Image src='/cog_black.jpg' width={25} height={25} alt='Church of God Logo' />
        </div>

        <div className={`${lusitana.className} flex flex-col text-center text-shadow-lg/100 text-white place-content-center bg-[url(/church.jpg)] w-full h-[200px] bg-cover bg-center bg-no-repeat bg-blend-darken md:h-[400px]`}>
          <h1 className="text-4xl md:text-6xl">New Hope Church of God</h1>
          {/* TODO: Code up a verse of the day fetcher */}
          {/* This heading will hold the verse of the day */}
          <h3></h3>
        </div>

        <div className="flex md:flex-row flex-col-reverse justify-center text-center mt-4 mb-4">
          <div className="basis-1/5 hidden md:block"></div>
          
          <div className="basis-full md:max-w-[750px] md:pl-4 md:pr-4">
            <div className="flex flex-col">
              <div className="aspect-video">
                {/* Move this to a server action */}
                <h2 className="text-xl md:text-3xl m-5">Latest Sunday Service Broadcast</h2>
                <hr className="mb-4 ml-24 mr-24" />
                <iframe src={fbLive} allowFullScreen className="relative w-full h-full"/>
              </div>

              <h2 className="text-xl md:text-3xl mb-4 mt-8">Visit Us</h2>
              <hr className="mb-4 ml-24 mr-24" />

              <div className="grid md:grid-cols-3 gap-2">
                <div className="md:col-span-2">
                  <h2 className="text-l md:text-xl">Located At</h2>
                  <iframe src={gMaps} className="relative w-full h-80 md:h-75 md:pr-4 md:pl-4 pr-8 pl-8"/>
                  <h3>3046 S. Central Park Ave., Chicago, IL, 60623</h3>
                </div>

                <div>
                  <h3 className="text-l md:text-xl">Services</h3>
                  <div className="text-center md:text-left">
                    <p className="underline">Sundays at 10:00 A.M.</p>
                    <ul className="list-disc ml-4 list-inside">
                      <li>Worship & Sermon</li>
                    </ul>
                    <p className="underline">Wednesdays at 7:00 P.M.</p>
                    <ul className="list-disc ml-4 list-inside">
                      <li>Bible Study</li>
                    </ul>
                  </div>
                </div>
              </div>

          </div>
        </div>

          {/* This will hold the announcements */}
          {/* Hidden attribute hides this element */}
          <h2 className="text-m md:text-l basis-1/5 text-left hidden md:block"></h2>

        </div>
      </main>

      <Footer />
    </div>
  );
}
