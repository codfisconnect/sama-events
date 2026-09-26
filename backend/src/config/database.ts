import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

export const connectDatabase = async (): Promise<boolean> => {
  try {
    await prisma.$connect();
    console.log('✓ Successfully connected to PostgreSQL via Prisma');
    return true;
  } catch (error) {
    console.warn('⚠️ PostgreSQL connection failed or database not initialized yet. Enquiries will be queued/logged safely.');
    return false;
  }
};
