import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = ({ slug, title }) => (
	<li>
		<Link as={`/${slug}`} href={`/post?title=${title}`}>
			{title}
		</Link>
	</li>
);

export default () => {
	return (
		<Layout title='My Blog'>
			<PostLink slug='react-post' title='React Post' />
			<PostLink slug='nextjs-post' title='NextJs Post' />
		</Layout>
	);
};
