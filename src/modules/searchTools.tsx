import React from 'react';

export const highlightTerm = (termToHighlight: string, inString: string, highlightClass: string) => {
	const parts = inString.split(new RegExp(`(${termToHighlight})`, 'gi'));

	return parts.map((part, i) => {
		if (part.toLowerCase() === termToHighlight.toLowerCase()) {
			return (
				<span key={i} className={highlightClass}>
					{part}
				</span>
			);
		}

		return part;
	});
};

export const termInString = (searchString: string, sourceString: string) => {
	searchString = searchString.toString().toLowerCase();
	sourceString = sourceString.toString().toLowerCase();
	const searchStringIndex = sourceString.indexOf(searchString);
	return searchStringIndex > -1;
};
