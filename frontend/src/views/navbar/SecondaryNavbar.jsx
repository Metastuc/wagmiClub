import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../components";

const SecondaryNavbar = () => {
	const location = useLocation();

	return (
		<section className="secondaryNav">
			<div className="secondaryNav__wrapper">
				<Logo />

				<div className="secondaryNav__right-col">
					<div className="secondaryNav__create">
						<Link
							className={
								location.pathname == "/create" ? "active" : null
							}
							to={"/create"}
						>
							create
						</Link>
					</div>

					<div className="secondaryNav__search">search</div>

					<div className="secondaryNav__profile">profile</div>
				</div>
			</div>
		</section>
	);
};

export default SecondaryNavbar;
