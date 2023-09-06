import DashboardView from './dashboard';

async function getData() {
	const res = await fetch(
		'https://run.mocky.io/v3/902933bb-04e7-4dc9-a64f-f03ef12279e4'
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Home() {
	const data = await getData();
	return (
		<>
			<DashboardView data={data} />
		</>
	);
}
