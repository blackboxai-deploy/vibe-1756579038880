import { NextResponse } from 'next/server';
import { createInquiry } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newInquiry = await createInquiry(body);
        return NextResponse.json(newInquiry, { status: 201 });
    } catch (error) {
        console.error('Error creating inquiry:', error);
 
        if (error instanceof Error) {
            return new NextResponse(JSON.stringify({ message: error.message }), { status: 400 });
        }
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}