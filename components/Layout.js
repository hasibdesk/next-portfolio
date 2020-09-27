import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import nProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
	console.log(url);
	nProgress.start();
};
Router.onRouteChangeComplete = (ur) => nProgress.done();
Router.onRouteChangeError = (ur) => nProgress.done();

export default ({ children, title }) => {
	return (
		<div className='root'>
			<Head>
				<title>Next Portfolio</title>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
			</Head>
			<header>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>
				<Link href='/hireme'>
					<a>Hire Me</a>
				</Link>
			</header>
			<h1>{title}</h1>
			{children}
			<footer>Footer</footer>

			<style jsx>
				{`
					.root {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
					}
					header {
						width: 100%;
						display: flex;
						justify-content: space-around;
						padding: 1em;
						font-size: 1.2rem;
						background: indigo;
					}
					header a {
						color: darkgrey;
						text-decoration: none;
					}
					header a:hover {
						color: lightgrey;
						font-weight: bold;
					}

					footer {
						padding: 1em;
					}
				`}
			</style>
		</div>
	);
};
