import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => {
	return (
		<Layout title={router.query.title}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem voluptas porro expedita nemo
				nisi nulla, accusamus at cum est iure qui accusantium ducimus magni officiis maiores? Fuga, quo neque.
			</p>
		</Layout>
	);
};

export default withRouter(Post);
