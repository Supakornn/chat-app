import  prisma  from '@/app/libs/prismadb';
import getSession from './getSession';

const getCurrentUser = async () => { 
  try {
    const session = await getSession()
  } catch (error:any) {
    return null
  }
}