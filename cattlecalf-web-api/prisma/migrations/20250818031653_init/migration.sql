-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ranchesLimit" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ranch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId" TEXT,

    CONSTRAINT "Ranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" TEXT NOT NULL,
    "ranchId" TEXT,
    "name" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "lastModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cattle" (
    "id" TEXT NOT NULL,
    "ranchId" TEXT,
    "name" TEXT,
    "breed" INTEGER,
    "birth" TIMESTAMP(3),
    "arrival" TIMESTAMP(3),
    "soldDate" TIMESTAMP(3),
    "lastModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "earring" TEXT,

    CONSTRAINT "Cattle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Payments" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pharma" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT,
    "notes" TEXT,
    "totalMl" INTEGER,

    CONSTRAINT "Pharma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AdministeredPharma" (
    "id" TEXT NOT NULL,
    "cattleId" TEXT NOT NULL,
    "pharmaId" TEXT NOT NULL,
    "dosage" INTEGER,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdministeredPharma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CattleWeights" (
    "id" TEXT NOT NULL,
    "cattleId" TEXT,
    "value" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CattleWeights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Picture" (
    "id" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "binaryData" BYTEA NOT NULL,
    "cattleId" TEXT,
    "pharmaId" TEXT,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Ranch" ADD CONSTRAINT "Ranch_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_ranchId_fkey" FOREIGN KEY ("ranchId") REFERENCES "public"."Ranch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cattle" ADD CONSTRAINT "Cattle_ranchId_fkey" FOREIGN KEY ("ranchId") REFERENCES "public"."Ranch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payments" ADD CONSTRAINT "Payments_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AdministeredPharma" ADD CONSTRAINT "AdministeredPharma_cattleId_fkey" FOREIGN KEY ("cattleId") REFERENCES "public"."Cattle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AdministeredPharma" ADD CONSTRAINT "AdministeredPharma_pharmaId_fkey" FOREIGN KEY ("pharmaId") REFERENCES "public"."Pharma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CattleWeights" ADD CONSTRAINT "CattleWeights_cattleId_fkey" FOREIGN KEY ("cattleId") REFERENCES "public"."Cattle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Picture" ADD CONSTRAINT "Picture_cattleId_fkey" FOREIGN KEY ("cattleId") REFERENCES "public"."Cattle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Picture" ADD CONSTRAINT "Picture_pharmaId_fkey" FOREIGN KEY ("pharmaId") REFERENCES "public"."Pharma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
