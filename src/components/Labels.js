import React from 'react';
import Chip from '@material-ui/core/Chip';
import FunctionsIcon from '@material-ui/icons/Functions';
import HistoryIcon from '@material-ui/icons/History';
import PublicIcon from '@material-ui/icons/Public';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna } from '@fortawesome/free-solid-svg-icons'

function MathLabel(props) {
	return (
		<Chip
			icon={< FunctionsIcon />}
			label="Wiskunde"
			variant="outlined"
			{...props}
		/>
	);
}

function WorldLabel(props) {
	return (
		<Chip
			icon={<PublicIcon />}
			label="Geografie"
			variant="outlined"
			{...props}
		/>
	);
}

function HistoryLabel(props) {
	return (
		<Chip
			icon={<HistoryIcon />}
			label="Geschiedenis"
			variant="outlined"
			{...props}
		/>
	);
}

function DNALabel(props) {
	return (
		<Chip
			icon={<FontAwesomeIcon icon={faDna} />}
			label="Wetenschap"
			variant="outlined"
			{...props}
		/>
	);
}

export {
	MathLabel,
	WorldLabel,
	HistoryLabel,
	DNALabel
};
