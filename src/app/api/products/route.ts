import { NextResponse } from 'next/server';
import { getProducts, createProduct } from '@/lib/db';

export async function GET() {
    try {
        const products = await getProducts();
        return NextResponse.json(products);
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newProduct = await createProduct(body);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        // Add more specific error handling if needed
        if (error instanceof Error) {
            return new NextResponse(JSON.stringify({ message: error.message }), { status: 400 });
        }
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}