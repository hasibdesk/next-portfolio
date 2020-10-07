import Link from 'next/link';
import { Component } from 'react';
import Layout from '../components/Layout';

export default class About extends Component {
	static async getInitialProps() {
		const res = await fetch('https://api.github.com/users/hasibdesk');
		const data = await res.json();

		return { user: data };
	}
	render() {
		return (
			<Layout title='About'>
				<img src={this.props.user.avatar_url} alt='' />
				<h1>{this.props.user.name} </h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, libero iure adipisci necessitatibus
					quia odit in culpa perspiciatis laborum deleniti reiciendis ducimus vero, dolor inventore obcaecati
					excepturi officia provident ullam.
				</p>
			</Layout>
		);
	}
}
