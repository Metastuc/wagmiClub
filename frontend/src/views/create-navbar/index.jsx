import './index.scss';
import { Logo } from '../../components';

const CreateNavUI = () => {
    return (
        <section className="create-nav-ui navbar">
            {/* logo-container */}
            <div>
                <Logo />
            </div>

            <div>
                profile component
            </div>
        </section>
    );
};

export default CreateNavUI;