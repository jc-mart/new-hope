import Image from "next/image";

export default function Footer() {
	const fbPage: string = "https://www.facebook.com/cognewhope";
	const cogPage: string = "https://churchofgod.org/";

	return (
		<footer className="flex justify-center text-sm text-gray-500">
			<ul className="mt-4 mb-4">
				<h3 className="text-base text-center">Quick Links</h3>
					<li>
						<a href={cogPage} className="flex flex-row gap-2 mt-1 mb-1">
							<Image src='/cog_globe.jpg' width={20} height={20} alt='Church of God logo' />
							World Ministries
						</a>
					</li>

					<li>
						<a href={fbPage} className="flex flex-row gap-2 mt-1 mb-1">
							<Image src='/fb_icon.svg' width={20} height={20} alt='Facebook logo'/>
							New Hope
						</a>
					</li>
			</ul>
		</footer>
	)
}