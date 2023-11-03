import React from "react";
import { Verified } from "../../../assets/icons";
import "./index.scss";

const PoweredBy = ({ group }) => {
	function RenderButtons() {
		return (
			<div className={`${group}__powered-buttons`}>
				<button>
					<span>
						<img src="/Frencansto.jpg" />
					</span>
					<span>@elonmusk</span>
					<span>
						<Verified />
					</span>
				</button>

				<button>
					<span>
						<img src="/defi_pfp.jpg" />
					</span>
					<span>@defiprince_</span>
				</button>
			</div>
		);
	}

	return (
		<>
			<section className={`${group}__powered`}>
				<div className={`${group}__powered-wrapper`}>
					<div className={`${group}__powered-top`}>
						<RenderButtons />

						<div className={`${group}__powered-profile`}>
							profile component
						</div>
					</div>
					<div className={`${group}__powered-bottom`}>powered by</div>
				</div>
			</section>
		</>
	);
};

export default PoweredBy;
