export type LoginPayload = {
    email: string;
    password: string;
}
export type LoginResponse = {
    refresh : string;
    access : string;
}

export type RegisterPayload = {
    name: string;
    email: string;
    ph_num: string;
    password: string;
}

export type RegisterResponse = {
    id: number,
    name: string;
    email: string;
    ph_num: string;
}

export type VerifyUserType = {
    id: number,
    name: string;
    email: string;
    ph_num: string;
}