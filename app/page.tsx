import { prisma } from "@/lib/db";

interface Impression {
    id: number;
    ip_address: String;
    type: String | null;
    app: String | null;
    user_agent: String | null;
    action: String | null;
    language: String | null;
    url: String | null;
    screen: String | null;
    viewport: String | null;
    date: Date | null;
}

async function loadData() {
    return {
        impressions: await prisma.impressions.findMany(),
    };
}

async function LandingPage() {
    const data = await loadData();
    const impressions: Impression[] = data.impressions;

    return <div>
        {impressions.map((impression: Impression) => {
            return <div key={impression.id} style={{ display: 'flex' }}>
                <p>{impression.ip_address}</p>
                <p>{impression.action}</p>
                <p>{impression.type}</p>
                <p>{impression.app}</p>
                <p>{impression.user_agent}</p>
                <p>{impression.language}</p>
                <p>{impression.url}</p>
                <p>{impression.screen}</p>
                <p>{impression.viewport}</p>
            </div>;
        })};
    </div>;
}

export default LandingPage;
