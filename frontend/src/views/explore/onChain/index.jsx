import React from "react";
import "./index.scss";
import { medals } from "../../../assets/data";
import { Badge } from "../../../components";

const OnChain = ({ group }) => {
	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<>tabs</>

				<div className={`${group}__medals`}>
					{medals.map((item, index) => {
						return (
							<div key={index}>
								<Badge
									{...item}
									group={""}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default OnChain;
