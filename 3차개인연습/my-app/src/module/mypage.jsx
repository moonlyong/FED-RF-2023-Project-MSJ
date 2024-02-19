import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { MyList } from "./mylist";

export function MyRouterPage() {
	return (
		<div>
			<section className="info-box">
			<MyList />
			<Outlet />
				<table className="info">
					<thead>
						<tr>
							<th>학위</th>
							<th>전공</th>
							<th>학교</th>
							<th>졸업년도</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>학위</strong>
							</td>
							<td>전공</td>
							<td>학교</td>
							<td>졸업년도</td>
						</tr>
						<tr>
							<td>
								<strong>학위</strong>
							</td>
							<td>전공</td>
							<td>학교</td>
							<td>졸업년도</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
}
