import { SyntheticEvent } from "react";

export type BaseTextareaProps = {
	label: string | undefined;
	value?: string;
	onChange?: (e: SyntheticEvent) => void;
};
