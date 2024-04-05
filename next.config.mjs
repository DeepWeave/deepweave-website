/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	async redirects() {
		return [
			{
				source: "/ContactRedirect",
				destination: "https://forms.gle/RYCHQLb2PXkytucZA",
				permanent: false,
				basePath: false,
			},
		];
	},
};

export default nextConfig;
