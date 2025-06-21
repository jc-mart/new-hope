import Image from "next/image";

export default function Footer() {
	const fbPage: string = "https://www.facebook.com/cognewhope";
	const cogPage: string = "https://churchofgod.org/";

	return (
		<footer className="grid-cols-1 md:grid-rows-auto m-2">
			<h3 className="text-center">Quick Links</h3>

			<div className="text-sm">
				<a href={cogPage} className="flex flex-row gap-1 justify-center">
					<Image src='/cog_globe.jpg' width={20} height={20} alt='Church of God logo' />
					Church of God
				</a>

				<a href={fbPage} className="flex flex-row gap-1 justify-center">
					<Image src='/fb_icon.svg' width={20} height={20} alt='Facebook logo'/>
					New Hope
				</a>
			</div>
		</footer>
	)
}