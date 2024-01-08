import { useEffect } from "react";
import { SwiperFunctions } from "../func/playerinfo";

export function PlayerInfo() {
	useEffect(() => {
        import("../css/playerinfo.css")
        SwiperFunctions.setupSwiper()
        
	}, []); /////// useEffect ///////////
	return (
		<>
			<div class="wrap">
				<section class="content">
					<div class="mlogo">
						<img src="./image/logo/monsters.png" alt="" />
					</div>
					<div class="cube"></div>
				</section>
			</div>
		</>
	);
}
