-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "hostId" TEXT,
    "slug" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "kronoValue" INTEGER NOT NULL DEFAULT 5000,
    "hostCut" INTEGER NOT NULL DEFAULT 10,
    "name" TEXT,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Segment" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "totalEarnings" TEXT NOT NULL,

    CONSTRAINT "Segment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participants" (
    "segmentId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "Participants_pkey" PRIMARY KEY ("segmentId","characterId")
);

-- CreateTable
CREATE TABLE "SegmentItem" (
    "segmentId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "lucyId" TEXT NOT NULL,
    "rot" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL,
    "paymentType" TEXT NOT NULL,

    CONSTRAINT "SegmentItem_pkey" PRIMARY KEY ("segmentId","characterId")
);

-- CreateTable
CREATE TABLE "Item" (
    "lucyId" TEXT NOT NULL,
    "lucyLink" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("lucyId")
);

-- CreateTable
CREATE TABLE "SignUpCharacter" (
    "eventId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "SignUpCharacter_pkey" PRIMARY KEY ("eventId","characterId")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Segment" ADD CONSTRAINT "Segment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "Segment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentItem" ADD CONSTRAINT "SegmentItem_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "Segment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentItem" ADD CONSTRAINT "SegmentItem_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentItem" ADD CONSTRAINT "SegmentItem_lucyId_fkey" FOREIGN KEY ("lucyId") REFERENCES "Item"("lucyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignUpCharacter" ADD CONSTRAINT "SignUpCharacter_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignUpCharacter" ADD CONSTRAINT "SignUpCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;
