import { Link } from "react-router-dom";
import "./index.scss";

const Logo = () => {
	return (
		<section className="logo">
			<div className="logo__wrapper">
				<Link
					to={"/"}
					className="logo__link"
				>
					<span>wagmi</span>
					<span>club</span>
				</Link>
			</div>
		</section>
	);
};

export default Logo;
