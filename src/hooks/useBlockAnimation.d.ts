type BlockStyle = {
    left: string;
    width: string;
    height: string;
    animationDelay: string;
    animationDuration: string;
};
export default function useBlockAnimation(): {
    blocks: BlockStyle[];
};
export {};
