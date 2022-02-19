import MainTableStyles from "./styles";

export const Input: React.FC<{
    value?: string;
    onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
    return <MainTableStyles.Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(e.target.value)}
    />;
};
