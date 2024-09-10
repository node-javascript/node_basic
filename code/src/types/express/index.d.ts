import express from 'express';

declare global {
    // 인터페이쓰는 중복 선언하면 합쳐지는 성질을 가짐
    interface Error {
        status?: number;
    }

    namespace Express {
        export interface Request {
            // user?: string;
            custom?: number;
        }
    }
}