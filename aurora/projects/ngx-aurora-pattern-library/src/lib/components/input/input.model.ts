export type LabelPosition = 'top' | 'left' | 'right' | 'default';
export type LabelPositionsClasses =
    | 'top-position'
    | 'left-position'
    | 'right-position'
    | 'default-position';

export const positionMap = new Map<LabelPosition, LabelPositionsClasses>([
    ['top', 'top-position'],
    ['left', 'left-position'],
    ['right', 'right-position'],
]);
