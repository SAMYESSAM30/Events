import { SyntheticEvent } from "react";

export type BaseInputProps = {
	label: string | undefined;
	value?: string;
	onChange?: (e: SyntheticEvent) => void;
};
