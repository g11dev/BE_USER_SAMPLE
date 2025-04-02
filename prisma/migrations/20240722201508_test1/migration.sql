-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "username" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FutureEvent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(50) NOT NULL,
    "image" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "FutureEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(50) NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastEvent" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "locationId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(200),

    CONSTRAINT "PastEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answers" TEXT[],
    "rightAnswer" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FutureEventToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FutureEventToQuestion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PastEventToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToFutureEvent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToPastEvent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_address_key" ON "Location"("name", "address");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_FutureEventToUser_AB_unique" ON "_FutureEventToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FutureEventToUser_B_index" ON "_FutureEventToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FutureEventToQuestion_AB_unique" ON "_FutureEventToQuestion"("A", "B");

-- CreateIndex
CREATE INDEX "_FutureEventToQuestion_B_index" ON "_FutureEventToQuestion"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PastEventToUser_AB_unique" ON "_PastEventToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PastEventToUser_B_index" ON "_PastEventToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToFutureEvent_AB_unique" ON "_CategoryToFutureEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToFutureEvent_B_index" ON "_CategoryToFutureEvent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPastEvent_AB_unique" ON "_CategoryToPastEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPastEvent_B_index" ON "_CategoryToPastEvent"("B");

-- AddForeignKey
ALTER TABLE "FutureEvent" ADD CONSTRAINT "FutureEvent_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastEvent" ADD CONSTRAINT "PastEvent_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FutureEventToUser" ADD CONSTRAINT "_FutureEventToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "FutureEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FutureEventToUser" ADD CONSTRAINT "_FutureEventToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FutureEventToQuestion" ADD CONSTRAINT "_FutureEventToQuestion_A_fkey" FOREIGN KEY ("A") REFERENCES "FutureEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FutureEventToQuestion" ADD CONSTRAINT "_FutureEventToQuestion_B_fkey" FOREIGN KEY ("B") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PastEventToUser" ADD CONSTRAINT "_PastEventToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "PastEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PastEventToUser" ADD CONSTRAINT "_PastEventToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToFutureEvent" ADD CONSTRAINT "_CategoryToFutureEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToFutureEvent" ADD CONSTRAINT "_CategoryToFutureEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "FutureEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPastEvent" ADD CONSTRAINT "_CategoryToPastEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPastEvent" ADD CONSTRAINT "_CategoryToPastEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "PastEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
