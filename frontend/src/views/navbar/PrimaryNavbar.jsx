import { Logo, Menu } from "../../components";

const PrimaryNavbar = () => {
	return (
		<section className="primaryNav">
			<div className="primaryNav__wrapper">
				<Logo />

				<Menu />
			</div>
		</section>
	);
};

export default PrimaryNavbar;
