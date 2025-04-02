"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const anime = await prisma.category.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'anime',
            icon: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043233-anime-away-face-no-nobody-spirited_113254.png',
        },
    });
    const cinema = await prisma.category.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: 'cinema',
            icon: 'https://cdn.icon-icons.com/icons2/810/PNG/512/clapperboard_cinema_icon-icons.com_66131.png',
        },
    });
    const cucina = await prisma.category.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: 'cucina',
            icon: 'https://cdn.icon-icons.com/icons2/94/PNG/512/cooking_16811.png',
        },
    });
    const gym = await prisma.category.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            name: 'gym',
            icon: 'https://cdn.icon-icons.com/icons2/547/PNG/512/1455554322_line-47_icon-icons.com_53325.png',
        },
    });
    const location1 = await prisma.location.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'Bar Basso',
            address: 'Via Plinio, 39, 20129 Milano MI',
            image: 'https://www.coqtailmilano.com/wp-content/uploads/2021/10/Bar-Basso-Milano-esterni-Coqtail-Milano.jpg',
        },
    });
    const location2 = await prisma.location.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: 'Fonderie Milanesi',
            address: 'Via Giovenale, 7, 20136 Milano MI',
            image: 'https://vivimilano.corriere.it/wp-content/uploads/2014/06/fonderie-milanesi-2.jpg?v=782789',
        },
    });
    const location3 = await prisma.location.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: 'Rita & Cocktails',
            address: 'Via Angelo Fumagalli, 1, 20143 Milano MI',
            image: 'https://zero-media.s3.amazonaws.com/uploads/2015/05/Rita_Interior_1_72dpi.jpg',
        },
    });
    const location4 = await prisma.location.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            name: 'Dry Milano',
            address: 'Via Solferino, 33, 20121 Milano MI',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPE8FrF79JZI5huXUnP7aJWiZ5z8NPr94Fg&usqp=CAU',
        },
    });
    const location5 = await prisma.location.upsert({
        where: { id: 5 },
        update: {},
        create: {
            id: 5,
            name: '41 Wine Bar & More',
            address: 'Via Volturno, 41, 20124 Milano MI',
            image: 'https://lh3.googleusercontent.com/p/AF1QipNm9tfjn-zr6TTWyWnnR5xK8PstzNwS_fGxFlbm=w768-h768-n-o-k-v1',
        },
    });
    const futureEv1 = await prisma.futureEvent.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            title: 'future event 1',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-01-15T08:00:00.000Z',
            locationId: 1,
            categories: {
                connect: [{ id: 1 }],
            },
        },
    });
    const futureEv2 = await prisma.futureEvent.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            title: 'future event 2',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-02-21T14:30:00.000Z',
            locationId: 1,
            categories: {
                connect: [{ id: 1 }],
            },
        },
    });
    const futureEv3 = await prisma.futureEvent.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            title: 'future event 3',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-03-10T10:45:00.000Z',
            locationId: 1,
            categories: {
                connect: [{ id: 1 }],
            },
        },
    });
    const futureEv4 = await prisma.futureEvent.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            title: 'future event 4',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-04-05T16:20:00.000Z',
            locationId: 1,
            categories: {
                connect: [{ id: 1 }],
            },
        },
    });
    const futureEv5 = await prisma.futureEvent.upsert({
        where: { id: 5 },
        update: {},
        create: {
            id: 5,
            title: 'future event 5',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-05-18T12:00:00.000Z',
            locationId: 2,
            categories: {
                connect: [{ id: 2 }],
            },
        },
    });
    const futureEv6 = await prisma.futureEvent.upsert({
        where: { id: 6 },
        update: {},
        create: {
            id: 6,
            title: 'future event 6',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-06-30T09:15:00.000Z',
            locationId: 2,
            categories: {
                connect: [{ id: 2 }],
            },
        },
    });
    const futureEv7 = await prisma.futureEvent.upsert({
        where: { id: 7 },
        update: {},
        create: {
            id: 7,
            title: 'future event 7',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-07-12T13:45:00.000Z',
            locationId: 2,
            categories: {
                connect: [{ id: 2 }],
            },
        },
    });
    const futureEv8 = await prisma.futureEvent.upsert({
        where: { id: 8 },
        update: {},
        create: {
            id: 8,
            title: 'future event 8',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-08-24T17:00:00.000Z',
            locationId: 2,
            categories: {
                connect: [{ id: 2 }],
            },
        },
    });
    const futureEv9 = await prisma.futureEvent.upsert({
        where: { id: 9 },
        update: {},
        create: {
            id: 9,
            title: 'future event 9',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-09-05T08:30:00.000Z',
            locationId: 3,
            categories: {
                connect: [{ id: 3 }],
            },
        },
    });
    const futureEv10 = await prisma.futureEvent.upsert({
        where: { id: 10 },
        update: {},
        create: {
            id: 10,
            title: 'future event 10',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-10-17T10:00:00.000Z',
            locationId: 3,
            categories: {
                connect: [{ id: 3 }],
            },
        },
    });
    const futureEv11 = await prisma.futureEvent.upsert({
        where: { id: 11 },
        update: {},
        create: {
            id: 11,
            title: 'future event 11',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-11-28T11:30:00.000Z',
            locationId: 3,
            categories: {
                connect: [{ id: 3 }],
            },
        },
    });
    const futureEv12 = await prisma.futureEvent.upsert({
        where: { id: 12 },
        update: {},
        create: {
            id: 12,
            title: 'future event 12',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-12-09T14:00:00.000Z',
            locationId: 3,
            categories: {
                connect: [{ id: 3 }],
            },
        },
    });
    const futureEv13 = await prisma.futureEvent.upsert({
        where: { id: 13 },
        update: {},
        create: {
            id: 13,
            title: 'future event 13',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-01-30T15:45:00.000Z',
            locationId: 4,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv14 = await prisma.futureEvent.upsert({
        where: { id: 14 },
        update: {},
        create: {
            id: 14,
            title: 'future event 14',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-02-14T16:45:00.000Z',
            locationId: 4,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv15 = await prisma.futureEvent.upsert({
        where: { id: 15 },
        update: {},
        create: {
            id: 15,
            title: 'future event 15',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-03-30T18:00:00.000Z',
            locationId: 4,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv16 = await prisma.futureEvent.upsert({
        where: { id: 16 },
        update: {},
        create: {
            id: 16,
            title: 'future event 16',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-04-11T09:30:00.000Z',
            locationId: 4,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv17 = await prisma.futureEvent.upsert({
        where: { id: 17 },
        update: {},
        create: {
            id: 17,
            title: 'future event 17',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-05-22T12:15:00.000Z',
            locationId: 4,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv18 = await prisma.futureEvent.upsert({
        where: { id: 18 },
        update: {},
        create: {
            id: 18,
            title: 'future event 18',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-06-05T14:45:00.000Z',
            locationId: 4,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv19 = await prisma.futureEvent.upsert({
        where: { id: 19 },
        update: {},
        create: {
            id: 19,
            title: 'future event 19',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-07-18T16:00:00.000Z',
            locationId: 5,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
    const futureEv20 = await prisma.futureEvent.upsert({
        where: { id: 20 },
        update: {},
        create: {
            id: 20,
            title: 'future event 20',
            image: 'https://media.istockphoto.com/id/185284489/it/foto/arancio.jpg?s=1024x1024&w=is&k=20&c=BDKU9_YXiv_8E8LO-qjT-WpNQcRQu76AJODhGPJVmmI=',
            date: '2024-08-30T17:30:00.000Z',
            locationId: 5,
            categories: {
                connect: [{ id: 4 }],
            },
        },
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map