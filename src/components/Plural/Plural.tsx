import React from "react"

interface PluralProps {
	num: number;
	text: string;
	pluralText?: string;
	pluralSuffix?: string;
	singularSuffix?: string;
}

const Plural: React.FC<PluralProps> = ({ num, text, pluralText, pluralSuffix, singularSuffix }) => (
	<>
		{num === 1
			? text + (singularSuffix || "")
			: pluralText || text + (pluralSuffix || "s")}
	</>
)

export default Plural
