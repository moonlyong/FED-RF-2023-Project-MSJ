

export function Cell({ ele }) {
	const { title, header, data } = ele;
	return (
		<>
			<thead>
				<h2>{title}</h2>
				<tr>
					{header.map((heading, index) => (
						<th key={index}>{heading}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						{item.map((cell, idx) => (
							<td key={idx}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</>
	);
}
