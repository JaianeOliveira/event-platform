import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
	query lessons {
		lessons {
			id
			title
		}
	}
`;

type Lesson = {
	id: string;
	title: string;
};

const App = () => {
	const { data, loading } = useQuery(GET_LESSONS_QUERY);

	if (loading) {
		return <h1>Carregando</h1>;
	}
	return (
		<div>
			<ul>
				{data?.lessons.map((lesson: Lesson) => (
					<li key={lesson.id}>{lesson.title}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
