import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex justify-center gap-2">
          <Image src='/cog_black.jpg' width={25} height={25} alt='Church of God Logo' />
        </div>

        <div className="flex flex-col text-center">
          {/* Image will go behind these elements */}
          <div className="text-xl md:text-2xl">New Hope Church of God</div>
          <div>This is some text that'll represent the verse of the day</div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="basis-4/5 text-center">
            <div className="flex flex-col text-center">

              <div>
                <h2>Check out our latest FB livestream</h2>
                {/* Embed latest FB live video */}
              </div>

              <div>
                <h2>Come visit us in person</h2>
                {/* Google Maps API will go here */}
                <h3>Service hours</h3>
              </div>

            </div>
          </div>

          <div className="basis-1/5 text-left">Announcements</div>

        </div>
      </main>
    </div>
  );
}
