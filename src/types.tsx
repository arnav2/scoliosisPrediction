export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

export enum SortDirection {
    ASCENDING = 'asc',
    DESCENDING = 'desc',
}

export enum UploadStatus {
    NOT_UPLOADED = 'NOT UPLOADED',
    UPLOADING = 'UPLOADING',
    ERROR_UPLOADING = 'ERROR UPLOADING',
    UPLOADED = 'UPLOADED',
}

export enum PredictionStatus {
    NOT_DECIDED = "NOT DECIDED",
    PREDICTING = 'PREDICTING',
    POSITIVE = 'POSITIVE',
    NEGATIVE = 'NEGATIVE',
    INCONCLUSIVE = 'INCONCLUSIVE',
}

export const uploadStatusColorMap: Record<UploadStatus, string> = {
    [UploadStatus.NOT_UPLOADED]: '#f44336',
    [UploadStatus.UPLOADING]: '#ff9800',
    [UploadStatus.ERROR_UPLOADING]: '#e91e63',
    [UploadStatus.UPLOADED]: '#4caf50',
};

export const scoliosisPredictionStatusColorMap: Record<PredictionStatus, string> = {
    [PredictionStatus.NOT_DECIDED]: '#f44336',
    [PredictionStatus.PREDICTING]: '#ff9800',
    [PredictionStatus.POSITIVE]: '#4caf50',
    [PredictionStatus.NEGATIVE]: '#e91e63',
    [PredictionStatus.INCONCLUSIVE]: '#ffdbd3'
}

export interface IPatient {
    id: number;
    name: string;
    age: number;
    gender: Gender;
    videoUploadStatus: UploadStatus;
    scoliosisPredictionStatus: PredictionStatus;
    pointCloudData: string;
}
