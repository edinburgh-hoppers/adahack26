import { html, htmlToResponse } from "@mastrojs/mastro"

export const GET = (_req: Request) => {
    return new Response(
        null, 
        {
            status: 307,
            headers: {
                'Location': 'https://docs.google.com/forms/d/e/1FAIpQLSeCSKGyveJcdLX-C1ss0DWQUCBpII6USwRGcLErS5YmwuTyGw/viewform?usp=dialog'
            }
        });
}
