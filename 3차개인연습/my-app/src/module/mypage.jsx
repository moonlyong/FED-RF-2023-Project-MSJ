import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { MyList } from "./mylist";

export function MyRouterPage() {
	return (
		<div>
			<section className="info-box">
			<MyList />
			<Outlet />
				
			</section>
		</div>
	);
}
