export interface ContactDataProps {
    email: string;
    name: string;
    message: string;
}

export type RequestStatusType = "pending" | "success" | "error" | null;