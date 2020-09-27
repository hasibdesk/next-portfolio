import Link from 'next/link';
import Layout from '../components/Layout';

export default () => {
	return (
		<Layout title='About'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, libero iure adipisci necessitatibus quia
				odit in culpa perspiciatis laborum deleniti reiciendis ducimus vero, dolor inventore obcaecati excepturi
				officia provident ullam.
			</p>
			<img src='jslogo.png' alt='Js Logo' height='200px' />
		</Layout>
	);
};
