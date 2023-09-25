async function loadData() {
    const impressions = prisma.impression.findMany();
    console.log({ impressions });

    return {
        props: {
            impressions,
        },
    };
}

async function LandingPage(props: any) {
    const impressions = loadData();
    console.log({ props, impressions });

    return <div>Landing</div>;
}

export default LandingPage;
