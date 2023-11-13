export const Hamburger = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={14}
				fill="none"
			>
				<rect
					width={20}
					height={2}
					x={5}
					fill="#fff"
					rx={0.2}
				/>
				<rect
					width={25}
					height={2}
					y={6}
					fill="#fff"
					rx={0.2}
				/>
				<rect
					width={20}
					height={2}
					x={5}
					y={12}
					fill="#fff"
					rx={0.2}
				/>
			</svg>
		);
	},
	CloseMenu = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				fill="none"
			>
				<path
					stroke="#A1F294"
					strokeWidth={1.5}
					d="M15.05 3.353a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0Z"
				/>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeWidth={1.5}
					d="M15.05 3.353a13.354 13.354 0 0 0-6.1 0A7.511 7.511 0 0 0 3.353 8.95a13.354 13.354 0 0 0 0 6.1 7.511 7.511 0 0 0 5.597 5.597c2.006.47 4.094.47 6.1 0a7.511 7.511 0 0 0 5.597-5.597"
				/>
				<path
					stroke="#A1F294"
					strokeLinecap="round"
					strokeWidth={1.5}
					d="m13.768 10.232-3.536 3.536m3.536 0-3.536-3.536"
				/>
			</svg>
		);
	},
	Search = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={20}
				height={19}
				fill="none"
			>
				<ellipse
					cx={9.333}
					cy={8.867}
					stroke="#000"
					strokeOpacity={0.5}
					strokeWidth={2}
					rx={6}
					ry={5.7}
				/>
				<path
					stroke="#000"
					strokeLinecap="round"
					strokeOpacity={0.5}
					d="M16.541 15.184c-.041.06-.117.132-.268.275-.151.144-.227.216-.29.255-.37.233-.87.113-1.08-.258a2.186 2.186 0 0 1-.127-.355c-.067-.213-.1-.32-.107-.394-.038-.44.349-.807.812-.771.079.006.19.038.414.101.205.059.307.088.374.122.39.199.517.674.272 1.025Z"
				/>
			</svg>
		);
	},
	Arrow = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				fill="none"
			>
				<path
					stroke="#100F0F"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeOpacity={0.73}
					d="M17.5 12H7M11.088 16 6.5 12l4.588-4"
				/>
			</svg>
		);
	},
	Options = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				fill="none"
			>
				<circle
					cx={12}
					cy={12}
					r={12}
					fill="#fff"
					fillOpacity={0.93}
				/>
				<circle
					cx={7.5}
					cy={12.5}
					r={1.5}
					fill="#100F0F"
					fillOpacity={0.73}
				/>
				<circle
					cx={11.5}
					cy={12.5}
					r={1.5}
					fill="#100F0F"
					fillOpacity={0.73}
				/>
				<circle
					cx={15.5}
					cy={12.5}
					r={1.5}
					fill="#100F0F"
					fillOpacity={0.73}
				/>
			</svg>
		);
	},
	Verified = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={32}
				height={32}
				viewBox="0 0 24 24"
			>
				<path
					fill="#0867BE"
					fillRule="evenodd"
					d="M9.592 3.2a5.574 5.574 0 0 1-.495.399c-.298.2-.633.338-.985.408-.153.03-.313.043-.632.068-.801.064-1.202.096-1.536.214a2.713 2.713 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a5.707 5.707 0 0 1-.068.632c-.07.352-.208.687-.408.985-.087.13-.191.252-.399.495-.521.612-.782.918-.935 1.238-.353.74-.353 1.6 0 2.34.153.32.414.626.935 1.238.208.243.312.365.399.495.2.298.338.633.408.985.03.153.043.313.068.632.064.801.096 1.202.214 1.536a2.713 2.713 0 0 0 1.655 1.655c.334.118.735.15 1.536.214.319.025.479.038.632.068.352.07.687.209.985.408.13.087.252.191.495.399.612.521.918.782 1.238.935.74.353 1.6.353 2.34 0 .32-.153.626-.414 1.238-.935.243-.208.365-.312.495-.399.298-.2.633-.338.985-.408.153-.03.313-.043.632-.068.801-.064 1.202-.096 1.536-.214a2.713 2.713 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536.025-.319.038-.479.068-.632.07-.352.209-.687.408-.985.087-.13.191-.252.399-.495.521-.612.782-.918.935-1.238.353-.74.353-1.6 0-2.34-.153-.32-.414-.626-.935-1.238a5.574 5.574 0 0 1-.399-.495 2.713 2.713 0 0 1-.408-.985 5.72 5.72 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.713 2.713 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a5.707 5.707 0 0 1-.632-.068 2.713 2.713 0 0 1-.985-.408 5.73 5.73 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.713 2.713 0 0 0-2.34 0c-.32.153-.626.414-1.238.935Zm6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0l5.427-5.425Z"
					clipRule="evenodd"
				/>
			</svg>
		);
	},
	Badge = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={16}
				fill="none"
				viewBox="0 0 11 12"
			>
				<path
					fill="#3F4449"
					d="m4.642 7.478 1.202.637L3.404 12l-.7-1.436 1.938-3.086Z"
				/>
				<path
					fill="#3F4449"
					d="M4.642 7.478 3.44 6.84 1 10.725l1.703-.16 1.94-3.087ZM6.358 7.478l-1.202.637L7.596 12l.7-1.436-1.938-3.086Z"
				/>
				<path
					fill="#3F4449"
					d="M6.358 7.478 7.56 6.84 10 10.725l-1.703-.16-1.94-3.087Z"
				/>
				<path
					fill="#E3E3E3"
					stroke="#404040"
					d="M5.5 9.105c2.52 0 4.637-1.887 4.637-4.302C10.137 2.387 8.02.5 5.5.5 2.979.5.862 2.387.862 4.803c0 2.415 2.117 4.302 4.638 4.302Z"
				/>
				<ellipse
					cx={5.499}
					cy={4.803}
					fill="#595959"
					rx={3.23}
					ry={2.968}
				/>
				<mask
					id="a"
					width={7}
					height={7}
					x={2}
					y={2}
					maskUnits="userSpaceOnUse"
					style={{
						maskType: "alpha",
					}}
				>
					<ellipse
						cx={5.672}
						cy={5.12}
						fill="#C28B37"
						rx={3.237}
						ry={2.975}
					/>
				</mask>
				<g mask="url(#a)">
					<ellipse
						cx={5.501}
						cy={4.803}
						fill="url(#b)"
						rx={3.237}
						ry={2.975}
					/>
				</g>
				<path
					fill="url(#c)"
					d="m5.513 2.733.699 1.283 1.396.16-.959.99.26 1.418-1.396-.642-1.396.642.263-1.419-.962-.988 1.397-.16.698-1.284Z"
				/>
				<defs>
					<linearGradient
						id="b"
						x1={5.501}
						x2={5.501}
						y1={1.828}
						y2={7.778}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#9CA1A3" />
						<stop
							offset={1}
							stopColor="#9CA1A3"
							stopOpacity={0}
						/>
					</linearGradient>
					<linearGradient
						id="c"
						x1={5.513}
						x2={5.513}
						y1={2.733}
						y2={6.584}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#F1F5F5" />
						<stop
							offset={0}
							stopColor="#fff"
						/>
						<stop
							offset={1}
							stopColor="#F1F5F5"
						/>
					</linearGradient>
				</defs>
			</svg>
		);
	},
	Medal = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={16}
				fill="none"
				viewBox="0 0 16 24"
			>
				<g
					filter="url(#a)"
					style={{
						mixBlendMode: "luminosity",
					}}
				>
					<path
						fill="#FFEEB0"
						d="M1.472 2.507C1.472 1.674 2.147 1 2.98 1h10.1a1.507 1.507 0 1 1 0 3.013h-.087V2.43H3.066v1.583h-.087a1.507 1.507 0 0 1-1.507-1.506Z"
					/>
					<path
						fill="#C4C7CA"
						d="M1.472 2.696c0-.832.675-1.506 1.507-1.506h10.1a1.507 1.507 0 1 1 0 3.013h-.087V2.619H3.066v1.584h-.087a1.507 1.507 0 0 1-1.507-1.507Z"
					/>
					<path
						fill="#2874BA"
						d="M3.067 2.602h9.924v6.076l-4.962 3.01-4.962-3.01V2.602Z"
					/>
					<mask
						id="b"
						width={11}
						height={10}
						x={3}
						y={2}
						maskUnits="userSpaceOnUse"
						style={{
							maskType: "alpha",
						}}
					>
						<path
							fill="#2874BA"
							d="M3.088 2.601h9.92v6.077l-4.96 3.01-4.96-3.01V2.601Z"
						/>
					</mask>
					<g mask="url(#b)">
						<path
							fill="#747676"
							d="M6.149-1.005h3.799v12.692H6.149z"
						/>
					</g>
					<rect
						width={1.595}
						height={2.349}
						x={7.203}
						y={10.095}
						fill="#C09525"
						rx={0.797}
					/>
					<ellipse
						cx={8}
						cy={17.948}
						fill="url(#c)"
						rx={7}
						ry={6.052}
					/>
					<ellipse
						cx={8.001}
						cy={17.948}
						fill="#705100"
						rx={5.464}
						ry={4.724}
					/>
					<mask
						id="d"
						width={12}
						height={11}
						x={2}
						y={13}
						maskUnits="userSpaceOnUse"
						style={{
							maskType: "alpha",
						}}
					>
						<ellipse
							cx={8.331}
							cy={18.487}
							fill="#C28B37"
							rx={5.477}
							ry={4.735}
						/>
					</mask>
					<g mask="url(#d)">
						<ellipse
							cx={7.999}
							cy={17.949}
							fill="#E3A504"
							rx={5.477}
							ry={4.735}
						/>
					</g>
					<ellipse
						cx={8.073}
						cy={17.982}
						fill="#C18222"
						rx={4.499}
						ry={3.89}
					/>
					<path
						fill="url(#e)"
						stroke="#A9A6A6"
						d="m8.507 14.604-.434-.764-.435.764-.935 1.644-1.868.205-1.046.116.75.738 1.27 1.248-.349 1.799-.182.937.874-.384 1.92-.845 1.921.845.872.383-.18-.935-.345-1.8 1.266-1.248.749-.739-1.045-.115-1.868-.205-.935-1.644Z"
					/>
					<path
						fill="#fff"
						d="M13.039 6.408H3.052V2.613h9.987v3.795Z"
						opacity={0.5}
					/>
				</g>
				<defs>
					<linearGradient
						id="c"
						x1={8}
						x2={8}
						y1={11.896}
						y2={24}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FFE176" />
						<stop
							offset={1}
							stopColor="#FFD12D"
						/>
					</linearGradient>
					<linearGradient
						id="e"
						x1={8.073}
						x2={8.073}
						y1={14.851}
						y2={20.449}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff" />
						<stop
							offset={0}
							stopColor="#FFFFFD"
						/>
						<stop
							offset={1}
							stopColor="#FFE86D"
						/>
					</linearGradient>
					<filter
						id="a"
						width={26.536}
						height={35.536}
						x={0.217}
						y={0.217}
						colorInterpolationFilters="sRGB"
						filterUnits="userSpaceOnUse"
					>
						<feFlood
							floodOpacity={0}
							result="BackgroundImageFix"
						/>
						<feColorMatrix
							in="SourceAlpha"
							result="hardAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						/>
						<feOffset
							dx={5.484}
							dy={5.484}
						/>
						<feGaussianBlur stdDeviation={3.134} />
						<feComposite
							in2="hardAlpha"
							operator="out"
						/>
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
						<feBlend
							in2="BackgroundImageFix"
							result="effect1_dropShadow_613_1495"
						/>
						<feBlend
							in="SourceGraphic"
							in2="effect1_dropShadow_613_1495"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		);
	},
	Location = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={9}
				height={9}
				viewBox="0 0 9 9"
				fill="none"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.25581 3.04101C1.25581 1.34064 2.72991 -1.65939e-08 4.5 -2.73534e-08C6.27009 -3.8113e-08 7.74419 1.34064 7.74419 3.04101C7.74419 4.63637 6.75507 6.50932 5.15921 7.1913C4.74026 7.37034 4.25974 7.37034 3.84079 7.1913C2.24493 6.50932 1.25581 4.63637 1.25581 3.04101ZM4.5 0.627907C3.03344 0.627907 1.88372 1.72916 1.88372 3.04101C1.88372 4.43427 2.76506 6.04876 4.08753 6.61391C4.34888 6.7256 4.65112 6.7256 4.91247 6.61391C6.23494 6.04876 7.11628 4.43427 7.11628 3.04101C7.11628 1.72916 5.96656 0.627907 4.5 0.627907ZM4.5 2.72093C4.21101 2.72093 3.97674 2.9552 3.97674 3.24419C3.97674 3.53317 4.21101 3.76744 4.5 3.76744C4.78899 3.76744 5.02326 3.53317 5.02326 3.24419C5.02326 2.9552 4.78899 2.72093 4.5 2.72093ZM3.34884 3.24419C3.34884 2.60842 3.86423 2.09302 4.5 2.09302C5.13577 2.09302 5.65116 2.60842 5.65116 3.24419C5.65116 3.87996 5.13577 4.39535 4.5 4.39535C3.86423 4.39535 3.34884 3.87996 3.34884 3.24419ZM0.9818 5.75439C1.09818 5.88291 1.08834 6.08145 0.95981 6.19784C0.722172 6.41302 0.627907 6.619 0.627907 6.80233C0.627907 7.122 0.930981 7.51597 1.66885 7.84802C2.37726 8.1668 3.37794 8.37209 4.5 8.37209C5.62206 8.37209 6.62274 8.1668 7.33115 7.84802C8.06902 7.51597 8.37209 7.122 8.37209 6.80233C8.37209 6.619 8.27783 6.41302 8.04019 6.19784C7.91166 6.08145 7.90182 5.88291 8.0182 5.75438C8.13458 5.62586 8.33312 5.61601 8.46165 5.7324C8.78105 6.02161 9 6.38418 9 6.80233C9 7.523 8.366 8.07089 7.58882 8.42062C6.78217 8.78361 5.68983 9 4.5 9C3.31017 9 2.21783 8.78361 1.41118 8.42062C0.634005 8.07089 4.57289e-08 7.523 4.13482e-08 6.80233C3.88065e-08 6.38418 0.21895 6.02161 0.538348 5.73239C0.666876 5.61601 0.865416 5.62586 0.9818 5.75439Z"
					fill="#959595"
				/>
			</svg>
		);
	},
	Creator = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={9}
				height={9}
				viewBox="0 0 9 9"
				fill="none"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.99773 9H4.00227C2.45132 9 1.67584 9 1.14706 8.54468C0.618283 8.08937 0.508614 7.32719 0.289277 5.80285L0.163833 4.93104C-0.00691751 3.74437 -0.0922925 3.15103 0.150915 2.64373C0.394122 2.13642 0.911785 1.82805 1.94711 1.21131L2.57029 0.840092C3.51047 0.280031 3.98056 0 4.5 0C5.01944 0 5.48953 0.28003 6.42971 0.840091L7.05289 1.21131C8.08821 1.82805 8.60588 2.13642 8.84909 2.64373C9.09229 3.15103 9.00692 3.74437 8.83617 4.93104L8.71072 5.80285C8.49138 7.32719 8.38172 8.08937 7.85294 8.54468C7.32416 9 6.54868 9 4.99773 9ZM2.87891 6.09893C2.9899 5.94918 3.20128 5.91777 3.35102 6.02877C3.67877 6.27171 4.07439 6.41241 4.50004 6.41241C4.9257 6.41241 5.32132 6.27171 5.64907 6.02877C5.79881 5.91777 6.01019 5.94918 6.12118 6.09893C6.23218 6.24867 6.20077 6.46005 6.05102 6.57104C5.61344 6.89539 5.07828 7.08741 4.50004 7.08741C3.92181 7.08741 3.38665 6.89539 2.94907 6.57104C2.79932 6.46005 2.76791 6.24867 2.87891 6.09893Z"
					fill="#959595"
				/>
			</svg>
		);
	},
	UploadImage = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={87}
				height={85}
				fill="none"
			>
				<rect
					width={86.6}
					height={84.6}
					x={0.2}
					y={0.2}
					fill="url(#a)"
					stroke="url(#b)"
					strokeWidth={0.4}
					rx={22.8}
				/>
				<path
					fill="#CDCEBF"
					fillRule="evenodd"
					d="M36.555 45.454c1.383-.625 2.5-.238 3.582.138.816.283 1.66.576 2.828.576.908 0 1.443-.773 2.217-2.049.77-1.268 1.727-2.846 3.662-2.846 2.688 0 4.354 1.634 5.483 2.84a28.4 28.4 0 0 0 .048-1.613c0-8.099-2.977-10.969-11.375-10.969s-11.375 2.87-11.375 10.97c0 3.02.415 5.313 1.372 7.001.602-1.144 1.911-3.302 3.558-4.048Z"
					clipRule="evenodd"
					opacity={0.4}
				/>
				<path
					fill="#CDCEBF"
					fillRule="evenodd"
					d="M53.77 46.023c-.171-.17-.353-.364-.548-.575-1.031-1.108-2.316-2.488-4.378-2.488-.868 0-1.392.76-2.15 2.011-.781 1.286-1.75 2.885-3.73 2.885-1.473 0-2.552-.375-3.42-.677-1.022-.356-1.55-.513-2.243-.197-1.321.598-2.646 3.013-3.045 3.892-.024.054-.06.098-.094.145 1.794 1.732 4.638 2.45 8.839 2.45 6.952 0 10.181-1.978 11.09-7.25a.866.866 0 0 1-.32-.196Z"
					clipRule="evenodd"
				/>
				<path
					fill="#CDCEBF"
					d="M41.949 38.882c0-1.402-1.184-2.544-2.638-2.544-1.453 0-2.638 1.142-2.638 2.544 0 1.402 1.184 2.543 2.638 2.543s2.638-1.141 2.638-2.543Z"
				/>
				<defs>
					<linearGradient
						id="a"
						x1={43.5}
						x2={-25.219}
						y1={0}
						y2={96.825}
						gradientUnits="userSpaceOnUse"
					>
						<stop
							stopColor="#D4FFB9"
							stopOpacity={0.44}
						/>
						<stop
							offset={0.563}
							stopColor="#95958E"
							stopOpacity={0.438}
						/>
						<stop
							offset={1}
							stopColor="#D9D9D9"
							stopOpacity={0}
						/>
					</linearGradient>
					<linearGradient
						id="b"
						x1={43.5}
						x2={43.5}
						y1={0}
						y2={85}
						gradientUnits="userSpaceOnUse"
					>
						<stop
							stopColor="#EBED8F"
							stopOpacity={0.67}
						/>
						<stop
							offset={1}
							stopColor="#CBF3E2"
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>
			</svg>
		);
	},
	Dropdown = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={12}
				height={7}
				fill="currentColor"
			>
				<path
					fill="currentColor"
					fillOpacity={0.8}
					d="M6.663 6.627a1 1 0 0 1-1.42-.017L.82 2.047C.2 1.409.66.34 1.55.351l8.956.108c.889.01 1.323 1.09.689 1.713L6.663 6.627Z"
				/>
			</svg>
		);
	},
	ReputationMedal = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={19}
				height={17}
				fill="none"
			>
				<path
					fill="#fff"
					d="m9.502 12.52-3.524 3.497c-.505.5-.757.751-.973.84-.49.2-1.038.04-1.302-.38-.115-.185-.155-.52-.233-1.191-.045-.38-.067-.569-.13-.727a1.307 1.307 0 0 0-.796-.754c-.165-.056-.361-.073-.753-.107-.695-.06-1.042-.09-1.235-.197a.985.985 0 0 1-.424-1.252c.086-.21.339-.46.843-.962l2.303-2.284 1.157-1.11 5.067 4.627 4.96-4.754 1.182 1.08 2.354 2.225c.516.488.774.732.864.94a.987.987 0 0 1-.394 1.262c-.191.112-.538.151-1.23.229-.392.043-.587.065-.75.126a1.312 1.312 0 0 0-.78.774c-.06.16-.077.35-.113.73-.063.672-.095 1.008-.206 1.196-.255.428-.799.602-1.293.413-.217-.083-.475-.327-.991-.815L9.502 12.52Z"
					opacity={0.5}
				/>
				<path
					fill="#fff"
					fillOpacity={0.98}
					fillRule="evenodd"
					d="M9.502 12.46c3.653-.047 6.582-2.855 6.544-6.273C16.006 2.77 13.014.037 9.36.084 5.708.13 2.78 2.938 2.818 6.356c.039 3.417 3.031 6.15 6.684 6.103Zm-.1-8.84c-.269.003-.445.307-.797.914l-.091.157c-.1.172-.15.259-.23.316-.078.058-.177.08-.375.124l-.18.04c-.695.157-1.043.236-1.123.486-.08.25.16.508.642 1.022l.124.133c.137.146.205.219.237.31.031.09.022.19.004.387l-.017.18c-.064.694-.096 1.042.123 1.193.22.151.544.007 1.194-.283l.168-.075c.184-.082.277-.123.375-.124.098-.002.191.037.378.115l.17.07c.655.273.984.41 1.199.253.215-.157.175-.504.096-1.197l-.021-.179c-.023-.197-.034-.295-.005-.387.03-.092.096-.166.23-.316l.121-.136c.47-.526.704-.79.618-1.038-.085-.248-.435-.317-1.134-.456l-.18-.036c-.199-.04-.298-.06-.379-.115-.08-.055-.132-.14-.236-.31l-.094-.155c-.366-.598-.55-.897-.817-.893Z"
					clipRule="evenodd"
				/>
			</svg>
		);
	},
	ReputationView = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={25}
				height={25}
				fill="none"
			>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeOpacity={0.99}
					strokeWidth={0.8}
					d="m7.85 20.859 7.427-7.423"
				/>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeOpacity={0.99}
					strokeWidth={0.6}
					d="m9.558 13.497 6.073-.415-.418 6.073"
				/>
			</svg>
		);
	},
	X = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={15}
				height={16}
				fill="none"
			>
				<path
					fill="#E2DFDF"
					d="M11.088 1.27h2.041l-4.46 5.615 5.247 7.642H9.808L6.591 9.892l-3.68 4.635H.867l4.77-6.007L.604 1.27h4.212l2.908 4.236 3.363-4.237Zm-.716 11.91h1.13l-7.3-10.635H2.99l7.383 10.636Z"
				/>
			</svg>
		);
	},
	TikTok = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={17}
				height={15}
				fill="none"
			>
				<path
					fill="#E2DFDF"
					d="M11.74 0H9.12v10.217c0 1.218-1.009 2.218-2.264 2.218s-2.263-1-2.263-2.218c0-1.195.986-2.174 2.196-2.217V5.435c-2.667.043-4.818 2.152-4.818 4.782C1.97 12.87 4.166 15 6.878 15c2.711 0 4.908-2.152 4.908-4.783V4.978a6.22 6.22 0 0 0 3.473 1.13V3.544c-1.972-.065-3.518-1.63-3.518-3.543Z"
				/>
			</svg>
		);
	},
	Instagram = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={15}
				height={14}
				fill="none"
			>
				<path
					fill="#E2DFDF"
					d="M11.514 4.096c-.48.001-.872-.374-.873-.838 0-.463.389-.84.87-.841.48-.001.872.374.873.838 0 .464-.39.84-.87.841Z"
				/>
				<path
					fill="#E2DFDF"
					fillRule="evenodd"
					d="M7.652 10.594c-2.059.004-3.731-1.602-3.735-3.587-.004-1.985 1.662-3.598 3.72-3.601 2.06-.004 3.732 1.602 3.736 3.587.004 1.985-1.663 3.597-3.721 3.6ZM7.64 4.667c-1.336.002-2.418 1.049-2.416 2.337.003 1.289 1.089 2.332 2.425 2.33 1.337-.003 2.418-1.05 2.416-2.339-.003-1.288-1.089-2.33-2.425-2.328Z"
					clipRule="evenodd"
				/>
				<path
					fill="#E2DFDF"
					fillRule="evenodd"
					d="M2.877.377c.46-.174.988-.293 1.76-.329C5.413.013 5.66.004 7.632.001c1.971-.004 2.219.003 2.993.037.773.032 1.3.15 1.763.322a3.57 3.57 0 0 1 1.287.804c.404.389.653.779.84 1.239.18.445.304.953.34 1.698.037.747.046.985.05 2.886.004 1.9-.004 2.139-.038 2.886-.034.745-.155 1.254-.334 1.699a3.42 3.42 0 0 1-.835 1.241c-.402.39-.807.63-1.284.81-.462.174-.989.293-1.761.329-.775.035-1.022.043-2.994.047-1.97.004-2.218-.004-2.993-.036-.772-.033-1.3-.15-1.762-.322a3.578 3.578 0 0 1-1.288-.805 3.416 3.416 0 0 1-.84-1.239c-.18-.444-.304-.953-.34-1.698-.037-.746-.046-.985-.05-2.886-.004-1.9.004-2.139.038-2.885s.155-1.254.334-1.7a3.42 3.42 0 0 1 .835-1.241c.403-.39.807-.63 1.285-.81Zm.497 12.088c.256.095.64.208 1.348.238.766.032.996.039 2.934.035 1.939-.003 2.168-.011 2.934-.046.707-.032 1.091-.147 1.347-.243.339-.128.58-.28.834-.525.253-.246.41-.48.541-.806.099-.247.216-.618.247-1.3.034-.739.04-.96.037-2.83-.003-1.868-.012-2.09-.048-2.827-.034-.682-.152-1.053-.252-1.299a2.163 2.163 0 0 0-.545-.804 2.257 2.257 0 0 0-.836-.522c-.256-.096-.64-.209-1.348-.239-.766-.032-.995-.039-2.934-.035-1.938.004-2.167.011-2.933.046-.708.033-1.092.147-1.348.244-.338.127-.58.279-.834.525-.253.245-.41.478-.541.806-.098.246-.217.617-.247 1.3-.033.738-.04.96-.037 2.828.004 1.869.012 2.09.048 2.828.033.683.153 1.053.252 1.3.133.326.29.559.545.804.255.243.497.395.836.522Z"
					clipRule="evenodd"
				/>
			</svg>
		);
	},
	Discord = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={14}
				fill="none"
			>
				<g clipPath="url(#a)">
					<path
						fill="#E2DFDF"
						d="M13.228 2.424a13.89 13.89 0 0 0-3.166-.884.05.05 0 0 0-.051.022 7.727 7.727 0 0 0-.395.729 13.148 13.148 0 0 0-3.556 0 7.103 7.103 0 0 0-.4-.73.052.052 0 0 0-.052-.02 13.852 13.852 0 0 0-3.167.883.044.044 0 0 0-.02.016C.404 5.152-.15 7.797.122 10.41c.001.013.01.025.02.033 1.331.879 2.62 1.413 3.885 1.767a.054.054 0 0 0 .055-.016c.3-.368.566-.756.795-1.164.013-.024 0-.052-.027-.061a8.938 8.938 0 0 1-1.214-.52c-.03-.017-.033-.056-.005-.075.082-.055.163-.113.241-.17a.052.052 0 0 1 .05-.006c2.547 1.046 5.303 1.046 7.82 0a.052.052 0 0 1 .05.005c.078.058.16.116.242.17a.042.042 0 0 1-.005.075c-.387.204-.79.376-1.214.52-.027.01-.04.038-.026.062.233.408.5.795.794 1.163a.053.053 0 0 0 .054.017 13.47 13.47 0 0 0 3.891-1.767.044.044 0 0 0 .02-.033c.325-3.02-.543-5.643-2.3-7.968a.038.038 0 0 0-.02-.017ZM5.257 8.818a1.41 1.41 0 0 1-1.398-1.41c0-.779.619-1.412 1.398-1.412.785 0 1.41.639 1.398 1.411 0 .778-.62 1.411-1.398 1.411Zm5.17 0a1.41 1.41 0 0 1-1.399-1.41c0-.779.62-1.412 1.398-1.412.785 0 1.41.639 1.399 1.411 0 .778-.614 1.411-1.399 1.411Z"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path
							fill="#fff"
							d="M.058 0h15.558v14H.058z"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	},
	Telegram = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={13}
				fill="none"
			>
				<g clipPath="url(#a)">
					<path
						fill="#E2DFDF"
						fillRule="evenodd"
						d="M15.29 6.5c0 3.59-3.251 6.5-7.261 6.5S.769 10.09.769 6.5 4.019 0 8.029 0s7.26 2.91 7.26 6.5Zm-7-1.701c-.707.263-2.118.807-4.235 1.632-.344.123-.524.242-.54.36-.028.197.249.275.626.381l.158.046c.371.107.87.234 1.129.239.235.004.498-.083.787-.26C8.193 6 9.214 5.396 9.278 5.383c.045-.01.108-.02.15.013.043.034.038.098.034.115-.027.105-1.114 1.009-1.676 1.476-.175.146-.3.25-.325.273-.057.053-.115.103-.17.151-.345.298-.603.52.014.885.297.175.534.32.77.463.259.158.517.315.85.511.085.05.166.102.245.152.301.192.572.365.905.337.194-.016.395-.18.497-.666.24-1.151.713-3.646.822-4.673.01-.09-.002-.206-.012-.256a.265.265 0 0 0-.103-.176.519.519 0 0 0-.282-.076c-.273.004-.692.135-2.708.886Z"
						clipRule="evenodd"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path
							fill="#fff"
							d="M.769 0h14.52v13H.77z"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	},
	Youtube = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={14}
				fill="none"
			>
				<g clipPath="url(#a)">
					<path
						fill="#E2DFDF"
						fillRule="evenodd"
						d="M15.187 2.82c.242.218.415.49.503.788.325 1.1.325 3.392.325 3.392s0 2.292-.325 3.392c-.088.298-.261.57-.503.788a2.014 2.014 0 0 1-.872.457c-1.217.295-6.079.295-6.079.295s-4.861 0-6.078-.295a2.013 2.013 0 0 1-.872-.457 1.726 1.726 0 0 1-.503-.788C.458 9.292.458 7 .458 7s0-2.293.325-3.392c.088-.298.261-.57.503-.788.24-.219.542-.377.872-.458 1.217-.294 6.078-.294 6.078-.294s4.862 0 6.079.294c.33.081.631.24.872.458ZM10.712 7 6.645 4.918v4.164L10.712 7Z"
						clipRule="evenodd"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path
							fill="#fff"
							d="M.442 0H16v14H.442z"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	},
	FancyArrowDown = function () {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={40}
				height={38}
				fill="none"
			>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M24.167 17.417 20 21.375l-4.167-3.958"
				/>
				<path
					stroke="#fff"
					strokeWidth={1.5}
					d="M5.588 14.171c1.086-4.397 4.7-7.83 9.33-8.862a23.397 23.397 0 0 1 10.165 0c4.629 1.031 8.243 4.465 9.329 8.863a20.114 20.114 0 0 1 0 9.656c-1.086 4.398-4.7 7.832-9.33 8.863a23.4 23.4 0 0 1-10.165 0c-4.629-1.031-8.243-4.465-9.329-8.863a20.115 20.115 0 0 1 0-9.656Z"
				/>
				<path
					stroke="#A1F294"
					strokeLinecap="round"
					strokeWidth={2}
					d="M5.588 14.171a20.115 20.115 0 0 0 0 9.657c1.086 4.398 4.7 7.832 9.33 8.863a23.4 23.4 0 0 0 10.165 0c4.629-1.031 8.243-4.465 9.329-8.863a20.114 20.114 0 0 0 0-9.656c-1.086-4.398-4.7-7.832-9.33-8.863"
				/>
			</svg>
		);
	};
