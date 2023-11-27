import { Actions, Bio, ProfileBadges } from "@/components";
import "./page.scss";

const Profile = () => {
	const group = "profile";

	return (
		<section className={`${group}`}>
			<section className={`${group}__wrapper`}>
				<Actions group={`${group}__actions`} />

				<Bio group={`${group}__bio`} />

				<ProfileBadges group={`${group}__badges`} />
			</section>
		</section>
	);
};

export default Profile;
